import { COOKIE_NAME } from "@shared/const";
import { invokeLLM } from "./_core/llm";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { getStudentState, upsertStudentState } from "./db";
import { storageGetSignedUrl, storagePut } from "./storage";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  ai: router({
    uploadImage: publicProcedure
      .input(z.object({
        dataUrl: z.string().regex(/^data:image\/(jpeg|jpg|png|webp);base64,[A-Za-z0-9+/=]+$/).max(8_000_000),
        fileName: z.string().trim().min(1).max(120),
        mimeType: z.enum(["image/jpeg", "image/png", "image/webp"]),
      }))
      .mutation(async ({ input }) => {
        const base64 = input.dataUrl.split(",", 2)[1];
        if (!base64) throw new Error("The textbook image could not be read.");
        const safeName = input.fileName.replace(/[^a-z0-9._-]+/gi, "-").slice(-80) || "textbook-photo.jpg";
        const { key } = await storagePut(`study-helper/${Date.now()}-${safeName}`, Buffer.from(base64, "base64"), input.mimeType);
        return { url: await storageGetSignedUrl(key) };
      }),
    chat: publicProcedure
      .input(z.object({
        messages: z.array(z.object({
          role: z.enum(["user", "assistant"]),
          content: z.string().trim().min(1).max(2000),
        })).min(1).max(12),
        context: z.string().trim().max(1000).optional(),
        imageUrl: z.string().url().max(4000).optional(),
      }))
      .mutation(async ({ input }) => {
        const context = input.context ? `
Student context: ${input.context}` : "";
        const lastMessageIndex = input.messages.length - 1;
        const userMessages = input.messages.map((message, index) => {
          if (input.imageUrl && index === lastMessageIndex && message.role === "user") {
            return {
              role: message.role,
              content: [
                { type: "text" as const, text: message.content },
                { type: "image_url" as const, image_url: { url: input.imageUrl, detail: "high" as const } },
              ],
            };
          }
          return message;
        });
        const response = await invokeLLM({
          messages: [
            {
              role: "system",
              content: `You are the SUPPLYMATE study helper for Intermediate, Diploma, and B.Tech students in Telangana. Answer a wide range of student questions clearly and patiently: explain concepts, solve problems step by step, help with code, mathematics, science, exam revision, study planning, and everyday academic doubts. If a textbook image is attached, read it carefully, transcribe only the useful parts, and explain the question or diagram in simple language. Mention when the photo is blurry or missing context. Use simple language first, then add detail when useful. If a question is ambiguous, ask one short clarifying question. Never pretend to know an official syllabus detail; tell the student to verify college or board-specific information. Do not help with cheating during a live exam, dangerous instructions, or illegal activity. End difficult answers with one small next step the student can try.${context}`,
            },
            ...userMessages,
          ],
          maxTokens: 900,
        });
        const content = response.choices[0]?.message?.content;
        if (typeof content !== "string" || !content.trim()) {
          throw new Error("The study helper returned an empty answer.");
        }
        return content.trim();
      }),
  }),
  student: router({
    state: protectedProcedure.query(async ({ ctx }) => {
      return (await getStudentState(ctx.user.id)) ?? {};
    }),
    saveState: protectedProcedure
      .input(z.record(z.string(), z.unknown()))
      .mutation(async ({ ctx, input }) => upsertStudentState(ctx.user.id, input)),
  }),
});

export type AppRouter = typeof appRouter;

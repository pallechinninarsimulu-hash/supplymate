import { beforeEach, describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

const mocks = vi.hoisted(() => ({
  invokeLLM: vi.fn(),
  storagePut: vi.fn(),
  storageGetSignedUrl: vi.fn(),
}));

vi.mock("./_core/llm", () => ({ invokeLLM: mocks.invokeLLM }));
vi.mock("./storage", () => ({
  storagePut: mocks.storagePut,
  storageGetSignedUrl: mocks.storageGetSignedUrl,
}));
vi.mock("./db", () => ({
  getStudentState: vi.fn(),
  upsertStudentState: vi.fn(),
}));

function createContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("AI study helper image support", () => {
  beforeEach(() => vi.clearAllMocks());

  it("uploads an accepted textbook image and returns its signed URL", async () => {
    mocks.storagePut.mockResolvedValue({ key: "study-helper/photo.png" });
    mocks.storageGetSignedUrl.mockResolvedValue("https://files.example/photo.png");
    const caller = appRouter.createCaller(createContext());

    await expect(caller.ai.uploadImage({
      dataUrl: "data:image/png;base64,SGVsbG8=",
      fileName: "chapter-photo.png",
      mimeType: "image/png",
    })).resolves.toEqual({ url: "https://files.example/photo.png" });

    expect(mocks.storagePut).toHaveBeenCalledWith(
      expect.stringContaining("study-helper/"),
      expect.any(Buffer),
      "image/png",
    );
    expect(mocks.storageGetSignedUrl).toHaveBeenCalledWith("study-helper/photo.png");
  });

  it("adds the uploaded image to the latest student question", async () => {
    mocks.invokeLLM.mockResolvedValue({
      choices: [{ message: { content: "Here is the explanation." } }],
    });
    const caller = appRouter.createCaller(createContext());

    await expect(caller.ai.chat({
      messages: [{ role: "user", content: "Please solve this." }],
      imageUrl: "https://files.example/photo.png",
      context: "B.Tech student",
    })).resolves.toBe("Here is the explanation.");

    const request = mocks.invokeLLM.mock.calls[0][0];
    expect(request.messages[1].content).toEqual([
      { type: "text", text: "Please solve this." },
      { type: "image_url", image_url: { url: "https://files.example/photo.png", detail: "high" } },
    ]);
  });
});

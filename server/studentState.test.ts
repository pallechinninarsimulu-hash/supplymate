import { beforeEach, describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

const dbMocks = vi.hoisted(() => ({
  getStudentState: vi.fn(),
  upsertStudentState: vi.fn(),
}));

vi.mock("./db", () => dbMocks);

function createContext(): TrpcContext {
  return {
    user: {
      id: 42,
      openId: "student-open-id",
      email: "student@example.com",
      name: "Student User",
      loginMethod: "manus",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("student state sync", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns an empty state for a first-time authenticated student", async () => {
    dbMocks.getStudentState.mockResolvedValue(undefined);
    const caller = appRouter.createCaller(createContext());
    await expect(caller.student.state()).resolves.toEqual({});
    expect(dbMocks.getStudentState).toHaveBeenCalledWith(42);
  });

  it("saves the authenticated student's curriculum state", async () => {
    dbMocks.upsertStudentState.mockResolvedValue({ saved: true });
    const state = { level: "B.Tech", subjects: ["CS301"], progress: { CS301: [true] } };
    const caller = appRouter.createCaller(createContext());
    await expect(caller.student.saveState(state)).resolves.toEqual({ saved: true });
    expect(dbMocks.upsertStudentState).toHaveBeenCalledWith(42, state);
  });
});

import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/hello", clerkMiddleware(), (c) => {
  const auth = getAuth(c);
  if (!auth) {
    return c.json({ error: "UnAuthorized" });
  }

  return c.json({
    success: "Authorized",
  });
});

export const GET = handle(app);
export const POST = handle(app);

import { z } from "zod";
import { dbInstance } from "./db";
import { publicProcedure, router } from "./server/trpc";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const appRouter = router({
  userById: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;

    return dbInstance.userById(input);
  }),
  userList: publicProcedure.query(async () => {
    return dbInstance.userList();
  }),
  createUser: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;

      return dbInstance.userCreate(input);
    }),
});

export const AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});
server.listen(3000);

console.log("Server is running on port 3000");

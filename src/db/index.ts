import { db } from "./client";
import { users } from "./schema";
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto";

export class Database {
  async userList() {
    return await db.select().from(users);
  }

  async userById(id: string) {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async userCreate(data: { name: string }) {
    const id = randomUUID();
    await db.insert(users).values({ id, name: data.name });
    return { id, name: data.name };
  }
}

export const dbInstance = new Database();

import db from "@/_plugins/db";
import {members} from "../../../database/migrations/schema";

export type NewMember = typeof members.$inferInsert

export default {
  async insert(member: NewMember) {
    return db.insert(members).values(member).returning()
  }
}
import {sqliteTable, numeric, text, integer} from "drizzle-orm/sqlite-core"
import {sql} from "drizzle-orm";

export const members = sqliteTable("members", {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	name: text("name").notNull(),
	email: text("email").unique().notNull(),
	birthday: numeric("birthday").notNull(),
	gender: numeric("gender").notNull(),
	note: text("note"),
	created_at: text("created_at").default(sql`(CURRENT_TIMESTAMP)`),
	updated_at: text("updated_at").default(sql`(CURRENT_TIMESTAMP)`),
});
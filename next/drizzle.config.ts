// @see https://orm.drizzle.team/docs/overview
// @see https://orm.drizzle.team/kit-docs/overview#overview

import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./database/migrations/schema.ts",
  out: "./database/migrations",
  dialect: 'sqlite',
  dbCredentials: {
    url: './database/database.sqlite',
  },
  verbose: true,
  strict: true,
})
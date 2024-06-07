import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import path from "node:path";
import * as schema from '../../database/migrations/schema'
import "server-only"

const db = drizzle(
  new Database(path.resolve('database/database.sqlite')),
  { schema }
)

export default db;
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import path from "node:path";

const db = drizzle(new Database(path.resolve('database/database.sqlite')))

export default db;
import { drizzle } from 'drizzle-orm/node-postgres'
import { relations } from './relations'

export type Database = typeof db

export const db = drizzle(process.env.DATABASE_URL!, { relations })

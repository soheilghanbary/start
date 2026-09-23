import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import type {
  category,
  conversation,
  message,
  post,
  user,
} from './schema'

export type User = InferSelectModel<typeof user>
export type NewUser = InferInsertModel<typeof user>

export type Post = InferSelectModel<typeof post>
export type NewPost = InferInsertModel<typeof post>
// Category Types
export type Category = InferSelectModel<typeof category>
export type NewCategory = InferInsertModel<typeof category>

export type Conversation = InferSelectModel<typeof conversation>
export type Message = InferSelectModel<typeof message>

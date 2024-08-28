import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const postsViews = sqliteTable("posts_views", {
	id: text("id").primaryKey(),
	views: integer("views").default(0).notNull(),
});
import { column, defineDb, defineTable } from 'astro:db';

const Article = defineTable({
  columns: {
    author: column.text(),
    body: column.text(),
    title: column.text(),
    slug: column.text(),
    summary: column.text(),
    publishedAt: column.date(),
    updatedAt: column.date(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Article },
});

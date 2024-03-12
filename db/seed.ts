import { Article, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  // TODO
  await db.insert(Article).values([
    {
      author: 'Karl Edenstål',
      body: 'Just a simple test',
      title: 'Test article',
      slug: 'test-article',
      summary: 'A short summary',
      publishedAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

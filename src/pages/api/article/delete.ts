import type { APIRoute } from "astro";
import { Article, db, eq } from "astro:db";

export const GET: APIRoute = async ({ url, redirect }) => {
  const searchParams = url.searchParams;
  const slug = searchParams.get('slug')!

  await db.delete(Article).where(eq(Article.slug, slug));

  return redirect('/')
}
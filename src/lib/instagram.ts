/**
 * Latest posts from @brazilian.hairstudio via the Instagram API (Instagram Login).
 *
 * Runs at build time only. Set INSTAGRAM_ACCESS_TOKEN (a long-lived token from the
 * salon's Instagram professional account) in Vercel; without it the section falls
 * back to a plain "follow us" call to action. Images are downloaded and optimized by
 * astro:assets during the build, so the page never loads anything from Instagram.
 */

export interface InstagramPost {
  id: string;
  permalink: string;
  image: string;
  caption: string;
}

interface MediaResponse {
  data?: {
    id: string;
    caption?: string;
    media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
    media_url?: string;
    thumbnail_url?: string;
    permalink: string;
  }[];
}

let cached: Promise<InstagramPost[]> | undefined;

export function getLatestPosts(limit = 6): Promise<InstagramPost[]> {
  cached ??= fetchPosts(limit);
  return cached;
}

async function fetchPosts(limit: number): Promise<InstagramPost[]> {
  const token = import.meta.env.INSTAGRAM_ACCESS_TOKEN ?? process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return [];

  const url = new URL("https://graph.instagram.com/me/media");
  url.searchParams.set("fields", "id,caption,media_type,media_url,thumbnail_url,permalink");
  url.searchParams.set("limit", String(limit * 2));
  url.searchParams.set("access_token", token);

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
    const { data = [] } = (await res.json()) as MediaResponse;

    return data
      .map((m) => ({
        id: m.id,
        permalink: m.permalink,
        image: (m.media_type === "VIDEO" ? m.thumbnail_url : m.media_url) ?? "",
        caption: (m.caption ?? "").split("\n")[0].slice(0, 120),
      }))
      .filter((p) => p.image)
      .slice(0, limit);
  } catch (err) {
    console.warn("[instagram] could not load posts, showing fallback:", err);
    return [];
  }
}

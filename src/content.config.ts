import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

/** `title` → { title_en, title_pt, title_es } */
const localized = <K extends string>(...keys: K[]) =>
  Object.fromEntries(
    keys.flatMap((key) => ["en", "pt", "es"].map((lang) => [`${key}_${lang}`, z.string()])),
  ) as Record<`${K}_${"en" | "pt" | "es"}`, z.ZodString>;

const yaml = (dir: string) => glob({ pattern: "*.yaml", base: `./src/content/${dir}` });

const services = defineCollection({
  loader: yaml("services"),
  schema: z.object({
    order: z.string(),
    ...localized("title", "desc"),
  }),
});

const clients = defineCollection({
  loader: yaml("clients"),
  schema: z.object({
    ...localized("quote", "occasion"),
  }),
});

const history = defineCollection({
  loader: yaml("history"),
  schema: z.object({
    year: z.string(),
    ...localized("title", "desc"),
    image: z.string().nullish(),
  }),
});

const linktree = defineCollection({
  loader: yaml("linktree"),
  schema: z.object({
    profile_name: z.string(),
    ...localized("tagline"),
  }),
});

const linktreeLinks = defineCollection({
  loader: yaml("linktree-links"),
  schema: z.object({
    order: z.string(),
    ...localized("label"),
    url: z.string(),
    icon: z.enum(["calendar", "whatsapp", "google", "website", "instagram", "facebook"]),
    subtitle: z.string().default(""),
    highlight: z.boolean().default(false),
  }),
});

export const collections = { services, clients, history, linktree, linktreeLinks };

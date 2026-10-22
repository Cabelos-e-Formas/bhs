import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;
export const langs = Object.keys(ui) as Lang[];

/** BCP 47 tags for html[lang], hreflang and Intl formatting */
export const langTags: Record<Lang, string> = { en: 'en', pt: 'pt-BR', es: 'es' };

export function getLangFromUrl(url: URL) {
  // Locale roots build as `pt.html`, so drop the extension before matching
  const lang = (url.pathname.split('/')[1] ?? '').replace(/\.html$/, '');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return (ui[lang] as typeof ui[typeof defaultLang])[key] || ui[defaultLang][key];
  };
}

/** Read a localized content field (`title` → `title_pt`), falling back to English. */
export function localized<T extends Record<string, unknown>>(data: T, field: string, lang: Lang): string {
  return (data[`${field}_${lang}`] as string) || (data[`${field}_${defaultLang}`] as string) || '';
}

/**
 * One canonical form per URL: no `.html` (pages build as `about.html`), no `/index`,
 * no trailing slash (except the root).
 */
function normalize(path: string) {
  path = path.replace(/\.html$/, '').replace(/\/index$/, '/');
  return path.length > 1 ? path.replace(/\/+$/, '') : path;
}

/** Prefix a path with the language segment (skips prefix for the default lang). */
export function localePath(lang: Lang, path: string) {
  path = normalize(path);
  if (lang === defaultLang) return path;
  if (path === '/') return `/${lang}`;
  return `/${lang}${path}`;
}

/** The current path without its language prefix, e.g. `/pt/services` → `/services`. */
export function unlocalizedPath(url: URL) {
  const currentLang = getLangFromUrl(url);
  const path = normalize(url.pathname);
  if (currentLang === defaultLang) return path;
  return normalize(path.slice(`/${currentLang}`.length) || '/');
}

/** Return the equivalent path on a different language, preserving the current page. */
export function switchLangPath(url: URL, targetLang: Lang) {
  return localePath(targetLang, unlocalizedPath(url));
}

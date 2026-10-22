/**
 * Business numbers shown on the site, computed once per build so nobody has to
 * edit copy by hand when they change.
 */

/** Year Mirela's career started — years of experience are counted from here. */
export const CAREER_START_YEAR = 1997;

/** Years of experience at build time (e.g. 29 in 2026). */
export const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR;

/**
 * Last known Google review count. Used when the Places API isn't configured or
 * the request fails, so the build never breaks. Update it now and then.
 */
export const GOOGLE_REVIEWS_FALLBACK = 429;

export interface GoogleReviews {
  count: number;
  /** Average star rating, when the API returned it */
  rating?: number;
  /** "google" when fetched live, "fallback" otherwise */
  source: "google" | "fallback";
}

let cached: Promise<GoogleReviews> | undefined;

/**
 * Review count from the Google Places API (New), fetched at build time.
 *
 * Set GOOGLE_PLACES_API_KEY (Places API enabled). GOOGLE_PLACE_ID is optional:
 * without it the place is looked up by name and address on every build.
 */
export function getGoogleReviews(): Promise<GoogleReviews> {
  cached ??= fetchGoogleReviews();
  return cached;
}

const env = (name: string): string | undefined => process.env[name] || import.meta.env[name] || undefined;

async function fetchGoogleReviews(): Promise<GoogleReviews> {
  const fallback: GoogleReviews = { count: GOOGLE_REVIEWS_FALLBACK, source: "fallback" };
  const apiKey = env("GOOGLE_PLACES_API_KEY");
  if (!apiKey) return fallback;

  const placeId = env("GOOGLE_PLACE_ID");

  try {
    let place: { rating?: number; userRatingCount?: number } | undefined;

    if (placeId) {
      const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
        headers: { "X-Goog-Api-Key": apiKey, "X-Goog-FieldMask": "rating,userRatingCount" },
      });
      if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
      place = await res.json();
    } else {
      const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "places.id,places.rating,places.userRatingCount",
        },
        body: JSON.stringify({ textQuery: "Brazilian Hair Studio, 2950 Winkler Ave, Fort Myers, FL 33916" }),
      });
      if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
      const data = (await res.json()) as { places?: { id: string; rating?: number; userRatingCount?: number }[] };
      place = data.places?.[0];
      if (place) console.info(`[google-reviews] found place ${(place as { id: string }).id} — set GOOGLE_PLACE_ID to skip the lookup`);
    }

    const count = place?.userRatingCount;
    if (!count) throw new Error("no userRatingCount in response");
    return { count, rating: place?.rating, source: "google" };
  } catch (err) {
    console.warn(`[google-reviews] using fallback (${GOOGLE_REVIEWS_FALLBACK}):`, err);
    return fallback;
  }
}

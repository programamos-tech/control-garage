/**
 * Fetches public Google Maps reviews via Places API (New).
 * Requires GOOGLE_PLACES_API_KEY and billing enabled in Google Cloud.
 * @see https://developers.google.com/maps/documentation/places/web-service/place-details
 */

export type GoogleReviewDisplay = {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
  authorPhotoUrl?: string;
};

export type GoogleReviewsSummary = {
  placeName: string;
  rating: number;
  reviewCount: number;
  reviews: GoogleReviewDisplay[];
};

type LocalizedText = { text?: string };

type ApiReview = {
  rating?: number;
  text?: LocalizedText;
  relativePublishTimeDescription?: string;
  authorAttribution?: { displayName?: string; photoUri?: string };
};

type PlaceDetailsJson = {
  displayName?: LocalizedText | string;
  rating?: number;
  userRatingCount?: number;
  reviews?: ApiReview[];
};

function placeDisplayName(data: PlaceDetailsJson): string {
  const d = data.displayName;
  if (typeof d === "string") return d.trim() || "Control Garage FL";
  return d?.text?.trim() || "Control Garage FL";
}

function normalizePlaceId(raw: string): string {
  const t = raw.trim();
  if (t.startsWith("places/")) return t.slice("places/".length);
  return t;
}

async function resolvePlaceId(apiKey: string): Promise<string | null> {
  const fromEnv = process.env.GOOGLE_PLACES_PLACE_ID?.trim();
  if (fromEnv) return normalizePlaceId(fromEnv);

  const query =
    process.env.GOOGLE_PLACES_SEARCH_QUERY?.trim() ||
    "Control Garage FL Orlando FL garage door";

  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "places.id,places.name,places.displayName",
    },
    body: JSON.stringify({
      textQuery: query,
      maxResultCount: 1,
      languageCode: "en",
    }),
    next: { revalidate: 86400 },
  });

  if (!res.ok) return null;
  const data = (await res.json()) as { places?: { name?: string; id?: string }[] };
  const p0 = data.places?.[0];
  if (!p0) return null;
  if (p0.id) return normalizePlaceId(p0.id);
  const name = p0.name;
  if (!name?.startsWith("places/")) return null;
  return name.slice("places/".length);
}

function mapReviews(raw: ApiReview[] | undefined): GoogleReviewDisplay[] {
  if (!raw?.length) return [];
  return raw.map((r) => ({
    author: r.authorAttribution?.displayName?.trim() || "Google user",
    rating: typeof r.rating === "number" ? r.rating : 0,
    text: r.text?.text?.trim() || "",
    relativeTime: r.relativePublishTimeDescription?.trim() || "",
    authorPhotoUrl: r.authorAttribution?.photoUri,
  }));
}

export async function fetchGoogleReviewsForAbout(): Promise<GoogleReviewsSummary | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();
  if (!apiKey) return null;

  const placeId = await resolvePlaceId(apiKey);
  if (!placeId) return null;

  const res = await fetch(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
    {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "displayName,rating,userRatingCount,reviews",
      },
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) return null;

  const data = (await res.json()) as PlaceDetailsJson;
  const reviews = mapReviews(data.reviews);

  return {
    placeName: placeDisplayName(data),
    rating: typeof data.rating === "number" ? data.rating : 0,
    reviewCount: typeof data.userRatingCount === "number" ? data.userRatingCount : reviews.length,
    reviews,
  };
}

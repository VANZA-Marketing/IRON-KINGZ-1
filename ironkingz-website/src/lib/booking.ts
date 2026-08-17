import { site } from '../data/site';

/**
 * Public label for the intro CTA. Per brief: never display a price until the
 * owner confirms free vs. paid. So this is always "Book Your Intro" for now.
 */
export function introCtaLabel(): string {
  return 'Book Your Intro';
}

/**
 * Human-readable intro price, or null when unconfirmed (→ show no price).
 */
export function introPriceDisplay(): string | null {
  if (!site.introPriceConfirmed || site.INTRO_CLASS_PRICE === null) return null;
  return site.INTRO_CLASS_PRICE === 0 ? 'Free' : `$${site.INTRO_CLASS_PRICE}`;
}

/**
 * Resolve the destination for a booking action.
 * - Internal wizard at /book (default) with optional preselected program.
 * - When the owner enables a real Acuity/Squarespace account, the wizard's
 *   final step uses site.booking.baseUrl.
 */
export function bookHref(program?: string): string {
  const base = '/book';
  return program ? `${base}?program=${encodeURIComponent(program)}` : base;
}

/** Whether the live booking provider is configured. */
export function bookingEnabled(): boolean {
  return site.booking.enabled && Boolean(site.booking.baseUrl);
}

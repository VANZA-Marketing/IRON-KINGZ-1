/**
 * IRON KINGZ — Testimonials.
 * VERIFIED ONLY. Do not fabricate reviews. This array starts empty; add
 * entries only from testimonials the owner supplies or imports from a verified
 * source (e.g. Google reviews with permission). Each needs a real quote and an
 * approved display name.
 *
 * TODO(owner): provide verified testimonials to populate this section.
 */

export interface Testimonial {
  quote: string;
  name: string; // first name or approved display name
  program?: string;
  photo?: string; // optional approved photo key
}

export const testimonials: Testimonial[] = [
  // Intentionally empty until verified testimonials are supplied.
];

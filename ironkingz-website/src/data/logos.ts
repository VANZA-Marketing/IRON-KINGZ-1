/**
 * Discipline / affiliate logos for each program.
 * Boxing = the Iron Kingz circular medallion; the other three are the partner
 * academy logos (808 Top Team, HFA Muay Thai, Wing Chun Kung Fu Hawaii Assoc.).
 * Sourced from the live ironkingz.com site.
 */
import type { ImageMetadata } from 'astro';
import boxing from '../assets/brand/logo-boxing.png';
import bjj from '../assets/brand/logo-808.jpg';
import muaythai from '../assets/brand/logo-hfa.jpg';
import wingchun from '../assets/brand/logo-wingchun.jpg';

export const programLogos: Record<string, ImageMetadata> = {
  'boxing': boxing,
  'bjj-keiki-mma': bjj,
  'muay-thai': muaythai,
  'wing-chun': wingchun,
};

export function programLogo(slug: string): ImageMetadata | undefined {
  return programLogos[slug];
}

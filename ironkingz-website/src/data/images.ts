/**
 * IRON KINGZ — Image registry.
 * All authentic Iron Kingz photos, resolved through astro:assets so every
 * usage gets optimized WebP/AVIF + responsive sizes automatically.
 *
 * Excluded on purpose (third-party / stock, per brief): Nieky Holzken pro
 * fight, "Complete Muay Thai Beginners Guide" (Evolve), and the Unsplash
 * boxing photo. Only authentic supplied photos are used.
 */
import type { ImageMetadata } from 'astro';

// Eagerly import every optimized photo once.
const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/photos/*.{jpeg,jpg,png,JPG}',
  { eager: true },
);

const byKey: Record<string, ImageMetadata> = {};
for (const path in files) {
  const key = path.split('/').pop()!.replace(/\.(jpeg|jpg|png|JPG)$/i, '');
  byKey[key] = files[path].default;
}

export type PhotoCategory =
  | 'boxing' | 'muaythai' | 'bjj' | 'keiki' | 'wingchun'
  | 'coaches' | 'fighters' | 'facility' | 'community' | 'general';

interface PhotoMeta {
  alt: string;
  category: PhotoCategory;
}

/** Descriptive, accessible alt text for every meaningful image. */
export const photoMeta: Record<string, PhotoMeta> = {
  'boxing-hero': { alt: 'Iron Kingz boxing ring and heavy bag in a dark charcoal gym, fighters training in the background', category: 'boxing' },
  'boxing-portrait': { alt: 'A young boxer in fighting stance inside the Iron Kingz ring, coach reflected in the mirror', category: 'boxing' },

  'muaythai-bagroom': { alt: 'Fighters training on a row of hanging heavy bags in the Iron Kingz Muay Thai room', category: 'muaythai' },
  'muaythai-kicks': { alt: 'Muay Thai students practicing kicks on heavy bags at Iron Kingz', category: 'muaythai' },

  'bjj-openmat': { alt: 'Brazilian Jiu-Jitsu open mat with students grappling at Iron Kingz', category: 'bjj' },
  'bjj-ground': { alt: '808 Top Team students drilling ground positions on the mats at Iron Kingz', category: 'bjj' },
  'bjj-coaches': { alt: 'Three 808 Top Team grappling coaches kneeling on the mats at Iron Kingz', category: 'coaches' },

  'wingchun-banner': { alt: 'Koolau Wing Chun Hawaii students gathered under the school banner', category: 'wingchun' },
  'wingchun-group': { alt: 'Wing Chun Hawaii group photo under the Koolau Wing Chun banner', category: 'wingchun' },
  'coach-thomas': { alt: 'Sifu Thomas Hulama, Iron Kingz Wing Chun instructor, holding a long pole on a black lava field', category: 'coaches' },
  'coach-founder': { alt: 'Iron Kingz founder and head boxing coach with a young champion holding a title belt', category: 'coaches' },
  'coach-kru-red': { alt: 'Kru Red, HFA Muay Thai head coach at Iron Kingz', category: 'coaches' },


  'coaches-team': { alt: 'The Iron Kingz coaching team standing together in black shirts on the mats', category: 'coaches' },

  'competition-weighin': { alt: 'Two Iron Kingz fighters at a Star Elite cage-fighting weigh-in', category: 'fighters' },

  'community-trophies': { alt: 'Iron Kingz coaches and keiki holding trophies after a competition', category: 'community' },
  'community-ring-group': { alt: 'Iron Kingz members and coach gathered in the ring', category: 'community' },

  'facility-pano': { alt: 'Panorama of the Iron Kingz training floor with heavy bags and the ring', category: 'facility' },
  'facility-pano-2': { alt: 'Panoramic view of the Iron Kingz gym, ring, and bag area', category: 'facility' },
  'facility-wide': { alt: 'Wide view of the Iron Kingz gym floor, heavy bags, and boxing ring', category: 'facility' },

  'general-shadowbox': { alt: 'Iron Kingz students shadowboxing during a class', category: 'general' },

  // Kids & kids-team (2026 competition + training set)
  'kids-boxer-portrait': { alt: 'A young Iron Kingz boxer in a red team singlet with wrapped hands, in a fighting stance', category: 'keiki' },
  'kids-ringside': { alt: 'A young Iron Kingz boxer in headgear and red gear waiting ringside at a competition', category: 'fighters' },
  'kids-champion-belt': { alt: 'A young Iron Kingz boxer smiling and holding a championship belt', category: 'community' },
  'kids-team-three': { alt: 'Three young Iron Kingz boxers in competition gear posing together', category: 'keiki' },
  'kids-boxer-ring': { alt: 'A young Iron Kingz boxer in blue gear and headgear in the corner of the ring', category: 'keiki' },
  'kids-handwrap': { alt: 'An Iron Kingz coach taping a young boxer’s hands before a bout', category: 'coaches' },
  'kids-beach': { alt: 'Iron Kingz kids and their coach at the beach in Hawaii, fists up', category: 'community' },
  'kids-team-belts': { alt: 'The Iron Kingz keiki team and coaches together with championship belts on the wall', category: 'community' },
};

export function img(key: string): ImageMetadata {
  const found = byKey[key];
  if (!found) throw new Error(`[images] Unknown image key: "${key}"`);
  return found;
}

export function alt(key: string): string {
  return photoMeta[key]?.alt ?? '';
}

export function photosByCategory(cat: PhotoCategory): string[] {
  return Object.keys(photoMeta).filter((k) => photoMeta[k].category === cat && byKey[k]);
}

/** Curated gallery order (fixed rhythm, no chaotic masonry). */
export const galleryKeys: string[] = [
  'kids-boxer-portrait', 'kids-team-belts', 'muaythai-bagroom',
  'kids-ringside', 'kids-champion-belt', 'bjj-openmat',
  'kids-boxer-ring', 'coaches-team', 'muaythai-kicks',
  'kids-team-three', 'kids-beach', 'facility-pano',
  'kids-handwrap', 'boxing-hero', 'competition-weighin',
];

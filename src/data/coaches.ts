/**
 * IRON KINGZ — Coaches.
 * Only verified names/affiliations are stated. Where a name or credential is
 * not yet confirmed, `confirmed: false` marks it and the UI shows a neutral,
 * non-fabricated placeholder (never invented titles, records, or credentials).
 *
 * Known from the existing site / brief:
 *  - Coach Kru Red — HFA Muay Thai
 *  - Jace Kaopua — 808 Top Team, Keiki MMA & BJJ
 *  - An Iron Kingz boxing founder & head coach (name to confirm)
 *  - A Wing Chun (Koolau Wing Chun) instructor (name to confirm)
 */

export interface Coach {
  slug: string;
  name: string;
  /** Whether `name` is confirmed. If false, `name` is a role placeholder. */
  nameConfirmed: boolean;
  role: string;
  program: string; // program slug
  discipline: string;
  image?: string; // image registry key; undefined → initials placeholder
  imagePos?: string; // object-position utility for framing (default object-center)
  imageFit?: 'cover' | 'contain'; // 'contain' shows the whole photo (no cropping)
  bio: string;
  philosophy: string;
  credentials: string[]; // verified only
  classesTaught: string[];
  privateTraining: boolean;
}

export const coaches: Coach[] = [
  {
    slug: 'founder-boxing',
    name: 'Founder & Head Boxing Coach',
    nameConfirmed: false, // TODO(owner): confirm the founder's full approved name.
    role: 'Founder & Head Boxing Coach',
    program: 'boxing',
    discipline: 'Boxing',
    image: 'coach-founder', // Founder with a young champion — provided by owner.
    imagePos: 'object-top',
    bio: 'Iron Kingz was built by its founder to give Honolulu a serious, welcoming place to train — and to mentor the next generation inside and outside the ring. [Full founder biography to be provided by the owner.]',
    philosophy: 'Discipline, dedication, sacrifice, humility, and hard work — champions in life, not only in competition.',
    credentials: [], // TODO(owner): supply verified experience/credentials.
    classesTaught: ['Basics & Fundamentals', 'Youth Basics', 'Teens & Adults Basics', 'Competition Team & Advanced'],
    privateTraining: true,
  },
  {
    slug: 'kru-red',
    name: 'Kru Red',
    nameConfirmed: true, // Referenced by name on the existing site.
    role: 'Head Muay Thai Coach',
    program: 'muay-thai',
    discipline: 'Muay Thai & Kickboxing',
    image: 'coach-kru-red', // Full Pan-American Championships team photo — provided by owner.
    imagePos: 'object-center',
    bio: 'Kru Red leads the HFA Muay Thai program at Iron Kingz, developing technical strikers from their first class through the competition team. HFA’s Krus are certified under Master Saohin Anupong Srisuk. [Full biography to be provided by the owner.]',
    philosophy: 'I am not the best, but I am capable of achieving the impossible.',
    // Verified from the live site's Muay Thai program page.
    credentials: ['Certified under Master Saohin Anupong Srisuk', 'HFA Muay Thai'],
    classesTaught: ['Youth Basics (9+)', 'Adults Basics', 'Competition Team'],
    privateTraining: false, // TODO(owner): confirm availability.
  },
  {
    slug: 'kru-carlton',
    name: 'Kru Carlton',
    nameConfirmed: true, // Provided by owner.
    role: 'Muay Thai Coach',
    program: 'muay-thai',
    discipline: 'Muay Thai & Kickboxing',
    image: 'coach-carlton', // Headshot provided by owner.
    imagePos: 'object-[center_25%]',
    bio: 'Kru Carlton coaches Muay Thai at Iron Kingz, guiding strikers from their very first round through the competition team. His classes stay grounded in clean fundamentals, timing, and ring IQ — with a patient, detail-first approach that works for beginners and fighters alike.',
    philosophy: 'Sharp basics beat flashy every time.',
    credentials: ['HFA Muay Thai'],
    classesTaught: ['Muay Thai Fundamentals', 'Kickboxing', 'Competition Team'],
    privateTraining: false,
  },
  {
    slug: 'jace-kaopua',
    name: 'Jace Kaopua',
    nameConfirmed: true, // Named in the brief for 808 Top Team.
    role: 'BJJ & Keiki MMA Coach',
    program: 'bjj-keiki-mma',
    discipline: 'Brazilian Jiu-Jitsu & MMA',
    image: 'bjj-coaches', // TEMP placeholder until an approved headshot is provided.
    imagePos: 'object-center',
    bio: 'Jace Kaopua leads 808 Top Team’s Brazilian Jiu-Jitsu and Keiki MMA at Iron Kingz, building young athletes from age three and coaching all-levels MMA. [Full biography to be provided by the owner.]',
    philosophy: 'Start young, build character, and grow real skill on the mat.',
    credentials: [], // TODO(owner): confirm rank, affiliations, and experience.
    classesTaught: ['Keiki Developmental (3+)', 'Jiu-Jitsu', 'All Levels MMA'],
    privateTraining: false, // TODO(owner): confirm availability.
  },
  {
    slug: 'wing-chun-instructor',
    name: 'Sifu Thomas Hulama',
    nameConfirmed: true, // Provided by owner.
    role: 'Wing Chun Instructor',
    program: 'wing-chun',
    discipline: 'Wing Chun',
    image: 'coach-thomas', // Lava-background portrait provided by owner.
    imagePos: 'object-[center_12%]',
    bio: 'Sifu Thomas Hulama is an assistant professor of the Hawaii Wing Chun Association system — a methodology rooted in the Ip Man lineage and co-founded by Robert Yeung that prioritizes sensitivity over brute force. His training spans two traditional weapon systems, the six-and-a-half-point pole and the double butterfly swords, alongside the 108 movements of the wooden-man set. As a Wing Chun affiliate of Iron Kingz, he brings this knowledge into mixed martial arts, Ready Labs, Krav Maga, and executive-protection training — reflecting Iron Kingz’s commitment to excellence. He also owns My Massage 808 LLC.',
    philosophy: 'Sensitivity over brute force — structure, timing, and economy of motion.',
    credentials: [
      'Assistant Professor — Hawaii Wing Chun Association (Ip Man lineage)',
      'Six-and-a-half-point pole & double butterfly swords',
      'Owner — My Massage 808 LLC',
    ],
    classesTaught: ['Adult Class', 'Private Lessons (invite)'],
    privateTraining: true,
  },
];

export function getCoach(slug: string): Coach | undefined {
  return coaches.find((c) => c.slug === slug);
}

/** Initials for the placeholder avatar when no photo is set. */
export function coachInitials(c: Coach): string {
  if (!c.nameConfirmed) return 'IK';
  return c.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

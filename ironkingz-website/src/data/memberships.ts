/**
 * IRON KINGZ — Memberships.
 * Pricing VERIFIED from the live ironkingz.com /pricing page (all disciplines
 * are unlimited training only; no long-term contracts; adults 17+, kids 3+).
 *
 * NOTE ON SAVINGS: the old site advertised "Save $300"/"Save $240" figures that
 * do NOT match its own numbers. Per the brief we never display an unsupported
 * savings claim — savings are COMPUTED in code from the tiers below (baseline =
 * paying the 1-month rate for the whole term, including the one-time startup
 * fee), so every figure shown is mathematically correct.
 */

export interface MembershipTier {
  months: number;
  label: string;
  monthly: number;
  startupFee: number;
  freeShirt?: boolean;
}

export interface Membership {
  slug: string;
  name: string;
  audience: string;
  ageNote: string;
  featured?: boolean;
  disciplines: string[];
  tiers: MembershipTier[];
  benefits: string[];
  discountEligible: boolean;
  commitment: string;
  priceConfirmed: boolean;
}

const STARTUP = 50;

export const memberships: Membership[] = [
  {
    slug: 'adult-unlimited',
    name: 'Adult Unlimited',
    audience: 'Adults training across every discipline',
    ageNote: 'Ages 17+',
    featured: true,
    disciplines: ['Boxing', 'Muay Thai', 'BJJ & MMA'],
    tiers: [
      { months: 1, label: 'Monthly', monthly: 150, startupFee: STARTUP },
      { months: 3, label: '3 months', monthly: 150, startupFee: 0 },
      { months: 6, label: '6 months', monthly: 125, startupFee: 0, freeShirt: true },
    ],
    benefits: [
      'Unlimited multi-discipline training',
      'Beginner through advanced classes',
      'Train across every program on one membership',
    ],
    discountEligible: true,
    commitment: 'No long-term contract',
    priceConfirmed: true,
  },
  {
    slug: 'kids-unlimited',
    name: 'Kids Unlimited',
    audience: 'Keiki & youth across every discipline',
    ageNote: 'Ages 3+',
    disciplines: ['Youth Boxing', 'Youth Muay Thai', 'Keiki MMA & BJJ'],
    tiers: [
      { months: 1, label: 'Monthly', monthly: 120, startupFee: STARTUP },
      { months: 3, label: '3 months', monthly: 120, startupFee: 0 },
      { months: 6, label: '6 months', monthly: 100, startupFee: 0, freeShirt: true },
    ],
    benefits: [
      'Unlimited youth & keiki classes',
      'Structured, age-appropriate coaching',
      'Discipline and confidence in a serious room',
    ],
    discountEligible: false,
    commitment: 'No long-term contract',
    priceConfirmed: true,
  },
  {
    slug: 'adult-single',
    name: 'Adult Single-Discipline',
    audience: 'Adults focused on one program',
    ageNote: 'Ages 17+',
    disciplines: ['Choose one discipline'],
    tiers: [
      { months: 1, label: 'Monthly', monthly: 120, startupFee: STARTUP },
      { months: 3, label: '3 months', monthly: 120, startupFee: 0 },
      { months: 6, label: '6 months', monthly: 110, startupFee: 0, freeShirt: true },
    ],
    benefits: [
      'Unlimited classes in one chosen discipline',
      'Ideal if you want to focus',
    ],
    discountEligible: true,
    commitment: 'No long-term contract',
    priceConfirmed: true,
  },
  {
    slug: 'wing-chun',
    name: 'Wing Chun',
    audience: 'Adults training Wing Chun',
    ageNote: 'Adults',
    disciplines: ['Wing Chun'],
    tiers: [
      { months: 1, label: 'Monthly', monthly: 200, startupFee: STARTUP },
      { months: 3, label: '3 months', monthly: 200, startupFee: 0 },
      { months: 6, label: '6 months', monthly: 140, startupFee: 0, freeShirt: true },
    ],
    benefits: [
      'Access to the Wing Chun adult class',
      'Focused, technical instruction',
    ],
    discountEligible: true,
    commitment: 'No long-term contract',
    priceConfirmed: true,
  },
];

/** Single-session drop-in. Verified: $50/day, all disciplines. */
export const dropIn = { price: 50, note: '$50 per day, all disciplines. No membership required.' };

/** Military & law-enforcement discount. Verified: $10 off all membership packages. */
export const militaryDiscount = {
  eligible: true,
  detail: '$10 off all membership packages',
};

/** Lowest effective monthly across a plan's tiers (for "From $X/mo"). */
export function fromMonthly(m: Membership): number {
  return Math.min(...m.tiers.map((t) => t.monthly));
}

/**
 * Honest savings for a tier vs. paying the 1-month rate for the whole term
 * (baseline includes the one-time startup fee). Returns 0 when there's no gain.
 */
export function tierSavings(m: Membership, tier: MembershipTier): number {
  const base = m.tiers[0];
  const baseline = base.monthly * tier.months + base.startupFee;
  const total = tier.monthly * tier.months + tier.startupFee;
  return Math.max(0, baseline - total);
}

export function tierTotal(tier: MembershipTier): number {
  return tier.monthly * tier.months + tier.startupFee;
}

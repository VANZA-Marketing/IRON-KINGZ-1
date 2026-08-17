/**
 * IRON KINGZ — Global site configuration.
 * Owner-editable single source of truth. Change values here and the whole
 * site updates. No component edits required.
 */

export const site = {
  name: 'Iron Kingz',
  legalName: 'Iron Kingz LLC',
  tagline: 'The Kingdom',
  description:
    'Iron Kingz is a combat sports and martial arts gym in Mapunapuna, Honolulu — boxing, Muay Thai, Brazilian Jiu-Jitsu, Keiki MMA, and Wing Chun for beginners, kids, and competitors.',

  // Contact / NAP (keep identical everywhere for local SEO)
  phone: '808-302-4978',
  phoneHref: 'tel:+18083024978',
  email: 's.kapuwai@ironkingz.com',
  address: {
    street: '851 Mapunapuna Street, Unit D',
    city: 'Honolulu',
    region: 'Hawaii',
    regionShort: 'HI',
    postalCode: '96819',
    country: 'US',
  },
  // Full one-line address helper
  get addressLine() {
    return `${this.address.street}, ${this.address.city}, ${this.address.region} ${this.address.postalCode}`;
  },

  geo: { lat: 21.3345, lng: -157.8877 }, // TODO(owner): confirm exact coordinates for the map pin.
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=851+Mapunapuna+Street+Unit+D+Honolulu+HI+96819',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=851+Mapunapuna+Street+Unit+D+Honolulu+HI+96819',
  mapEmbedUrl:
    'https://www.google.com/maps?q=851+Mapunapuna+Street+Unit+D+Honolulu+HI+96819&output=embed',

  /**
   * Operating hours — verified from the live ironkingz.com homepage/contact.
   * Sunday is CLOSED — never render it as open. (Sat/Sun classes are by
   * appointment; the class schedule cards mark them "appt only".)
   */
  hours: [
    { day: 'Monday', open: '9:00 AM', close: '11:00 AM', open2: '3:00 PM', close2: '10:00 PM' },
    { day: 'Tuesday', open: '9:00 AM', close: '11:00 AM', open2: '3:00 PM', close2: '10:00 PM' },
    { day: 'Wednesday', open: '9:00 AM', close: '11:00 AM', open2: '3:00 PM', close2: '10:00 PM' },
    { day: 'Thursday', open: '9:00 AM', close: '11:00 AM', open2: '3:00 PM', close2: '10:00 PM' },
    { day: 'Friday', open: '9:00 AM', close: '11:00 AM', open2: '3:00 PM', close2: '10:00 PM' },
    { day: 'Saturday', open: '9:00 AM', close: '2:00 PM', note: 'Classes by appointment' },
    { day: 'Sunday', closed: true },
  ] as HoursEntry[],

  parking: '', // TODO(owner): supply parking instructions (lot / street / stalls) when available.

  socials: [
    // Instagram handle verified from the live site's IG feed widget.
    { name: 'Instagram', url: 'https://www.instagram.com/ironkingzhi/', handle: '@ironkingzhi' },
    // TODO(owner): confirm Facebook URL (or remove if none).
    { name: 'Facebook', url: 'https://www.facebook.com/', handle: 'Iron Kingz' },
  ],

  /**
   * INTRO CLASS PRICING.
   * The homepage CTA states "SCHEDULE YOUR INTRO TODAY FOR $50", so intro = $50.
   * NOTE: the Muay Thai program blurb on the old site says "free trial class" —
   * reconcile that wording with the owner, but the confirmed price is $50.
   */
  introPriceConfirmed: true,
  INTRO_CLASS_PRICE: 50 as number | null,

  discounts: {
    // Verified from the live pricing page: "$10 Off for all membership packages".
    militaryLawEnforcement: true,
    militaryLawEnforcementDetail: '$10 off all membership packages',
  },

  /**
   * Booking provider integration (Acuity / Squarespace Scheduling).
   * TODO(owner): supply the confirmed owner id + per-program appointment-type ids.
   * Until `booking.enabled` is true, the wizard's final step links to a clearly
   * labeled configuration placeholder rather than a dead/demo button.
   */
  booking: {
    enabled: false,
    provider: 'acuity' as 'acuity' | 'squarespace',
    ownerId: '', // TODO(owner): Acuity owner id.
    baseUrl: '', // e.g. https://app.acuityscheduling.com/schedule.php?owner=XXXXX
  },

  /**
   * Analytics / conversion tracking placeholders.
   * Nothing loads until an id is provided by the owner.
   */
  analytics: {
    ga4Id: '', // TODO(owner)
    gtmId: '', // TODO(owner)
    metaPixelId: '', // TODO(owner)
    googleAdsId: '', // TODO(owner)
  },
} as const;

export interface HoursEntry {
  day: string;
  open?: string;
  close?: string;
  open2?: string;
  close2?: string;
  closed?: boolean;
  note?: string;
}

export const currentYear = new Date().getFullYear();

/**
 * IRON KINGZ — Shared FAQ content.
 * Grounded in the owner-aligned blog scripts and existing site. Anything not
 * yet confirmed points the reader to contact the gym rather than stating an
 * unverified fact.
 */

export interface Faq {
  q: string;
  a: string;
}

/** Getting-started FAQ shown on Programs + Home. */
export const startingFaqs: Faq[] = [
  {
    q: 'Do I need any experience to start?',
    a: 'No. Every program has beginner-friendly classes, and coaches start new students with fundamentals. You do not need to “get in shape” first — training is how you get in shape.',
  },
  {
    q: 'What should I wear and bring?',
    a: 'Wear clean athletic clothing you can move in, and bring water and a small towel. Ask whether loaner gloves are available before buying your own equipment.',
  },
  {
    q: 'How early should I arrive for my first class?',
    a: 'About 15 minutes early gives you time to check in, meet your coach, and prepare. Confirm exact arrival instructions when you book.',
  },
  {
    q: 'Will I have to spar on my first day?',
    a: 'No. Beginners focus on stance, movement, and controlled drills. Contact training is introduced later, with the right protective equipment.',
  },
  {
    q: 'Do you train kids?',
    a: 'Yes. There are youth and keiki programs — the 808 Top Team Keiki Developmental class starts as young as age 3, and boxing and Muay Thai have youth tiers.',
  },
];

/** Pricing / membership FAQ shown on the Memberships page. */
export const pricingFaqs: Faq[] = [
  {
    q: 'Is there a startup fee?',
    a: 'There is a one-time $50 startup fee on the monthly plan. It is waived when you sign up for a 3-month or 6-month plan.',
  },
  {
    q: 'How much is the intro class?',
    a: 'The introductory class is $50. Book it online or at the front desk, and we’ll match you to a beginner-friendly class.',
  },
  {
    q: 'Are there long-term contracts?',
    a: 'No. There are no long-term contracts. You can go month to month, or choose a 3- or 6-month plan for a lower rate.',
  },
  {
    q: 'What does a membership include?',
    a: 'All memberships are unlimited training. The Adult and Kids Unlimited plans cover every discipline; single-discipline and Wing Chun plans cover one.',
  },
  {
    q: 'Do you offer drop-ins?',
    a: 'Yes — a single-session drop-in is $50 for all disciplines, no membership required. Great for visitors and travelers.',
  },
  {
    q: 'Is there a military or law-enforcement discount?',
    a: 'Yes — active military and law enforcement get $10 off all membership packages. Ask the front desk to apply it.',
  },
  {
    q: 'Do I get anything for signing up longer?',
    a: 'Yes. Longer terms lower your monthly rate, the startup fee is waived on 3- and 6-month plans, and every 6-month plan includes a free practice shirt.',
  },
  {
    q: 'Do kids have their own memberships?',
    a: 'Yes — the Kids Unlimited membership (ages 3+) covers youth and keiki classes across disciplines.',
  },
];

/** Contact FAQ shown on the Contact page. */
export const contactFaqs: Faq[] = [
  {
    q: 'Where are you located?',
    a: 'Iron Kingz is at 851 Mapunapuna Street, Unit D, Honolulu, Hawaii 96819.',
  },
  {
    q: 'What are your hours?',
    a: 'See the hours listed on this page. Note that Saturday classes are by appointment and the gym is closed Sunday.',
  },
  {
    q: 'How do I book my first class?',
    a: 'Use the Book Your Intro button anywhere on the site, or call or email us and we’ll help you choose the right program.',
  },
  {
    q: 'Is there parking?',
    a: 'Contact us for current parking details. [TODO(owner): supply parking instructions.]',
  },
];

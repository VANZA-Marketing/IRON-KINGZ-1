/**
 * IRON KINGZ — Programs.
 * Copy here is grounded in the owner's schedule cards, the owner-aligned blog
 * scripts, and the existing site. Anything not yet verified is flagged with a
 * `TODO(owner)` comment and NOT presented as fabricated fact on the page.
 * The final word-for-word copy will replace the `*_PLACEHOLDER` fields.
 */

export interface Program {
  slug: string;
  /** Program name as shown in nav + headings */
  name: string;
  /** Partner / affiliate label shown as an eyebrow */
  affiliate?: string;
  /** One-line card description */
  short: string;
  /** Hero positioning statement */
  positioning: string;
  /** Home/index card image (key into src/data/images.ts) */
  cardImage: string;
  heroImage: string;
  accent: 'boxing' | 'muaythai' | 'bjj' | 'wingchun';
  /** Who the program is for */
  whoFor: string[];
  /** What students learn */
  learn: string[];
  /** What a typical class includes */
  classIncludes: string[];
  /** Age note — only when verified from the schedule/owner */
  ages: string;
  /** Beginner suitability */
  beginnerFriendly: boolean;
  beginnerNote: string;
  /** Equipment guidance */
  equipment: string[];
  /** Safety expectations */
  safety: string;
  /** Competition opportunities (verified only) */
  competition: string;
  /** Coach slugs relevant to this program */
  coachSlugs: string[];
  /** Program-specific FAQ */
  faqs: { q: string; a: string }[];
}

export const programs: Program[] = [
  {
    slug: 'boxing',
    name: 'Iron Kingz Boxing',
    affiliate: 'Iron Kingz',
    short: 'Sharp fundamentals, real coaching, and a room that pushes you — boxing for beginners through competitors.',
    positioning:
      'The foundation of the Kingdom. Clean technique, honest conditioning, and coaching that meets you where you are — whether this is your first time in gloves or you are chasing a competition record.',
    cardImage: 'kids-boxer-portrait',
    heroImage: 'boxing-hero',
    accent: 'boxing',
    whoFor: [
      'Complete beginners who have never thrown a punch',
      'Adults training for fitness, confidence, and discipline',
      'Youth and teens learning fundamentals in a structured room',
      'Competitors preparing for amateur and advanced bouts',
    ],
    learn: [
      'Balanced stance, guard, and footwork',
      'The jab, cross, hook, and uppercut with correct mechanics',
      'Head movement, defense, and distance control',
      'Bag work, mitt work, and controlled partner drills',
      'Conditioning built around real boxing movement',
    ],
    classIncludes: [
      'Warm-up and movement prep',
      'Technical instruction and drilling',
      'Bag or mitt rounds',
      'Conditioning and cooldown',
    ],
    // Verified from the boxing schedule card (Youth / Teens & Adults / Competition tiers).
    ages: 'Youth, teens, and adults. Dedicated Youth and Teens & Adults class tiers run on the weekday schedule.',
    beginnerFriendly: true,
    beginnerNote:
      'You do not need experience or to “get in shape” first. Tell your coach it is your first class — they will start you on stance, guard, and footwork before anything else.',
    equipment: [
      'Clean athletic clothing you can move in',
      'Water and a small towel',
      'Hand wraps and boxing gloves once you own them',
    ],
    safety:
      'Beginners are never pressured into hard contact. New students learn stance, defense, movement, and control before any sparring. Ask your coach about the sparring policy at your first class.',
    // Verified: schedule includes a "Competition Team & Advanced" tier.
    competition:
      'A Competition Team & Advanced tier trains on the weekday schedule for members preparing to compete.',
    coachSlugs: ['founder-boxing'],
    faqs: [
      {
        q: 'Do I need boxing experience before my first class?',
        a: 'No. Beginner boxing instruction is designed for people with little or no experience. Your coach will start with a few foundational skills rather than long combinations.',
      },
      {
        q: 'Will I have to spar on my first day?',
        a: 'No. Many beginner sessions focus on shadowboxing, bags, mitts, and controlled drills. Learn stance, defense, and control first. Ask the coach about the gym’s sparring policy.',
      },
      {
        q: 'Should I buy gloves before I start?',
        a: 'Confirm the gym’s equipment policy first. Ask whether loaner gloves are available for introductory students before purchasing your own.',
      },
      {
        q: 'How early should I arrive?',
        a: 'Arriving about 15 minutes early gives you time to check in, meet the coach, and prepare. Confirm exact arrival instructions when you book.',
      },
    ],
  },
  {
    slug: 'muay-thai',
    name: 'HFA Muay Thai & Kickboxing',
    affiliate: 'HFA Muay Thai',
    short: 'The art of eight limbs — punches, kicks, knees, elbows, and clinch, taught for fitness and for the fight.',
    positioning:
      'The art of eight limbs. HFA Muay Thai at Iron Kingz builds technical strikers from the ground up — classes taught by Krus certified under Master Saohin Anupong Srisuk, a former PABA Muay Thai champion and two-time WBA World Champion contender.',
    cardImage: 'muaythai-kicks',
    heroImage: 'muaythai-bagroom',
    accent: 'muaythai',
    whoFor: [
      'Beginners who want to learn authentic Muay Thai striking',
      'Adults training for fitness, coordination, and confidence',
      'Youth ages 9 and up in a structured beginners class',
      'Fighters preparing for Muay Thai or MMA competition',
    ],
    learn: [
      'Stance, balance, and footwork',
      'Punches, round kicks, teeps, knees, and elbows',
      'Checking kicks and defensive movement',
      'Clinch fundamentals and posture',
      'Pad and bag work to sharpen timing and control',
    ],
    classIncludes: [
      'Warm-up and mobility',
      'Technique and combination drilling',
      'Pad and bag rounds',
      'Conditioning and cooldown',
    ],
    // Verified from the HFA schedule card: Youth (Ages 9+) + Adults + Competition Team.
    ages: 'Youth Basics is for ages 9 and up. Adults train on their own class tier, with a Competition Team for qualifying members.',
    beginnerFriendly: true,
    beginnerNote:
      'You do not need flexibility or endurance to start. Beginners focus on stance, balance, and controlled technique before power or contact.',
    equipment: [
      'Flexible athletic clothing or Muay Thai shorts',
      'Hand wraps and gloves once recommended',
      'Water, towel, and (for contact drills) shin guards and a mouthguard',
    ],
    safety:
      'Knees, elbows, and clinch work are introduced progressively and under supervision. Beginners are not expected to spar until they understand control, defense, and etiquette.',
    // Verified: schedule shows a Competition Team tier (Tue/Thu) and Friday invite-only training.
    competition:
      'A Competition Team trains midweek, with additional invite-only sessions for members on the competitive track.',
    coachSlugs: ['kru-red'],
    faqs: [
      {
        q: 'What age can start Muay Thai at Iron Kingz?',
        a: 'The Youth Basics & Fundamentals class is listed for ages 9 and up. Confirm the current minimum age for your child when you book.',
      },
      {
        q: 'Is Muay Thai the same as kickboxing?',
        a: 'They are related striking styles but not identical. Muay Thai distinctly includes knees, elbows, and clinch work in addition to punches and kicks.',
      },
      {
        q: 'Do I have to compete?',
        a: 'No. Competition is only one path. Many students train for fitness, technique, confidence, and community.',
      },
      {
        q: 'Will I spar on my first class?',
        a: 'No. Beginners start with pad work, combinations, and technical drills. Sparring is introduced later, with the required protective equipment.',
      },
    ],
  },
  {
    slug: 'bjj-keiki-mma',
    name: '808 Top Team BJJ & Keiki MMA',
    affiliate: '808 Top Team',
    short: 'Brazilian Jiu-Jitsu, all-levels MMA, and a keiki developmental program that starts as young as age 3.',
    positioning:
      'Grappling and mixed martial arts with a family-first foundation. 808 Top Team brings Brazilian Jiu-Jitsu and MMA to Iron Kingz — plus a keiki program built to grow young athletes from the very beginning.',
    cardImage: 'bjj-ground',
    heroImage: 'bjj-openmat',
    accent: 'bjj',
    whoFor: [
      'Keiki as young as age 3 in the developmental program',
      'Beginners learning Brazilian Jiu-Jitsu fundamentals',
      'Adults training all-levels MMA',
      'Athletes cross-training grappling for competition',
    ],
    learn: [
      'Brazilian Jiu-Jitsu positions, control, and submissions',
      'Takedowns and ground movement',
      'All-levels MMA fundamentals',
      'Age-appropriate developmental skills for keiki',
      'Discipline, focus, and mat awareness',
    ],
    classIncludes: [
      'Warm-up and movement drills',
      'Technique instruction',
      'Positional drilling and rounds',
      'Cooldown and questions',
    ],
    // Verified from the 808 Top Team schedule card (Keiki Developmental Age 3+, Jiu-Jitsu, All Levels MMA).
    ages: 'Keiki Developmental is for ages 3 and up. Jiu-Jitsu and All Levels MMA classes run for older youth and adults.',
    beginnerFriendly: true,
    beginnerNote:
      'No experience needed. Beginners and first-time keiki are introduced to fundamentals and mat etiquette before live rounds.',
    equipment: [
      'Athletic clothing that allows full movement',
      'A gi if required for Jiu-Jitsu class — confirm when you book',
      'Water and a towel',
    ],
    safety:
      'Keiki classes are developmental and age-appropriate. Live training for older students is supervised and progressed carefully.',
    competition: '', // TODO(owner): confirm competition opportunities for BJJ/MMA before publishing.
    coachSlugs: ['jace-kaopua'],
    faqs: [
      {
        q: 'How young can my child start?',
        a: 'The Keiki Developmental class is listed for ages 3 and up. Confirm placement for your child’s age and readiness when you book.',
      },
      {
        q: 'Do I need a gi for Jiu-Jitsu?',
        a: 'It depends on the class. Confirm gi requirements before your first session — beginners can usually start in athletic clothing.',
      },
      {
        q: 'What is “All Levels MMA”?',
        a: 'A mixed martial arts class open to a range of experience levels, blending striking and grappling fundamentals. Tell the coach your experience when you arrive.',
      },
    ],
  },
  {
    slug: 'wing-chun',
    name: 'Wing Chun Hawaii',
    affiliate: 'Koolau Wing Chun',
    short: 'Close-range Chinese martial arts — structure, sensitivity, and control taught in a focused adult class.',
    positioning:
      'A different lineage inside the Kingdom. Wing Chun Hawaii brings traditional close-range martial arts to Iron Kingz, emphasizing structure, economy of motion, and control.',
    cardImage: 'wingchun-banner',
    heroImage: 'wingchun-group',
    accent: 'wingchun',
    whoFor: [
      'Adults interested in traditional Chinese martial arts',
      'Students who want close-range structure and sensitivity training',
      'Practitioners seeking a focused, technical class',
    ],
    learn: [
      'Wing Chun structure and stance',
      'Centerline theory and economy of motion',
      'Close-range hand techniques',
      'Sensitivity and control drills',
    ],
    classIncludes: [
      'Fundamentals and forms',
      'Partner sensitivity drills',
      'Technical application',
    ],
    // Verified from the Koolau Wing Chun schedule card (Adult Class Tue/Thu; weekends invite-only).
    ages: 'Adult class. Private lessons and competition team training are available by invitation.',
    beginnerFriendly: true,
    beginnerNote:
      'Beginners are welcome in the adult class. Instruction starts with structure and fundamentals.',
    equipment: [
      'Comfortable clothing you can move in',
      'Water',
    ],
    safety:
      'Training emphasizes control and structure. Partner drills are introduced progressively.',
    competition:
      'Private lessons and competition team training are offered by invitation on weekends.',
    coachSlugs: ['wing-chun-instructor'],
    faqs: [
      {
        q: 'When does the Wing Chun class meet?',
        a: 'The adult class meets Tuesday and Thursday evenings. Weekend private lessons and competition team training are by invitation.',
      },
      {
        q: 'Do I need experience to start?',
        a: 'No. The adult class welcomes beginners and starts with structure and fundamentals.',
      },
    ],
  },
];

export function getProgram(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

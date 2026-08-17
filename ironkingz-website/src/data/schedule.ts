/**
 * IRON KINGZ — Weekly class schedule.
 * Transcribed directly from the owner's four schedule cards (Boxing, HFA Muay
 * Thai, 808 Top Team MMA, Koolau Wing Chun). Edit this file to update the live
 * schedule — no component changes required.
 *
 * TODO(owner): confirm all times/levels. Notably, the 808 Top Team card lists
 * "Jiu-Jitsu" across multiple overlapping Monday rows; it is encoded here as a
 * single Monday Jiu-Jitsu block (4:30–6:30 PM). Confirm the exact block.
 */

export type Day = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
export const DAY_ORDER: Day[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
export const DAY_FULL: Record<Day, string> = {
  Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday',
  Fri: 'Friday', Sat: 'Saturday', Sun: 'Sunday',
};

export type ProgramSlug = 'boxing' | 'muay-thai' | 'bjj-keiki-mma' | 'wing-chun';
export type Audience = 'keiki' | 'youth' | 'adults' | 'all';

export interface ClassSession {
  id: string;
  program: ProgramSlug;
  title: string;
  days: Day[];
  /** 24h HH:MM for sorting */
  start: string;
  end: string;
  startLabel: string;
  endLabel: string;
  level: string;
  audience: Audience;
  ageLabel: string;
  /** May an introductory student attend? */
  introOK: boolean;
  inviteOnly?: boolean;
  coachSlug?: string;
  gear?: string;
}

export const sessions: ClassSession[] = [
  // ── IRON KINGZ BOXING (Mon–Fri) ─────────────────────────────────────────
  {
    id: 'box-basics-am',
    program: 'boxing',
    title: 'Basics & Fundamentals',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    start: '09:00', end: '10:00', startLabel: '9:00 AM', endLabel: '10:00 AM',
    level: 'Beginner', audience: 'all', ageLabel: 'All levels',
    introOK: true, coachSlug: 'founder-boxing',
    gear: 'Hand wraps and gloves once you have them — loaners may be available.',
  },
  {
    id: 'box-youth',
    program: 'boxing',
    title: 'Youth Basics & Fundamentals',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    start: '17:30', end: '18:30', startLabel: '5:30 PM', endLabel: '6:30 PM',
    level: 'Beginner', audience: 'youth', ageLabel: 'Youth',
    introOK: true, coachSlug: 'founder-boxing',
  },
  {
    id: 'box-teens-adults',
    program: 'boxing',
    title: 'Teens & Adults Basics & Fundamentals',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    start: '18:45', end: '19:45', startLabel: '6:45 PM', endLabel: '7:45 PM',
    level: 'Beginner', audience: 'adults', ageLabel: 'Teens & Adults',
    introOK: true, coachSlug: 'founder-boxing',
  },
  {
    id: 'box-comp',
    program: 'boxing',
    title: 'Competition Team & Advanced',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    start: '19:45', end: '20:45', startLabel: '7:45 PM', endLabel: '8:45 PM',
    level: 'Advanced / Competition', audience: 'adults', ageLabel: 'Teens & Adults',
    introOK: false, coachSlug: 'founder-boxing',
  },

  // ── HFA MUAY THAI & KICKBOXING ───────────────────────────────────────────
  {
    id: 'mt-youth',
    program: 'muay-thai',
    title: 'Youth Basics & Fundamentals',
    days: ['Mon', 'Wed'],
    start: '17:30', end: '18:30', startLabel: '5:30 PM', endLabel: '6:30 PM',
    level: 'Beginner', audience: 'youth', ageLabel: 'Ages 9+',
    introOK: true, coachSlug: 'kru-red',
  },
  {
    id: 'mt-adults',
    program: 'muay-thai',
    title: 'Adults Basics & Fundamentals',
    days: ['Mon', 'Wed'],
    start: '18:45', end: '19:45', startLabel: '6:45 PM', endLabel: '7:45 PM',
    level: 'Beginner', audience: 'adults', ageLabel: 'Adults',
    introOK: true, coachSlug: 'kru-red',
  },
  {
    id: 'mt-comp',
    program: 'muay-thai',
    title: 'Competition Team',
    days: ['Tue', 'Thu'],
    start: '18:00', end: '20:00', startLabel: '6:00 PM', endLabel: '8:00 PM',
    level: 'Competition', audience: 'adults', ageLabel: 'Adults',
    introOK: false, coachSlug: 'kru-red',
  },
  {
    id: 'mt-invite-fri',
    program: 'muay-thai',
    title: 'Invite Only Training',
    days: ['Fri'],
    start: '17:30', end: '19:45', startLabel: '5:30 PM', endLabel: '7:45 PM',
    level: 'Invite only', audience: 'adults', ageLabel: 'By invitation',
    introOK: false, inviteOnly: true, coachSlug: 'kru-red',
  },

  // ── 808 TOP TEAM BJJ & KEIKI MMA ─────────────────────────────────────────
  {
    id: 'bjj-keiki',
    program: 'bjj-keiki-mma',
    title: 'Keiki Developmental',
    days: ['Tue', 'Wed', 'Thu', 'Fri'],
    start: '16:30', end: '17:15', startLabel: '4:30 PM', endLabel: '5:15 PM',
    level: 'Developmental', audience: 'keiki', ageLabel: 'Age 3+',
    introOK: true, coachSlug: 'jace-kaopua',
  },
  {
    id: 'bjj-jiujitsu-mon',
    program: 'bjj-keiki-mma',
    title: 'Jiu-Jitsu',
    days: ['Mon'],
    start: '16:30', end: '18:30', startLabel: '4:30 PM', endLabel: '6:30 PM',
    level: 'All levels', audience: 'all', ageLabel: 'All levels',
    introOK: true, coachSlug: 'jace-kaopua',
    gear: 'A gi may be required — confirm when you book.',
  },
  {
    id: 'bjj-mma-mwf',
    program: 'bjj-keiki-mma',
    title: 'All Levels MMA',
    days: ['Wed', 'Fri'],
    start: '17:00', end: '18:30', startLabel: '5:00 PM', endLabel: '6:30 PM',
    level: 'All levels', audience: 'adults', ageLabel: 'All levels',
    introOK: true, coachSlug: 'jace-kaopua',
  },
  {
    id: 'bjj-mma-tt',
    program: 'bjj-keiki-mma',
    title: 'All Levels MMA',
    days: ['Tue', 'Thu'],
    start: '17:00', end: '18:00', startLabel: '5:00 PM', endLabel: '6:00 PM',
    level: 'All levels', audience: 'adults', ageLabel: 'All levels',
    introOK: true, coachSlug: 'jace-kaopua',
  },

  // ── WING CHUN HAWAII (Koolau Wing Chun) ──────────────────────────────────
  {
    id: 'wc-adult',
    program: 'wing-chun',
    title: 'Adult Class',
    days: ['Tue', 'Thu'],
    start: '19:30', end: '21:00', startLabel: '7:30 PM', endLabel: '9:00 PM',
    level: 'All levels', audience: 'adults', ageLabel: 'Adults',
    introOK: true, coachSlug: 'wing-chun-instructor',
  },
];

/**
 * Weekend / special availability notes shown alongside the grid.
 * These are appointment- or invite-only and are not fixed class times.
 */
export const scheduleNotes: { program: ProgramSlug; label: string; detail: string }[] = [
  { program: 'boxing', label: 'Sat & Sun', detail: 'Appointment only' },
  { program: 'muay-thai', label: 'Sat & Sun', detail: 'Appointment only' },
  { program: 'bjj-keiki-mma', label: 'Sat & Sun', detail: 'Appointment only' },
  { program: 'wing-chun', label: 'Sat & Sun', detail: 'Private Lesson / Competition Team — Invite only' },
];

export const audienceLabels: Record<Audience, string> = {
  keiki: 'Keiki',
  youth: 'Youth',
  adults: 'Adults',
  all: 'All ages',
};

import { sessions, DAY_ORDER, type Day, type ClassSession, type ProgramSlug } from '../data/schedule';
import { programs } from '../data/programs';

export function programName(slug: ProgramSlug): string {
  return programs.find((p) => p.slug === slug)?.name ?? slug;
}

export function programAccent(slug: ProgramSlug): string {
  return programs.find((p) => p.slug === slug)?.accent ?? 'boxing';
}

/** All sessions occurring on a given day, sorted by start time. */
export function sessionsForDay(day: Day): ClassSession[] {
  return sessions
    .filter((s) => s.days.includes(day))
    .sort((a, b) => a.start.localeCompare(b.start));
}

/** JS weekday (0=Sun) → our Day code. */
export function dayCodeFromDate(d = new Date()): Day {
  const map: Day[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return map[d.getDay()];
}

/** Flattened per-day rows for the full grid (one row per day a session runs). */
export interface SessionRow extends ClassSession {
  day: Day;
}
export function allRows(): SessionRow[] {
  const rows: SessionRow[] = [];
  for (const s of sessions) for (const day of s.days) rows.push({ ...s, day });
  return rows.sort(
    (a, b) => DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day) || a.start.localeCompare(b.start),
  );
}

/** Primary navigation structure (exact per brief). */
export interface NavItem {
  label: string;
  href: string;
  /** Label used for the parent/overview link inside its own dropdown. */
  overviewLabel?: string;
  /** External link — opens in a new tab. */
  external?: boolean;
  children?: { label: string; href: string }[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Programs',
    href: '/programs',
    overviewLabel: 'All Programs',
    children: [
      { label: 'Iron Kingz Boxing', href: '/programs/boxing' },
      { label: 'HFA Muay Thai & Kickboxing', href: '/programs/muay-thai' },
      { label: '808 Top Team BJJ & Keiki MMA', href: '/programs/bjj-keiki-mma' },
      { label: 'Wing Chun Hawaii', href: '/programs/wing-chun' },
    ],
  },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Memberships', href: '/memberships' },
  { label: 'News', href: '/blog' },
  {
    label: 'Our Story',
    href: '/our-story',
    overviewLabel: 'Our Story',
    children: [
      { label: 'Coaches', href: '/coaches' },
    ],
  },
  { label: 'Shop', href: 'https://www.breakpointfc.com/collections/iron-kingz', external: true },
  { label: 'Contact', href: '/contact' },
  { label: 'Waiver', href: '/waiver' },
];

/** Secondary links surfaced only in the footer / "more" (not the main nav). */
export const moreNav = [
  { label: 'News', href: '/blog' },
  { label: 'Gallery', href: '/gallery' },
];

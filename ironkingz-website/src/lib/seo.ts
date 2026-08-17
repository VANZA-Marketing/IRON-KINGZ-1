import type { Faq } from '../data/faqs';

/** Build FAQPage JSON-LD from visible FAQ items (strip internal TODO notes). */
export function faqJsonLd(items: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a.replace(/\s*\[TODO\(owner\):[^\]]*\]/g, '').trim(),
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { label: string; href: string }[], site: URL | undefined) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.label,
      item: site ? new URL(it.href, site).toString() : it.href,
    })),
  };
}

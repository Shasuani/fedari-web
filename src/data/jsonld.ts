import { COMPANY } from './site';

const SITE = 'https://fedari.ae';

export const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${SITE}/#business`,
  name: COMPANY.legalName,
  alternateName: COMPANY.name,
  slogan: COMPANY.tagline,
  url: SITE,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  image: `${SITE}/images/og-default.jpg`,
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.region,
    addressCountry: COMPANY.address.country,
  },
  areaServed: [
    { '@type': 'City', name: COMPANY.areaServed },
    ...COMPANY.communities.map((name) => ({ '@type': 'Place', name })),
  ],
  openingHours: 'Sa-Th 08:00-20:00',
  sameAs: Object.values(COMPANY.social).filter((v) => v && v !== '#'),
};

export function serviceLd(opts: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.name,
    name: `${opts.name} in Dubai`,
    description: opts.description,
    url: `${SITE}${opts.path}`,
    areaServed: { '@type': 'City', name: 'Dubai' },
    provider: { '@id': `${SITE}/#business` },
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.path}`,
    })),
  };
}

export function jobPostingLd(opts: {
  title: string; description: string; department: string; location: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: opts.title,
    description: opts.description,
    employmentType: 'FULL_TIME',
    hiringOrganization: { '@type': 'Organization', name: COMPANY.legalName, sameAs: SITE },
    jobLocation: {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressLocality: opts.location, addressCountry: 'AE' },
    },
    industry: opts.department,
  };
}

export const contactPageLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `Contact ${COMPANY.name}`,
  url: `${SITE}/contact`,
};

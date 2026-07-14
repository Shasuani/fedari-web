// ============================================================
// FEDARI — central site config.
// Everything marked [PLACEHOLDER] must be replaced by the client
// before launch. Change values here once; they propagate site-wide.
// ============================================================

export const COMPANY = {
  name: 'Fedari',
  legalName: 'Fedari Property Care',
  tagline: 'Property Care. Perfected.',
  descriptionShort:
    'Premium maintenance, repairs and 24/7 emergency care for Dubai villas and townhouses.',
  // [PLACEHOLDER] real numbers/emails/address
  phone: '+971 4 000 0000',
  phoneHref: 'tel:+97140000000',
  whatsapp: '+971 50 000 0000',
  whatsappHref: 'https://wa.me/971500000000',
  whatsappMessage: 'https://wa.me/971500000000?text=Hi%20Fedari%2C%20I%27d%20like%20a%20quote%20for%20my%20villa.',
  email: 'hello@fedari.ae',
  emailHref: 'mailto:hello@fedari.ae',
  domain: 'fedari.ae',
  address: {
    street: 'Business Bay',
    city: 'Dubai',
    region: 'Dubai',
    country: 'AE',
  },
  areaServed: 'Dubai',
  // Flagship community per the brand brief; we also cover villa communities across Dubai.
  flagshipCommunity: 'DAMAC Lagoons',
  communities: ['DAMAC Lagoons'],
  hours: 'Sat–Thu 8:00–20:00 · Emergency line 24/7',
  // [PLACEHOLDER] real embed URL for the Dubai service area
  mapEmbed:
    'https://www.google.com/maps?q=Dubai&output=embed',
  social: {
    instagram: '#',
    linkedin: '#',
    googleBusiness: '#', // [PLACEHOLDER] Google Business Profile / reviews link
  },
  // [PLACEHOLDER] analytics / verification
  ga4Id: 'G-XXXXXXXXXX',
  gscToken: 'REPLACE_WITH_SEARCH_CONSOLE_TOKEN',
};

// Build credit shown in the footer. Set `url` later to turn the name into a
// clickable link to the DeviPix site — nothing else needs to change.
export const BUILT_BY = {
  name: 'DeviPix',
  url: '', // [PLACEHOLDER] e.g. 'https://devipix.com' — leave empty for plain text
};

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Maintenance Plans', href: '/maintenance-plans' },
  { label: 'Emergency', href: '/emergency-repairs' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_LEGAL: NavItem[] = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Cookies', href: '/cookies' },
  { label: 'Sitemap', href: '/sitemap-index.xml' },
];

// Service summaries — drives the home grid, the /services overview and routing.
// Full page bodies live in src/data/services.ts (slug must match).
export type ServiceSummary = {
  slug: string;
  title: string;
  short: string;
  icon: string; // key in src/components/ServiceIcon.astro
};

// Order matters — this drives display order everywhere. Lead with the two
// flagship services (AC & Cooling, Snagging), then the rest.
export const SERVICES: ServiceSummary[] = [
  { slug: 'ac-repair-dubai', title: 'AC & Cooling', short: 'Servicing, repair and preventive care for your home’s cooling system.', icon: 'ac' },
  { slug: 'snagging-dubai', title: 'Snagging', short: 'Independent handover checks for new and off-plan villas and townhouses.', icon: 'snagging' },
  { slug: 'plumbing-dubai', title: 'Plumbing', short: 'Leaks, blockages, water heaters and full bathroom repairs.', icon: 'plumbing' },
  { slug: 'electrical-dubai', title: 'Electrical', short: 'Safe fault-finding, fixtures, DB boards and smart-home wiring.', icon: 'electrical' },
  { slug: 'handyman-dubai', title: 'Handyman', short: 'The trusted small jobs, fittings and finishes done properly.', icon: 'handyman' },
  { slug: 'painting-dubai', title: 'Painting', short: 'Interior and exterior painting with a clean, lasting finish.', icon: 'painting' },
  { slug: 'inspections-dubai', title: 'Inspections', short: 'Detailed property condition reports with photo documentation.', icon: 'inspection' },
  { slug: 'move-in-services-dubai', title: 'Move-in Services', short: 'Deep clean, checks and fixes so your home is ready on day one.', icon: 'movein' },
  { slug: 'preventive-maintenance-dubai', title: 'Preventive Maintenance', short: 'Scheduled care that prevents costly breakdowns.', icon: 'preventive' },
];

export function serviceUrl(slug: string) {
  return `/services/${slug}`;
}

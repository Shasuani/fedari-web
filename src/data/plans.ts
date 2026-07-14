// ============================================================
// FEDARI — maintenance plan tiers.
// Three plans, escalating and believable. No invented prices;
// inclusions carry the value. Plus is the recommended tier.
// ============================================================

export interface Plan {
  id: string;
  name: string;
  audience: string;
  tagline: string;
  popular?: boolean;
  features: string[];
  note?: string;
}

export const PLANS: Plan[] = [
  {
    id: 'essential',
    name: 'Essential',
    audience: 'For residents',
    tagline: 'The dependable basics, kept on schedule.',
    features: [
      'Two scheduled maintenance visits a year',
      'AC service before and after summer',
      'Basic plumbing and electrical safety checks',
      'Priority booking over one-off jobs',
      'Photo report after every visit',
      'Member rates on any additional repairs',
    ],
    note: 'A steady baseline for people who live in the villa and want the essentials handled.',
  },
  {
    id: 'plus',
    name: 'Plus',
    audience: 'For homeowners',
    tagline: 'Fuller cover and faster response for the home you live in.',
    popular: true,
    features: [
      'Four scheduled maintenance visits a year',
      'Full AC servicing, including ducted systems',
      'Plumbing, electrical and general condition checks each visit',
      'Priority emergency response, day or night',
      'Small fixes handled during visits at no extra labour cost',
      'Detailed photo reporting you can keep',
      'Greater discount on additional repairs and parts',
    ],
    note: 'Our most popular plan — the balance most villa owners settle on.',
  },
  {
    id: 'signature',
    name: 'Signature',
    audience: 'For investors',
    tagline: 'Hands-off, fully documented care for property you rely on.',
    features: [
      'Scheduled visits tailored to the property and its use',
      'Complete preventive maintenance across all systems',
      'Fastest emergency response with a dedicated point of contact',
      'Tenant liaison and coordination on your behalf',
      'Move-in and move-out inspections included',
      'Comprehensive photo and condition reporting for your records',
      'Best member rates on all additional work',
    ],
    note: 'Built for owners and investors who need a villa cared for and accounted for without being there.',
  },
];

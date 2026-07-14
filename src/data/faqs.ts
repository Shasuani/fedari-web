// ============================================================
// FEDARI — grouped FAQs for the FAQ page.
// Groups: Services, Pricing & quotes, Emergencies, Maintenance plans, Careers.
// Plain, specific answers in Fedari's voice.
// ============================================================

export interface QA {
  q: string;
  a: string;
}

export interface FaqGroup {
  category: string;
  items: QA[];
}

export const FAQ_GROUPS: FaqGroup[] = [
  {
    category: 'Services',
    items: [
      { q: 'Which areas of Dubai do you cover?', a: 'We serve villa communities across Dubai. Share your location when you enquire and we will confirm scheduling for your area.' },
      { q: 'What services do you offer?', a: 'Nine specialist services under one team — AC and cooling, plumbing, electrical, handyman, painting, inspections, snagging, move-in services and preventive maintenance.' },
      { q: 'Are your technicians vetted and insured?', a: 'Yes. Every technician is vetted and trained, and all work is carried out under full liability cover.' },
      { q: 'Can one team handle several different jobs?', a: 'Yes. Because we cover the main trades in-house, a single visit or plan can handle a mix of work without you coordinating separate contractors.' },
      { q: 'Do you document the work you do?', a: 'Every visit is documented with before-and-after photos and clear notes, which you keep for your records.' },
    ],
  },
  {
    category: 'Pricing & quotes',
    items: [
      { q: 'Do you provide a quote before starting work?', a: 'Always. You receive a written scope and price before any work begins, so there are no surprises on the invoice.' },
      { q: 'How do I get a quote?', a: 'Send a message or a few photos on WhatsApp, or request a quote through the contact page. For many jobs we can reply the same day.' },
      { q: 'Why do you ask for photos?', a: 'Photos help us understand the job before we arrive, so the quote is accurate and the technician brings the right parts and tools.' },
      { q: 'Are there call-out or assessment fees?', a: 'We are clear about any fees up front when you enquire, so you know the cost before committing. Nothing is charged beyond what you have approved.' },
      { q: 'Do plan members pay less for repairs?', a: 'Yes. Maintenance plan members receive member rates on additional repairs and parts, with the discount growing across the tiers.' },
    ],
  },
  {
    category: 'Emergencies',
    items: [
      { q: 'What counts as an emergency?', a: 'Active water leaks, complete AC failures in summer, power faults, burning smells and anything posing a safety risk. If in doubt, call and we will advise.' },
      { q: 'How quickly can you respond?', a: 'Our emergency line runs 24/7. When you call, we give you a realistic response time rather than a promise we cannot keep.' },
      { q: 'What should I do while I wait?', a: 'For a leak, turn off your water supply if you can. For an electrical fault or burning smell, switch off power to that area at the board. Then call our emergency line.' },
      { q: 'Do plan members get priority in an emergency?', a: 'Yes. Plan members receive priority emergency response, and Signature members have a dedicated point of contact.' },
      { q: 'Is the emergency line available at night and on weekends?', a: 'Yes. The emergency line is open around the clock, every day, for genuine urgent issues.' },
    ],
  },
  {
    category: 'Maintenance plans',
    items: [
      { q: 'What maintenance plans do you offer?', a: 'Three tiers — Essential for residents, Plus for homeowners, and Signature for investors — with scheduled checks, priority support and photo reporting that step up across the plans.' },
      { q: 'Which plan is right for me?', a: 'Essential suits residents wanting the basics kept up. Plus is the balance most homeowners choose. Signature suits owners and investors who need a villa managed and documented remotely.' },
      { q: 'What does a plan actually include?', a: 'Scheduled maintenance visits, servicing of the key systems, condition checks, priority response and photo reporting — with more visits, faster response and better rates as you move up the tiers.' },
      { q: 'Can I change or cancel my plan?', a: 'Yes. Plans are designed to fit how you use your villa, and you can discuss adjusting your tier with us as your needs change.' },
      { q: 'Do plans really save money?', a: 'Scheduled care catches small problems before they become expensive emergencies, and members pay reduced rates on any extra work, so a plan usually costs less than reactive repairs over a year.' },
    ],
  },
  {
    category: 'Careers',
    items: [
      { q: 'Are you hiring?', a: 'We are always interested in skilled, reliable technicians and coordinators. Current openings are listed on the careers page.' },
      { q: 'What kind of people do you look for?', a: 'Trained, careful technicians who take pride in their work and communicate well — the sort of person you would trust in your own home.' },
      { q: 'How do I apply?', a: 'Apply through the role on our careers page, or send your details and experience through the contact page and we will be in touch.' },
      { q: 'Do I need to be based in Dubai?', a: 'Our roles are based in Dubai. You should be able to work here legally or be ready to relocate for the position.' },
      { q: 'What is it like to work at Fedari?', a: 'A team that values doing the job properly, clear communication and treating clients’ homes with respect. We invest in training and the right tools to let people do good work.' },
    ],
  },
];

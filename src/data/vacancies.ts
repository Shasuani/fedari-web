// ============================================================
// FEDARI — open roles for the careers page.
// Realistic Dubai-based positions. Plain, honest descriptions.
// ============================================================

export interface Vacancy {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

export const VACANCIES: Vacancy[] = [
  {
    id: 'ac-technician',
    title: 'AC Technician',
    department: 'Field Operations',
    location: 'Dubai',
    type: 'Full-time',
    summary:
      'Service, diagnose and repair split, ducted and central AC systems in Dubai villas, delivering the standard of work and communication our clients expect.',
    responsibilities: [
      'Service and repair split, ducted and central cooling systems',
      'Diagnose faults accurately before recommending a repair',
      'Detect and repair refrigerant leaks at the source',
      'Complete work cleanly and test the result before leaving',
      'Document each job with before-and-after photos and clear notes',
      'Advise clients honestly on repair versus replacement',
    ],
    requirements: [
      'Proven experience servicing and repairing AC systems, ideally in the UAE',
      'Solid understanding of refrigeration, airflow and electrical basics',
      'Careful, methodical approach to diagnosis',
      'Good spoken English and a respectful, professional manner',
      'UAE driving licence preferred',
      'Right to work in the UAE, or readiness to relocate',
    ],
  },
  {
    id: 'plumber',
    title: 'Plumber',
    department: 'Field Operations',
    location: 'Dubai',
    type: 'Full-time',
    summary:
      'Handle leak repairs, blockages, water heaters and full bathroom work for villa clients, tracing issues to their source and fixing them properly.',
    responsibilities: [
      'Trace and repair leaks, including concealed pipework',
      'Clear blocked drains and identify why they blocked',
      'Repair and install taps, valves, toilets and water heaters',
      'Carry out bathroom repairs and fixture replacements',
      'Keep work clean and test thoroughly for leaks and flow',
      'Record each job with photos for the client',
    ],
    requirements: [
      'Experienced plumber with a strong repair record',
      'Confident diagnosing leaks, pressure and drainage problems',
      'Tidy, careful worker who respects clients’ homes',
      'Good communication and reliable timekeeping',
      'UAE driving licence preferred',
      'Right to work in the UAE, or readiness to relocate',
    ],
  },
  {
    id: 'multi-skilled-handyman',
    title: 'Multi-skilled Handyman',
    department: 'Field Operations',
    location: 'Dubai',
    type: 'Full-time',
    summary:
      'Work through varied job lists in villas — mounting, minor repairs, sealing, assembly and finishing — with the care of someone working in their own home.',
    responsibilities: [
      'Complete varied handyman tasks in a single planned visit',
      'Mount TVs, shelves, mirrors and fixtures securely on any wall type',
      'Adjust and repair doors, drawers, cabinets and fittings',
      'Assemble furniture and re-seal wet areas neatly',
      'Handle basic plumbing and electrical fixes where competent',
      'Leave every space clean and documented with photos',
    ],
    requirements: [
      'Broad practical skills across several trades',
      'Eye for detail and a clean, tidy finish',
      'Ability to plan a job list and bring the right parts',
      'Friendly, trustworthy manner with clients',
      'UAE driving licence preferred',
      'Right to work in the UAE, or readiness to relocate',
    ],
  },
  {
    id: 'operations-coordinator',
    title: 'Operations Coordinator',
    department: 'Operations',
    location: 'Dubai',
    type: 'Full-time',
    summary:
      'Keep the field team running smoothly — scheduling jobs, coordinating quotes and keeping clients informed with the clarity Fedari is built on.',
    responsibilities: [
      'Schedule technicians and manage the daily job calendar',
      'Coordinate quotes and follow up with clients promptly',
      'Keep clients informed with clear, timely updates',
      'Handle emergency call-outs and prioritise the queue',
      'Maintain job records, photos and reporting',
      'Spot and smooth out bottlenecks in day-to-day operations',
    ],
    requirements: [
      'Experience in operations, dispatch or client coordination',
      'Highly organised, calm under pressure and detail-oriented',
      'Excellent written and spoken English',
      'Comfortable with scheduling and record-keeping tools',
      'Service mindset with a genuine focus on the client',
      'Right to work in the UAE, or readiness to relocate',
    ],
  },
];

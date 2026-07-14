// ============================================================
// FEDARI — service page content.
// One entry per slug in SERVICES (src/data/site.ts). Slugs must match.
// Copy is premium but plain: calm, specific, customer language.
// ============================================================

export interface ProcessStep {
  title: string;
  desc: string;
}

export interface QA {
  q: string;
  a: string;
}

export interface ServiceDetail {
  slug: string;
  heroBenefit: string;
  intro: string;
  commonProblems: string[];
  whatWeDo: string[];
  process: ProcessStep[];
  faqs: QA[];
  metaTitle: string;
  metaDescription: string;
  image: string;
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  'ac-repair-dubai': {
    slug: 'ac-repair-dubai',
    heroBenefit: 'Cool, quiet rooms and lower running costs — even through a Dubai summer.',
    intro:
      'Air conditioning works hardest in the villas that need it most. When cooling drops off, bills climb, or a unit starts making noises it never used to, our technicians find the real cause and fix it — rather than topping up gas and hoping. We service, repair and maintain split, ducted and central systems.',
    commonProblems: [
      'The AC runs constantly but rooms never reach the set temperature',
      'Warm or weak airflow from the vents',
      'Water dripping from the indoor unit or staining the ceiling',
      'A musty or damp smell when the cooling comes on',
      'Loud rattling, buzzing or clicking from the unit',
      'Electricity bills rising with no change in how you use the AC',
    ],
    whatWeDo: [
      'Diagnose the fault properly before quoting any repair',
      'Clean or replace filters and clear blocked drainage lines',
      'Check refrigerant levels and repair leaks at the source',
      'Service compressors, fan motors, thermostats and control boards',
      'Clean coils and ducts to restore airflow and efficiency',
      'Advise on repair versus replacement when a unit is near end of life',
    ],
    process: [
      { title: 'Assess', desc: 'We inspect the system, measure performance and identify what is actually wrong.' },
      { title: 'Quote', desc: 'You get a written scope and price before we touch anything.' },
      { title: 'Repair', desc: 'A qualified technician completes the work and tests the result.' },
      { title: 'Report', desc: 'We share before-and-after photos and note anything to watch.' },
    ],
    faqs: [
      { q: 'How often should a villa AC be serviced?', a: 'Twice a year suits most Dubai villas — once before summer and once after. Heavy-use or ducted systems benefit from quarterly checks, which a maintenance plan covers automatically.' },
      { q: 'My AC is cooling poorly. Does it just need gas?', a: 'Sometimes, but low refrigerant is usually a symptom, not the cause. If a system needs regassing often there is a leak to find. We check properly so you are not paying for the same fix twice.' },
      { q: 'Can you work on ducted and central systems?', a: 'Yes. We handle split, ducted and central cooling, including thermostat, control-board and airflow issues across a whole villa.' },
      { q: 'Do you handle emergency AC failures?', a: 'Yes. A full cooling failure in summer is treated as urgent through our 24/7 line, and we give you a realistic response time when you call.' },
      { q: 'Will servicing actually lower my bill?', a: 'Clean filters, clear coils and correct refrigerant let a system reach temperature faster and switch off sooner. That reduces running time, which is where the saving comes from.' },
    ],
    metaTitle: 'AC Repair & Servicing in Dubai | Fedari Villa Cooling',
    metaDescription:
      'Expert AC repair, servicing and maintenance for Dubai villas. We fix weak cooling, leaks and rising bills across split, ducted and central systems — with clear quotes.',
    image: '/images/services/ac-repair-dubai.jpg',
  },

  'plumbing-dubai': {
    slug: 'plumbing-dubai',
    heroBenefit: 'Leaks stopped, pressure restored and water heaters that work when you need them.',
    intro:
      'Water problems rarely stay small. A slow leak damages finishes, a blocked drain backs up at the worst moment, and a failing heater leaves you without hot water. Our plumbers trace issues to their source and repair them cleanly — from a single dripping tap to a full bathroom.',
    commonProblems: [
      'A damp patch or musty smell that keeps coming back',
      'Low water pressure in showers or taps',
      'Slow-draining or blocked sinks, showers and toilets',
      'No hot water, or water that runs hot then cold',
      'A running toilet or a tap that will not stop dripping',
      'Water stains appearing on a ceiling or wall below a bathroom',
    ],
    whatWeDo: [
      'Trace and repair leaks, including hidden pipework, with minimal disruption',
      'Clear blocked drains and waste pipes and check why they blocked',
      'Repair or replace taps, mixers, valves and toilet mechanisms',
      'Service, repair and install water heaters and pressure pumps',
      'Carry out full bathroom repairs and fixture replacements',
      'Check for follow-on damage and flag anything that needs attention',
    ],
    process: [
      { title: 'Assess', desc: 'We locate the source of the problem before recommending a fix.' },
      { title: 'Quote', desc: 'You approve a clear scope and price up front.' },
      { title: 'Repair', desc: 'We complete the work cleanly and test for leaks and flow.' },
      { title: 'Report', desc: 'Photos and notes so you know exactly what was done.' },
    ],
    faqs: [
      { q: 'Can you find a leak inside a wall or ceiling?', a: 'Yes. We use the signs — damp, staining, pressure loss — to trace concealed leaks and open up only what is needed to reach and repair the pipe.' },
      { q: 'My water pressure is low everywhere. What causes that?', a: 'It can be a pump fault, a partially closed valve, scale build-up or a leak drawing pressure away. We test the system to find which, rather than guessing.' },
      { q: 'Do you repair and replace water heaters?', a: 'Yes. We service, repair and replace electric and central water heaters, and can advise when replacement is more sensible than another repair.' },
      { q: 'Is a burst pipe or major leak an emergency?', a: 'Yes. Active water leaks are handled through our 24/7 line to limit damage. Turn off your water supply if you can and call us.' },
      { q: 'Do you clean up after the work?', a: 'Always. We protect the area, keep the work tidy and leave the space clean, with photos of the finished repair.' },
    ],
    metaTitle: 'Plumbing Services in Dubai | Fedari Villa Plumbers',
    metaDescription:
      'Reliable plumbing for Dubai villas — leak repairs, blocked drains, water heaters and full bathroom work. Clear quotes, clean work and 24/7 emergency response.',
    image: '/images/services/plumbing-dubai.jpg',
  },

  'electrical-dubai': {
    slug: 'electrical-dubai',
    heroBenefit: 'Safe, reliable power throughout your villa — faults found and fixed correctly.',
    intro:
      'Electrical faults are easy to ignore until they are not. A tripping breaker, a warm socket or flickering lights are signs worth taking seriously. Our electricians diagnose safely, repair to standard and never leave a temporary fix in place of a proper one.',
    commonProblems: [
      'A breaker that keeps tripping and cutting power to part of the villa',
      'Lights that flicker, dim or buzz',
      'Sockets or switches that feel warm, spark or have stopped working',
      'A burning or plastic smell near an outlet or the DB board',
      'New appliances or fixtures that need safe wiring in',
      'Outdoor, pool or garden lighting that has failed',
    ],
    whatWeDo: [
      'Find electrical faults safely and explain what caused them',
      'Repair and upgrade DB boards, breakers and RCDs',
      'Replace faulty sockets, switches, spurs and fixtures',
      'Install and wire lighting, fans, appliances and smart-home devices',
      'Sort out outdoor, garden and pool-area lighting circuits',
      'Advise on load, safety and anything that no longer meets standard',
    ],
    process: [
      { title: 'Assess', desc: 'We test the circuit safely and isolate the fault.' },
      { title: 'Quote', desc: 'A written scope and price, with any safety concerns flagged.' },
      { title: 'Repair', desc: 'A qualified electrician completes and tests the work.' },
      { title: 'Report', desc: 'Photos and clear notes on what was done and why.' },
    ],
    faqs: [
      { q: 'Why does my breaker keep tripping?', a: 'A breaker trips to protect you — usually from an overloaded circuit, a faulty appliance or a fault in the wiring. We test to find which, then fix the cause rather than just resetting it.' },
      { q: 'A socket feels warm. Is that dangerous?', a: 'A warm socket, scorch marks or a burning smell need attention quickly. Stop using it and contact us. If there is smoke, treat it as an emergency and call our 24/7 line.' },
      { q: 'Can you install smart-home and lighting systems?', a: 'Yes. We wire in smart switches, lighting, fans and connected devices safely, and make sure the circuit can handle the load.' },
      { q: 'Do you work on the main DB board?', a: 'Yes. We repair and upgrade distribution boards, breakers and RCDs, and can add protection where a board is outdated.' },
      { q: 'Are your electricians qualified and insured?', a: 'Yes. All electrical work is carried out by vetted, trained technicians under full liability cover, and completed to standard.' },
    ],
    metaTitle: 'Electrical Services in Dubai | Fedari Villa Electricians',
    metaDescription:
      'Safe electrical repairs and installation for Dubai villas — tripping breakers, faulty sockets, DB boards, lighting and smart-home wiring. Qualified, insured, clear quotes.',
    image: '/images/services/electrical-dubai.jpg',
  },

  'handyman-dubai': {
    slug: 'handyman-dubai',
    heroBenefit: 'The small jobs on your list, done properly by someone you can trust in your home.',
    intro:
      'Every villa builds up a list of small jobs — a door that sticks, a shelf to mount, a handle that has come loose. On their own they are minor; together they wear on a home. Our multi-skilled handymen clear that list in one visit, with the care you would want in your own house.',
    commonProblems: [
      'A growing list of small fixes that never quite gets done',
      'Doors, drawers or cabinets that stick, sag or will not close',
      'Shelves, mirrors, TVs and artwork that need mounting securely',
      'Loose handles, hinges, towel rails and fittings',
      'Flat-pack or new furniture that needs assembling',
      'Gaps, cracks and worn sealant around sinks, baths and windows',
    ],
    whatWeDo: [
      'Work through your whole list in a single, planned visit',
      'Adjust and repair doors, drawers, cabinets and hinges',
      'Mount TVs, shelves, mirrors and fixtures on any wall type securely',
      'Assemble and fit furniture and storage',
      'Re-seal wet areas and fill gaps and cracks for a clean finish',
      'Tighten, replace and refresh the small fittings that wear over time',
    ],
    process: [
      { title: 'List it', desc: 'Send your jobs and a few photos so we bring the right tools and parts.' },
      { title: 'Quote', desc: 'A clear price for the visit before we start.' },
      { title: 'Fix it', desc: 'We work through the list in one visit and clean up after.' },
      { title: 'Report', desc: 'Photos of the finished work for your records.' },
    ],
    faqs: [
      { q: 'Is there a minimum job size?', a: 'No. Whether it is one job or a dozen, we come prepared. Bundling several small tasks into one visit is usually the best value.' },
      { q: 'Can you handle several different tasks in one visit?', a: 'Yes — that is what handyman work is for. Our technicians are multi-skilled, so a single visit can cover mounting, repairs, sealing and assembly.' },
      { q: 'Will you bring the parts and materials?', a: 'When you share your list and photos in advance, we bring the fixings and materials likely to be needed, so most jobs are finished the same visit.' },
      { q: 'Can you mount a heavy TV or mirror securely?', a: 'Yes. We identify the wall type, use the correct fixings and mount heavy items so they are safe and level.' },
      { q: 'Do you tidy up afterwards?', a: 'Always. We protect the area, remove packaging and offcuts and leave the space as we found it.' },
    ],
    metaTitle: 'Handyman Services in Dubai | Fedari Villa Repairs',
    metaDescription:
      'Trusted handyman services for Dubai villas — mounting, repairs, furniture assembly, sealing and the small jobs done properly. One visit, one clear price.',
    image: '/images/services/handyman-dubai.jpg',
  },

  'painting-dubai': {
    slug: 'painting-dubai',
    heroBenefit: 'A clean, even finish that lifts a room — with the preparation that makes it last.',
    intro:
      'Good painting is mostly preparation. The colour matters, but the difference between a fresh room and a professional finish is in the filling, sanding and masking that happens first. We paint interiors and exteriors for Dubai villas with that care, and protect your home while we work.',
    commonProblems: [
      'Walls looking tired, marked or dated',
      'Cracks, dents and nail holes that show through the paint',
      'Peeling, flaking or bubbling on exterior walls',
      'Patchy touch-ups that no longer match the wall',
      'Damp or water stains bleeding through the paint',
      'A room or whole villa you want refreshed before moving in or renting out',
    ],
    whatWeDo: [
      'Prepare surfaces properly — fill, sand, prime and mask',
      'Protect floors, furniture and fittings before any paint is opened',
      'Paint interior walls, ceilings, doors and woodwork',
      'Handle exterior walls, including sun and weather-damaged areas',
      'Match existing colours or help you choose a new scheme',
      'Leave a clean, even finish and clear the site fully afterwards',
    ],
    process: [
      { title: 'Assess', desc: 'We look at the surfaces, discuss colours and confirm the scope.' },
      { title: 'Quote', desc: 'A written price covering preparation, paint and coats.' },
      { title: 'Prep & paint', desc: 'We protect the space, prepare surfaces and apply the finish.' },
      { title: 'Report', desc: 'A final walk-through and photos of the result.' },
    ],
    faqs: [
      { q: 'Do you prepare the walls or just paint over them?', a: 'We prepare first — filling, sanding, priming and masking. That preparation is what makes the finish look right and last, so we never skip it.' },
      { q: 'Can you match my existing wall colour?', a: 'Yes. We can match an existing colour closely, or help you pick a new scheme if you are refreshing the space.' },
      { q: 'How do you protect my furniture and floors?', a: 'We cover and move what is needed, mask edges and protect floors before opening any paint, then clean thoroughly at the end.' },
      { q: 'Why does my exterior paint keep peeling?', a: 'Dubai sun and moisture behind the wall are the usual causes. We treat the surface and use suitable exterior products so the finish holds up.' },
      { q: 'How long will a villa repaint take?', a: 'It depends on the number of rooms and the preparation needed. We give a realistic timeline with the quote so you can plan around it.' },
    ],
    metaTitle: 'Painting Services in Dubai | Fedari Villa Painters',
    metaDescription:
      'Interior and exterior painting for Dubai villas with proper preparation and a clean, lasting finish. Colour matching, full protection and clear quotes.',
    image: '/images/services/painting-dubai.jpg',
  },

  'inspections-dubai': {
    slug: 'inspections-dubai',
    heroBenefit: 'A clear, honest picture of your property’s condition — documented in full.',
    intro:
      'Whether you are buying, renting out or simply want to know where a villa stands, a thorough inspection removes the guesswork. We check the property methodically and give you a plain-language report with photos, so you can make decisions on facts rather than assumptions.',
    commonProblems: [
      'Buying a villa and wanting to know its real condition first',
      'Preparing a property for a new tenant',
      'Suspecting issues you cannot see or confirm yourself',
      'Needing an independent record before or after a tenancy',
      'Wanting a maintenance baseline for a home you have just taken on',
      'Deciding what to fix now and what can wait',
    ],
    whatWeDo: [
      'Inspect the villa methodically, inside and out',
      'Check AC, plumbing, electrical and general condition',
      'Photograph findings and describe them in plain language',
      'Separate urgent issues from things to monitor over time',
      'Deliver a clear written report you can act on or share',
      'Advise on priorities and likely next steps',
    ],
    process: [
      { title: 'Book', desc: 'Tell us the villa and why you need the inspection.' },
      { title: 'Inspect', desc: 'We assess the property thoroughly and document as we go.' },
      { title: 'Report', desc: 'You receive a written report with photos and priorities.' },
      { title: 'Advise', desc: 'We talk you through the findings and what they mean.' },
    ],
    faqs: [
      { q: 'What does an inspection cover?', a: 'We check the general condition of the villa plus the key systems — AC, plumbing and electrical — and note anything that needs attention now or later, all with photos.' },
      { q: 'Will I get a written report?', a: 'Yes. You receive a clear, photo-backed report in plain language, with issues separated into urgent and monitor so you know where to focus.' },
      { q: 'Should I inspect a villa before I buy it?', a: 'It is one of the most useful checks you can make. Knowing the true condition before you commit helps you plan for repairs and avoid surprises.' },
      { q: 'Is this the same as snagging?', a: 'No. Snagging is a handover check for new or off-plan homes against the developer’s standard. A condition inspection assesses an existing property’s overall state.' },
      { q: 'Can you fix what the inspection finds?', a: 'Yes. If you want the issues resolved, the same team can quote and carry out the repairs — but there is no obligation to use us for the work.' },
    ],
    metaTitle: 'Property Inspections in Dubai | Fedari Villa Condition Reports',
    metaDescription:
      'Independent villa inspections in Dubai with clear, photo-backed condition reports. Understand AC, plumbing, electrical and overall condition before you decide.',
    image: '/images/services/inspections-dubai.jpg',
  },

  'snagging-dubai': {
    slug: 'snagging-dubai',
    heroBenefit: 'An independent handover check that holds your developer to the standard you paid for.',
    intro:
      'A new or off-plan villa looks finished long before it is truly right. Snagging is the detailed check that catches the defects — the doors that do not align, the finishes that fall short, the fittings that were rushed — so they are fixed by the developer before you sign off, not paid for by you later.',
    commonProblems: [
      'Taking handover of a new or off-plan villa',
      'Wanting an independent check before you sign the developer’s forms',
      'Doors, windows and cabinets that do not sit or close properly',
      'Uneven paint, tiling, grout or other finishing defects',
      'AC, plumbing or electrical points that were not tested',
      'A long defects-liability window you want to use properly',
    ],
    whatWeDo: [
      'Inspect the villa in detail against the expected standard',
      'Test doors, windows, fittings, taps, drainage and power points',
      'Check finishes — paint, tiling, grout, sealing and joinery',
      'Log every defect with photos and clear descriptions',
      'Produce a developer-ready snag list you can submit',
      'Re-check that fixes are done properly if you need it',
    ],
    process: [
      { title: 'Book', desc: 'Arrange the snag before or at handover of your villa.' },
      { title: 'Inspect', desc: 'We go through the property room by room, testing and documenting.' },
      { title: 'Report', desc: 'You get a clear snag list with photos to send the developer.' },
      { title: 'Re-check', desc: 'We can verify the developer’s fixes on request.' },
    ],
    faqs: [
      { q: 'What is snagging?', a: 'Snagging is a detailed inspection of a new or off-plan home to find defects and unfinished work, so the developer corrects them under warranty before you accept the property.' },
      { q: 'When should I have my villa snagged?', a: 'Ideally before you sign handover, while defects are still the developer’s responsibility. If you have already taken keys, it is still worth doing within your defects-liability period.' },
      { q: 'Do you deal with the developer directly?', a: 'We give you a clear, photo-backed list formatted for submission. You send it to the developer, and we can re-inspect once they say the work is done.' },
      { q: 'What kinds of defects do you find?', a: 'Common ones include misaligned doors and windows, uneven paint and tiling, poor sealing, untested plumbing or electrical points and rushed finishing.' },
      { q: 'Can you re-check the fixes?', a: 'Yes. A re-inspection confirms the developer has actually resolved each item to standard before you close out the snag list.' },
    ],
    metaTitle: 'Snagging Inspections in Dubai | Fedari New-Villa Handover Checks',
    metaDescription:
      'Independent snagging for new and off-plan Dubai villas. We find and document defects so your developer fixes them under warranty — with a re-check on request.',
    image: '/images/services/snagging-dubai.jpg',
  },

  'move-in-services-dubai': {
    slug: 'move-in-services-dubai',
    heroBenefit: 'Walk into a villa that is clean, checked and working from day one.',
    intro:
      'The last thing you want on moving day is a list of problems. Our move-in service prepares a villa before you arrive — a deep clean, a check of the key systems and the small fixes handled — so the home is ready to live in rather than a project to sort out.',
    commonProblems: [
      'Moving into a villa and wanting it ready, not a to-do list',
      'Not knowing whether the AC, plumbing and electrics all work',
      'A property that needs a proper deep clean before you unpack',
      'Small faults left behind by the previous occupant',
      'Fittings, handles and fixtures that need adjusting or securing',
      'Wanting one team to handle it all before the keys change hands',
    ],
    whatWeDo: [
      'Deep clean the villa so it is ready to live in',
      'Check that AC, plumbing and electrical systems all work',
      'Handle small repairs and fixes found during the check',
      'Secure loose fittings, handles and fixtures',
      'Flag anything larger that needs planning or a separate quote',
      'Coordinate the whole thing around your move-in date',
    ],
    process: [
      { title: 'Plan', desc: 'Tell us your villa and move-in date so we can schedule ahead of it.' },
      { title: 'Prepare', desc: 'We deep clean, check the systems and complete the small fixes.' },
      { title: 'Handover', desc: 'You arrive to a home that is clean and working.' },
      { title: 'Report', desc: 'Photos and notes on what we did and anything to watch.' },
    ],
    faqs: [
      { q: 'What is included in a move-in service?', a: 'A deep clean, a check of the AC, plumbing and electrical systems, and the small repairs that come up along the way — combined so the villa is ready when you arrive.' },
      { q: 'Can you do this before I get the keys?', a: 'Where access can be arranged, yes. Many clients prefer the villa prepared before move-in day so they walk into a finished home.' },
      { q: 'What if you find a bigger problem?', a: 'We flag it clearly with photos and a separate quote, so you decide whether to sort it now or later. Nothing is done beyond the agreed scope without your approval.' },
      { q: 'Is this useful for a rental I am moving into?', a: 'Yes. It gives you a clean start and a record of the property’s condition, which is helpful for both tenants and owners.' },
      { q: 'Can you also handle the move-out check?', a: 'Yes. The same team can inspect and prepare a villa you are leaving, so it is handed back in good condition.' },
    ],
    metaTitle: 'Move-in Services in Dubai | Fedari Villa Move-in Preparation',
    metaDescription:
      'Move-in services for Dubai villas — deep clean, systems check and small repairs so your home is clean, working and ready from day one. One team, coordinated around your date.',
    image: '/images/services/move-in-services-dubai.jpg',
  },

  'preventive-maintenance-dubai': {
    slug: 'preventive-maintenance-dubai',
    heroBenefit: 'Problems caught early and fixed cheaply — before they become emergencies.',
    intro:
      'Most villa breakdowns give warning signs long before they fail. Preventive maintenance is the scheduled care that catches those signs — servicing the AC before summer, checking for leaks before they spread, testing the electrics before they fault — so you spend less on repairs and deal with far fewer surprises.',
    commonProblems: [
      'Repairs that always seem to arrive as expensive emergencies',
      'An AC that fails in peak summer because it was never serviced',
      'Small leaks that quietly cause damage over months',
      'Forgetting when systems were last checked or serviced',
      'Managing a villa remotely and wanting eyes on it regularly',
      'Wanting to protect a property’s value and avoid sudden costs',
    ],
    whatWeDo: [
      'Set a schedule of checks matched to your villa and how it is used',
      'Service the AC ahead of the demanding summer months',
      'Inspect plumbing and electrics for early signs of trouble',
      'Check seals, fittings and general condition on each visit',
      'Document every visit with photos you can keep',
      'Fix small issues on the spot and flag anything larger early',
    ],
    process: [
      { title: 'Plan', desc: 'We agree a schedule of visits based on your villa’s needs.' },
      { title: 'Visit', desc: 'We carry out the scheduled checks and service the key systems.' },
      { title: 'Fix & flag', desc: 'Small issues are handled on the spot; larger ones flagged early.' },
      { title: 'Report', desc: 'You get a photo record after every visit.' },
    ],
    faqs: [
      { q: 'How is this different from just calling when something breaks?', a: 'Reactive repairs are almost always more expensive and more disruptive. Scheduled checks catch problems while they are small, so you avoid many breakdowns entirely and plan for the rest.' },
      { q: 'How often would you visit?', a: 'It depends on the villa and how it is used. We set a schedule that keeps the AC ahead of summer and checks the other systems regularly, without over-servicing.' },
      { q: 'Is this the same as a maintenance plan?', a: 'It is the work behind our maintenance plans. If you want it delivered on a fixed schedule with priority response and reporting, a plan is the simplest way to arrange it.' },
      { q: 'Does preventive maintenance really save money?', a: 'Yes, in two ways — small fixes cost far less than emergency repairs, and well-kept systems last longer and run more efficiently.' },
      { q: 'Can you manage a villa I do not live in?', a: 'Yes. Regular visits and photo reporting are ideal for owners who are away or renting the property out, giving you eyes on the villa without being there.' },
    ],
    metaTitle: 'Preventive Maintenance in Dubai | Fedari Villa Care Plans',
    metaDescription:
      'Scheduled preventive maintenance for Dubai villas — AC servicing, plumbing and electrical checks and photo reporting that catch problems early and cut costly breakdowns.',
    image: '/images/services/preventive-maintenance-dubai.jpg',
  },
};

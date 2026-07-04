export const wedding = {
  couple: {
    firstNames: 'Michael & Claire',
    shortNames: 'Michael and Claire',
  },
  date: {
    display: 'Saturday, Month 00, 2027',
    short: 'Month 00, 2027',
  },
  location: {
    cityState: 'City, State',
    venueName: 'Venue Name',
    address: '123 Celebration Lane, City, State',
    mapUrl: 'https://maps.google.com/',
  },
  hero: {
    image: '/images/hero-placeholder.png',
    alt: 'Illustrated outdoor wedding details with flowers and warm afternoon light',
  },
  formspreeEndpoint: 'https://formspree.io/f/mojoygjk',
  navItems: [
    { href: '/', label: 'Home' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/venue-travel', label: 'Venue & Travel' },
    { href: '/rsvp', label: 'RSVP' },
    { href: '/registry', label: 'Registry' },
    { href: '/faq', label: 'FAQ' },
  ],
  schedule: [
    {
      time: '4:00 PM',
      title: 'Ceremony',
      detail: 'Join us as we make it official. Please arrive a little early so everyone can settle in.',
    },
    {
      time: '4:30 PM',
      title: 'Cocktail Hour',
      detail: 'Drinks, snacks, hugs, and the first round of happy chaos.',
    },
    {
      time: '6:00 PM',
      title: 'Dinner',
      detail: 'A relaxed meal with a few toasts and plenty of time to catch up.',
    },
    {
      time: '7:30 PM',
      title: 'Dancing',
      detail: 'The formalities end and the excellent decisions begin.',
    },
  ],
  travel: {
    hotel: {
      name: 'Hotel Block Coming Soon',
      detail: 'We will add hotel block details here once they are confirmed.',
      bookingUrl: '#',
    },
    airport: 'Nearest airport details will go here.',
    parking: 'Parking and rideshare notes will go here.',
    transportation: 'Shuttle or transportation plans will go here if needed.',
  },
  mealChoices: ['Chicken', 'Vegetarian', 'Other / allergy'],
  registryLinks: [
    {
      label: 'Registry Coming Soon',
      href: '#',
      description: 'We will add registry links here once they are ready.',
    },
  ],
  faqs: [
    {
      question: 'Can I bring a plus one?',
      answer: 'Please check your invitation. If a plus one is included, we would love to know their name on your RSVP.',
    },
    {
      question: 'Are kids invited?',
      answer: 'We are still finalizing kid details. This answer is a placeholder until the guest plan is locked.',
    },
    {
      question: 'What should I wear?',
      answer: 'Dress code details will go here. Comfortable shoes for dancing are always a good idea.',
    },
    {
      question: 'Will the wedding be indoors or outdoors?',
      answer: 'Venue and weather notes will go here once the final setup is confirmed.',
    },
    {
      question: 'What if I have food allergies?',
      answer: 'Please include allergies or dietary notes in your RSVP so we can plan with the caterer.',
    },
    {
      question: 'Where should I park?',
      answer: 'Parking details will live on the Venue & Travel page once confirmed.',
    },
  ],
};

export type Wedding = typeof wedding;

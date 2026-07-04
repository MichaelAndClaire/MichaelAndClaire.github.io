export const wedding = {
  couple: {
    firstNames: 'Michael & Claire',
    shortNames: 'Michael and Claire',
  },
  date: {
    display: 'Saturday, July 10, 2027',
    short: 'July 10, 2027',
  },
  location: {
    cityState: 'Estes Park, Colorado',
    venueName: 'Mountainside Lodge, YMCA of the Rockies',
    address: 'Mountainside Lodge, YMCA of the Rockies, Estes Park, CO',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Mountainside%20Lodge%20YMCA%20of%20the%20Rockies%20Estes%20Park%20CO',
  },
  hero: {
    image: '/images/mountain-lodge-illustrated-hero.jpg',
    alt: 'Painterly mountain wedding scene with a rustic lodge, pines, benches, wildflowers, and snowy peaks',
  },
  accessGate: {
    enabled: true,
    storageKey: 'michael-claire-wedding-access',
    endpointStorageKey: 'michael-claire-rsvp-endpoint',
    inviteCodeHash: 'f481b8701ea99f188064b76c8f6710c5088fd0305d9ede52772e1847a591bf0a',
    encryptedRsvpEndpoint: 'KynyWb/6VlK7C0kMgYZ/UgT4cPevrlAYiw==',
  },
  navItems: [
    { href: '/', label: 'Home' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/venue-travel', label: 'Venue & Travel' },
    { href: '/rsvp', label: 'RSVP' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/colorado-favorites', label: 'Colorado Favorites' },
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
      name: 'No hotel block',
      detail:
        'We will not have a hotel block. There are many good options in and around Estes Park, with cheaper options in Longmont or Loveland, about 45 minutes away. Summer near Rocky Mountain National Park gets busy, so book lodging as soon as you can.',
      bookingUrl: 'https://www.google.com/travel/hotels/Estes%20Park',
    },
    airport: 'Denver International Airport is the closest and usually cheapest airport. Plan on a 1.5 to 2 hour drive to Estes Park.',
    parking:
      'Parking at Mountainside Lodge is limited. We will reserve lodge parking for accessibility needs and run a shuttle between a main YMCA parking lot and the lodge.',
    transportation:
      'A rental car is not required, but it is recommended if you want to explore. Shuttles run from Denver Airport to Estes Park, and Uber, Lyft, taxis, and national park shuttles are available in town.',
    elevation:
      'Estes Park is just over 7,500 feet, and the wedding venue is about 8,700 feet above sea level. If you are sensitive to altitude, consider arriving a day or two early and acclimating in lower Front Range cities like Longmont or Boulder. Hydration helps too.',
  },
  mealChoices: ['Chicken', 'Vegetarian', 'Other / allergy'],
  registryLinks: [
    {
      label: 'Registry Coming Soon',
      href: '#',
      description: 'Registry details are still coming together. We will add links here once they are ready.',
    },
  ],
  gallery: {
    photographer: 'Boulder Mouse Photography / Anya Rudaya',
    credit:
      'A huge thank you to Boulder Mouse Photography and Anya Rudaya for helping capture this season of our lives so beautifully.',
    images: [
      {
        src: '/images/mountain-lodge-illustrated-hero.jpg',
        alt: 'Illustrated mountain lodge wedding scene',
        caption: 'More photos coming soon.',
      },
    ],
  },
  coloradoFavorites: [
    {
      region: 'Longmont / Lyons',
      items: ['Hidden Cafe', 'The Roost', 'Casa Agave', 'Main Stage Pizzeria'],
    },
    {
      region: 'Boulder',
      items: ["Sherpa's", "Efrain's"],
    },
    {
      region: 'Hiking',
      items: ['Green Mountain', 'Chautauqua', 'Royal Arch', 'Wild Basin', 'Bear Peak', 'The National Park'],
    },
  ],
  faqs: [
    {
      category: 'Travel',
      entries: [
        {
          question: 'What is the closest airport?',
          answer: 'The closest and cheapest airport is Denver International Airport, which is about 1.5 to 2 hours away.',
        },
        {
          question: 'Do I need to get a rental car?',
          answer:
            'Not necessarily, but we recommend it if you want to explore. You can book shuttles from Denver Airport to Estes Park, including to the Y and other hotels, and we will have a shuttle to and from the wedding spot. Uber, Lyft, taxis, and national park shuttles are also available in Estes Park.',
        },
        {
          question: 'Will you have a hotel block?',
          answer:
            'No, we will not have a hotel block. There are many good options in and around Estes Park, with cheaper options in Longmont or Loveland, about 45 minutes away. Summer brings lots of national park visitors, so we recommend booking lodging ASAP. The Venue & Travel page has more details.',
        },
        {
          question: 'What should I know about elevation?',
          answer:
            'Estes Park is just over 7,500 feet and our wedding venue is about 8,700 feet above sea level. Elevation sickness is a potential risk. If you may be sensitive, consider arriving a day or two early and acclimating in lower Front Range cities like Longmont or Boulder. Staying hydrated is key.',
        },
      ],
    },
    {
      category: 'Wedding Day Logistics',
      entries: [
        {
          question: 'What is the dress code?',
          answer:
            'Cocktail attire. Think a little bit fancy, a little bit mountain. We recommend a light jacket for after-sunset temperatures and practical shoes for walking up and down the slope to our outdoor chapel, and for dancing of course.',
        },
        {
          question: 'What about kids and plus-ones?',
          answer:
            'We love kids and all your plus ones; however, due to wedding size restrictions, we had to make some tough calls. Please see your wedding invitation for specifics or contact us.',
        },
        {
          question: 'Can I drive to the wedding?',
          answer:
            'There is limited parking at Mountainside Lodge, and we will reserve parking for accessibility needs. Please reach out if this applies to you. We will have a shuttle between a main parking lot at the YMCA and Mountainside Lodge.',
        },
        {
          question: 'What time should I arrive?',
          answer: 'Please plan to arrive 30 minutes before the ceremony. Shuttles will be timed accordingly.',
        },
        {
          question: 'Open bar?',
          answer: 'We may be getting married at a YMCA, but we are gonna throw down.',
        },
        {
          question: 'You are getting married outside. What about bad weather?',
          answer:
            'The wedding will stay outside if it is not heavily raining. Please bring an umbrella and/or a rain jacket. If the weather is really bad, we will move inside.',
        },
      ],
    },
  ],
};

export type Wedding = typeof wedding;

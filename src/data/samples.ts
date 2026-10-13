/**
 * Sample projects shown on the Projects page.
 * To add one: drop an image in public/samples/ and add an entry below.
 * A landscape (16:9) screenshot works best. Remove names and private details first.
 */
export type SampleStat = { value: string; label: string }

/** One picture in a multi-image sample, such as a before and an after. */
export type SampleImage = { src: string; alt: string; caption: string }

export type Sample = {
  id: string
  title: string
  tagline: string
  description: string
  /** Path inside public/, e.g. /samples/example.jpg */
  image: string
  /** What the image shows, for screen readers. */
  alt: string
  badge: string
  /** True for tall images (posters, stories): shown uncropped in the full-size view. */
  portrait?: boolean
  /** True for very long images (a full email): shown at a readable width and scrolled. */
  long?: boolean
  /** Optional extra pictures (before and after). When set, the full-size view shows all of them. */
  gallery?: SampleImage[]
  /** Optional label shown on the card's corner. Defaults are chosen from the image shape. */
  cue?: string
  /** 'grid' shows a gallery as a two-column grid (good for tall slides). */
  layout?: 'grid'
  stats: SampleStat[]
  /** Optional public link (a published Notion page, a Canva share link...). */
  url?: string
}

export const samples: Sample[] = [
  {
    id: 'calendar-management',
    title: 'Calendar management',
    tagline: 'A color-coded work week, planned in time blocks.',
    description:
      'A sample week I set up in Google Calendar to practice scheduling. Each day starts with a morning briefing and an inbox review, meetings and calls have their own colors, and every day keeps a lunch break and a follow-up block at the end so nothing slips.',
    image: '/samples/calendar-management.jpg',
    alt: 'A color-coded Google Calendar week from Monday 12 to Friday 16 October 2026, with a morning briefing, meetings, lunch and follow-up blocks on every day.',
    badge: 'Sample project',
    stats: [
      { value: '5 days', label: 'Planned' },
      { value: 'Color', label: 'Coded blocks' },
      { value: 'Google', label: 'Calendar' },
    ],
  },
  {
    id: 'inbox-organization',
    title: 'Inbox organization',
    tagline: 'Labels and categories that keep an inbox easy to scan.',
    description:
      'A sample Gmail setup showing how I organize an inbox. Color-coded labels such as Employment, Finances and Insurance, Games and Subscriptions are applied consistently, so emails can be filtered and found quickly. Email contents are blurred.',
    image: '/samples/inbox-organization.jpg',
    alt: 'A Gmail inbox with notes pointing out the low unread count, the consistent labels on each email and the color-coded label list in the sidebar. Sender names, subjects and message previews are blurred.',
    badge: 'Sample project',
    stats: [
      { value: '4', label: 'Label groups' },
      { value: 'Labels', label: 'And filters' },
      { value: 'Gmail', label: 'Google Workspace' },
    ],
  },
  {
    id: 'canva-product-poster',
    title: 'Product promo poster',
    tagline: 'A soft, on-brand poster for a lip care product.',
    description:
      'A sample product poster I edited in Canva to practice layout and branding. It has an arched headline, three benefit callouts with arrows around the product, a row of ingredient icons, and a clear call to action at the bottom. This is a practice design and is not affiliated with the brand shown.',
    image: '/samples/canva-product-poster.jpg',
    alt: 'A cream and gold product poster for a vanilla lip sleeping mask, with an arched headline, the words Nourish, Hydrate and Protect around the jar, four ingredient icons, and a Shop Now button.',
    badge: 'Sample project',
    portrait: true,
    stats: [
      { value: 'Canva', label: 'Design' },
      { value: '3', label: 'Benefit callouts' },
      { value: '4', label: 'Ingredient icons' },
    ],
  },
  {
    id: 'email-marketing',
    title: 'Email marketing design',
    tagline: 'A bright, playful welcome email for a pet grooming brand.',
    description:
      'A sample welcome email I designed in Canva to practice email marketing layout. It has a bold header banner, two tiles that lead to products and services, a first-visit discount in a highlighted box, a friendly sign-off, social icons and a standard footer with view-in-browser, preferences and unsubscribe links. The brand and offer are made up for practice.',
    image: '/samples/email-marketing.jpg',
    alt: 'A bright blue and lilac welcome email for a pet grooming brand: a banner with a dog and a cat, a welcome message, two tiles for products and services, a 15 percent first-visit offer, social icons and a footer.',
    badge: 'Sample project',
    long: true,
    stats: [
      { value: 'Email', label: 'Marketing' },
      { value: 'Canva', label: 'Design' },
      { value: '15%', label: 'Welcome offer' },
    ],
  },
  {
    id: 'travel-itinerary',
    title: 'Travel itinerary',
    tagline: 'A three-day business trip, planned hour by hour.',
    description:
      'A sample itinerary I put together to practice trip planning. It covers a three-day business trip from Los Angeles to Tokyo, with flight and hotel details at the top and one column per day. Each day has a clear focus, timed blocks for transfers, meals and meetings, and an expected outcome, plus a reminder to check everything before leaving. The trip is made up for practice.',
    image: '/samples/travel-itinerary.jpg',
    alt: 'A Japan business trip itinerary with a Tokyo stamp illustration, flight and hotel details across the top, three maroon columns for Day 1, Day 2 and Day 3 with timed schedules, a reminder bar, and a Japanese skyline along the bottom.',
    badge: 'Sample project',
    portrait: true,
    stats: [
      { value: '3 days', label: 'Planned' },
      { value: 'Hourly', label: 'Time blocks' },
      { value: 'LA–Tokyo', label: 'Route' },
    ],
  },
  {
    id: 'data-entry-cleanup',
    title: 'Data entry and cleanup',
    tagline: 'A messy order list turned into a clean, summarized sheet.',
    description:
      'A sample data cleanup I did in Google Sheets. I started with 38 made-up orders that had mixed date and phone formats, typos, quantities typed as words and duplicate rows, and turned them into one consistent table of 34 unique orders. It has standard formats, a Status dropdown, highlights for missing or invalid details, a Total column, and a small summary of sales per item and orders per status. All the data is made up.',
    image: '/samples/data-entry-after.jpg',
    alt: 'The cleaned order spreadsheet in Google Sheets, with consistent formats, color-coded statuses, highlighted missing details and a sales summary beside the table.',
    badge: 'Sample project',
    cue: 'Before and after',
    gallery: [
      {
        src: '/samples/data-entry-before.jpg',
        alt: 'The original messy order spreadsheet, with mixed capitalization, several date and phone formats, typos and duplicate rows.',
        caption: 'Before: the messy list',
      },
      {
        src: '/samples/data-entry-after.jpg',
        alt: 'The cleaned order spreadsheet with consistent formats, color-coded statuses, highlighted missing details and a sales summary.',
        caption: 'After: cleaned and summarized',
      },
    ],
    stats: [
      { value: '38 to 34', label: 'Rows cleaned' },
      { value: '4', label: 'Duplicates removed' },
      { value: 'Google', label: 'Sheets' },
    ],
  },
  {
    id: 'social-media-plan',
    title: 'Social media content plan',
    tagline: 'A one-week Instagram and Facebook plan, organized in Notion.',
    description:
      'A sample weekly content plan I built in Notion for a made-up pet grooming brand. It lists 14 scheduled items for Instagram and Facebook: seven feed posts and seven daily Stories. Each one has a posting time shown in both US Eastern and Philippine time, plus a format, goal, topic, hook, caption, call to action and status. The brand and the content are made up for practice.',
    image: '/samples/social-plan-1.jpg',
    alt: 'A Notion table titled Content Schedule listing each post by name, with posting times in US and Philippine time, platform, format, goal and topic.',
    badge: 'Sample project',
    cue: 'See the full plan',
    gallery: [
      {
        src: '/samples/social-plan-1.jpg',
        alt: 'The left side of the Notion content schedule: post name, posting times in US Eastern and Philippine time, platform, format, goal and topic.',
        caption: 'Post name, schedule, platform, goal and topic',
      },
      {
        src: '/samples/social-plan-2.jpg',
        alt: 'The right side of the Notion content schedule: the hook, caption, call to action and status for each post. Stories are marked as needing no hook or caption.',
        caption: 'Hook, caption, call to action and status',
      },
    ],
    stats: [
      { value: '14', label: 'Posts and Stories' },
      { value: '7 days', label: 'Planned' },
      { value: 'Notion', label: 'Database' },
    ],
  },
  {
    id: 'logo-and-submark',
    title: 'Logo and submark',
    tagline: 'A playful logo and paw submark for a pet grooming brand.',
    description:
      'A sample logo set for a made-up pet grooming brand, Pawlished & Co. The primary logo pairs an arched, bubbly wordmark with a paw print holding a dog and a cat. The submark is the paw and the pets on their own, so the brand still reads in small spaces such as a social media profile picture. Both come as transparent PNGs, so they work on any light background. The brand is made up for practice.',
    image: '/samples/brand-logo-thumb.jpg',
    alt: 'Two versions of a pet grooming logo side by side: a blue paw print with the arched words Pawlished and Co., a pink dog and cat and soap bubbles on the left, and the paw with only the pink dog and cat on the right.',
    badge: 'Sample project',
    cue: 'See both versions',
    gallery: [
      {
        src: '/samples/brand-logo.png',
        alt: 'The primary logo: a blue paw print with the words Pawlished and Co. arched across the top, a pink dog and cat inside the paw, and soap bubbles below.',
        caption: 'Primary logo',
      },
      {
        src: '/samples/brand-submark.png',
        alt: 'The submark: the blue paw print with the pink dog and cat, without the wordmark or bubbles.',
        caption: 'Submark',
      },
    ],
    stats: [
      { value: '2', label: 'Logo versions' },
      { value: 'Blue + pink', label: 'Brand colors' },
      { value: 'Transparent', label: 'PNG files' },
    ],
  },
  {
    id: 'instagram-carousel',
    title: 'Instagram carousel post',
    tagline: 'A four-slide skincare carousel, from cover to call to action.',
    description:
      'A sample Instagram carousel for a made-up skincare brand, Lumea Skin. Slide 1 is the cover, slide 2 explains the star ingredients, slide 3 lists the skin facts, and slide 4 ends with a call to action and the product bottle. The same fonts, colors, emoji accents and sun-and-leaf logo run through every slide, so they read as one set. The brand, the product and the claims are made up for practice.',
    image: '/samples/carousel-1.jpg',
    alt: 'The cover slide of a skincare Instagram carousel: a close-up of a face with a serum dropper, the large words Lumea Skin, and a card reading Get to know about Radiant Renewal Face Serum.',
    badge: 'Sample project',
    portrait: true,
    cue: 'See all 4 slides',
    layout: 'grid',
    gallery: [
      {
        src: '/samples/carousel-1.jpg',
        alt: 'Slide 1, the cover: the words Lumea Skin over a close-up of a face with a serum dropper, and a card introducing Radiant Renewal Face Serum with a prompt to follow the brand.',
        caption: 'Slide 1: Cover',
      },
      {
        src: '/samples/carousel-2.jpg',
        alt: 'Slide 2, star ingredients: niacinamide helps control excess oil without drying your skin, and vitamin C brightens dark spots without clogging your pores.',
        caption: 'Slide 2: Star ingredients',
      },
      {
        src: '/samples/carousel-3.jpg',
        alt: 'Slide 3, skin facts: suitable for all skin types, non-comedogenic and dermatologically tested.',
        caption: 'Slide 3: Skin facts',
      },
      {
        src: '/samples/carousel-4.jpg',
        alt: 'Slide 4, call to action: Discover Radiant Renewal Face Serum, with the product bottle, a Shop now button and the tagline Pure Care, Lasting Glow.',
        caption: 'Slide 4: Call to action',
      },
    ],
    stats: [
      { value: '4', label: 'Slides' },
      { value: '4:5', label: 'Portrait format' },
      { value: 'Skincare', label: 'Made-up brand' },
    ],
  },
]

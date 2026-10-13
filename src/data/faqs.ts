export type QA = { q: string; a: string }

/**
 * The questions people ask before they email. One list, used by the FAQ
 * accordion on the Contact view (and the legacy long-scroll FAQ section).
 * Five questions, two or three sentences each: the accordion sits in a
 * fixed panel and more than that pushes the email row off the plate.
 */
export const FAQS: QA[] = [
  {
    q: 'What do you do?',
    a: 'I\u2019m a virtual assistant. I offer email and calendar management, light social media upkeep, simple Canva edits and data entry to busy clients.',
  },
  {
    q: 'How fast can you start?',
    a: 'Tell me what you need and when, and I\u2019ll confirm my availability. Small, well-defined tasks are the easiest to start right away.',
  },
  {
    q: 'How much do you charge?',
    a: 'It depends on the tasks and how many hours they take. Message me what you need help with and I\u2019ll send you a clear quote.',
  },
  {
    q: 'Where are you based?',
    a: 'I\u2019m in Zambales, Philippines (UTC+8). I\u2019m happy to adjust my schedule so we overlap during your working hours.',
  },
  {
    q: 'What happens after I write?',
    a: 'I\u2019ll reply by email or WhatsApp to go over what you need. Then we agree on the tasks, the schedule and the price before I start.',
  },
]

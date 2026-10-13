/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline. Edit the values below to change the site.
 * Replace the text, or hand this file to your AI assistant and tell it what
 * to put in each field.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Roshelle B. Rin',
  firstName: 'Roshelle',
  handle: '@xroshrinx',
  role: 'Virtual Assistant',
  avatarSrc: '/avatar.jpg',
  verifiedLabel: 'Open to new clients',
  email: 'roshelle.rin2@gmail.com',
  location: 'Zambales, Philippines',
  // Pick any icon from https://phosphoricons.com and import it above.
  stats: [
    { value: '5', label: 'Core services', Icon: Briefcase },
    { value: 'Google', label: 'Workspace', Icon: SealCheck },
    { value: 'UTC+8', label: 'Philippines time', Icon: Clock },
  ],
  // The intro types this line, then flies it into the Home headline.
  // Keep it short: two halves, 5-8 words total.
  displayName: { line1: 'A fresh pair of hands', line2: 'for your busy days.' },
  hero: {
    body: 'Virtual assistant ready to help with email, calendar, social media, Canva and data entry.',
    portraitSrc: '/avatar.jpg',
    portraitAlt: 'Portrait of Roshelle B. Rin',
  },
  socials: [
    { label: 'Instagram profile', href: 'https://www.instagram.com/xroshrinx/', iconPath: '/icons/instagram.svg' },
    { label: 'WhatsApp chat', href: 'https://wa.me/639998344259', iconPath: '/icons/whatsapp.svg' },
  ],
}

/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline. Every value below is a PLACEHOLDER.
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
  name: 'Mirexelle Vincent Piol',
  firstName: 'Xel',
  handle: '@MIREXELLE',
  role: 'IT Student · Aspiring Data Engineer',
  avatarSrc: '/avatar.png',
  verifiedLabel: 'Information Technology student',
  email: 'm.mirexellevincentc.piol@gmail.com',
  location: 'Philippines (GMT+8)',
  // Pick any icon from https://phosphoricons.com and import it above.
  stats: [
    { value: 'Java', label: 'Main language', Icon: Briefcase },
    { value: 'Data', label: 'Career focus', Icon: SealCheck },
    { value: 'GMT+8', label: 'Philippines', Icon: Clock },
  ],
  // The intro types this line, then flies it into the Home headline.
  // Keep it short: two halves, 5-8 words total.
  displayName: { line1: 'Learning to build.', line2: 'Growing into data.' },
  hero: {
    body: 'IT student building back-end and front-end projects in Java, Spring and MySQL, aiming to become a data engineer.',
    portraitSrc: '/avatar.png',
    portraitAlt: 'Portrait of Mirexelle Vincent Piol',
  },
  socials: [
    { label: 'Facebook profile', href: 'https://www.facebook.com/vincent.piol.75', iconPath: '/icons/facebook.svg' },
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/mirexelle-vincent-piol-377b6a34b/', iconPath: '/icons/linkedin.svg' },
  ],
}

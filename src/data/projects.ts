export type AppStat = { value: string; label: string }

export type AppProject = {
  name: string
  tagline: string
  description: string
  /** Optional - omit for gradient placeholder cards */
  imageSrc?: string
  /** CSS object-position override. Defaults to 'top center'. */
  imagePosition?: string
  /** External brand color - not a site token. Passed via --app-color inline prop. */
  accentColor: string
  stats: AppStat[]
  badge: string
}

/** @deprecated use AppProject */
export type MobileApp = AppProject

/**
 * Your projects. Pulled from public repos on github.com/MIREXELLE.
 * Add screenshots to public/ and set imageSrc (960x514 works well).
 */
const stats = (lang: string, year: string): AppStat[] => [
  { value: lang, label: 'Language' },
  { value: year, label: 'Built' },
  { value: 'Open', label: 'On GitHub' },
]

export const mobileApps: MobileApp[] = [
  {
    name: 'GCash App',
    tagline: 'A Java e-wallet practice project.',
    description: 'A Java project inspired by the GCash e-wallet, built while learning object-oriented programming. Source on GitHub: MIREXELLE/GcashApp.',
    accentColor: '#2563EB',
    stats: stats('Java', '2025'),
    badge: 'Java',
  },
  {
    name: 'Banking App',
    tagline: 'A Java banking app for a TESDA activity.',
    description: 'A Java banking application built for a TESDA activity. Source on GitHub: MIREXELLE/BankingappTesda.',
    accentColor: '#16A34A',
    stats: stats('Java', '2025'),
    badge: 'Java',
  },
  {
    name: 'Banking App (Web)',
    tagline: 'A web version of the TESDA banking app.',
    description: 'A web front end for the banking app, written in HTML. Source on GitHub: MIREXELLE/Tesda-Bankingapp.',
    accentColor: '#7C3AED',
    stats: stats('HTML', '2025'),
    badge: 'HTML',
  },
]

export const webApps: AppProject[] = []

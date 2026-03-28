import type { LabelValue, SkeuomorphMapping, InspirationSite } from './types/common'

export const evolutionStages = [
  'Google Docs',
  'Adobe InDesign',
  'X-Acto knife paste-ups',
  'Linotype machines',
  'Movable type',
  'Hand-written manuscripts',
]

export const secondarySkeuomorphs: SkeuomorphMapping[] = [
  {
    name: 'Camera shutter',
    maps: 'Shutter sound effect',
    description:
      'Phones play a mechanical click when taking a photo, and even when capturing a screenshot, where no camera is involved at all.',
  },
  {
    name: 'Envelope',
    maps: 'Email icon',
    description:
      'The sealed paper envelope persists as the symbol for electronic messages decades after physical mail stopped being the default.',
  },
  {
    name: 'Hanging up the phone',
    maps: 'End Call button',
    description:
      'Replacing a handset on its cradle became a red button tap, preserving the gesture of a rotary-era device most users have never touched.',
  },
]

export const inspirationSites: InspirationSite[] = [
  {
    name: 'Klim Type Foundry',
    url: 'https://klim.co.nz/',
    note: 'Swiss-inspired grids, interactive type testers, and an energy that makes design history feel like a living workshop.',
  },
  {
    name: 'Histography.io',
    url: 'https://histography.io/',
    note: 'Progressive-disclosure timeline that zooms from a full historical sweep down to individual events.',
  },
  {
    name: 'Letterform Archive',
    url: 'https://oa.letterformarchive.org/',
    note: 'Browsable, filterable collection of 3,500+ digitized design artifacts with search by decade, country, and format.',
  },
]

export const formFactors: LabelValue[] = [
  { label: 'Viewport', value: '1440 × 2560 px' },
  { label: 'Orientation', value: 'Portrait' },
  { label: 'Format', value: 'Web app' },
  { label: 'Input', value: 'Coarse (touch)' },
  { label: 'Context', value: 'Wall-mounted kiosk' },
  { label: 'Location', value: '4 exhibit room entrances' },
]

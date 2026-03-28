import type { LabelValue, SkeuomorphMapping, InspirationSite } from './types/common'
import inspirationChm from '../assets/inspiration-chm.png'
import inspirationHistography from '../assets/inspiration-histography.png'

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
    name: 'Computer History Museum and Letterform Archive',
    description:
      'Both have very readable layouts and organize their collection\u2019s meta data well. Both are also museums, which is where this project would hypothetically live.',
    image: inspirationChm,
  },
  {
    name: 'histography.io',
    description:
      'Very dynamic micro-interactions. Moving in and out of timeline events is very smooth and intuitive. The act of filtering transitions the timeline events with an animation instead of just refreshing the page with new events.',
    image: inspirationHistography,
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

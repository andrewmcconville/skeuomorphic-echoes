import type { ColorGroup, TypeGroup, OverlaySpec, TokenSpec } from './types/step-2-8'

export const colorGroups: ColorGroup[] = [
  {
    name: 'Emphasis',
    colors: [
      { name: 'Primary-500', var: '--primary-500', hex: '#E4A339', usage: 'Section headings, hero badges, status badges, spacing bars' },
      { name: 'Secondary-500', var: '--secondary-500', hex: '#CF6924', usage: 'Glossary accents, timeline markers, hover states, era tags' },
    ],
  },
  {
    name: 'Surface Light',
    colors: [
      { name: 'Surface-Light-100', var: '--surface-light-100', hex: '#F8F5EE', usage: 'Card fills, modal backgrounds, lightest surface' },
      { name: 'Surface-Light-200', var: '--surface-light-200', hex: '#F1EEE7', usage: 'Page ground, sidebar background' },
      { name: 'Surface-Light-300', var: '--surface-light-300', hex: '#E7E4DD', usage: 'Inset panels, warm bands, nav hover, glossary TOC' },
      { name: 'Surface-Light-400', var: '--surface-light-400', hex: '#D4D1CA', usage: 'Tag fills' },
    ],
  },
  {
    name: 'Surface Dark',
    colors: [
      { name: 'Surface-Dark-600', var: '--surface-dark-600', hex: '#534840', usage: 'Borders and dotted leaders on dark bands' },
      { name: 'Surface-Dark-700', var: '--surface-dark-700', hex: '#483D35', usage: 'Dark section bands' },
      { name: 'Surface-Dark-800', var: '--surface-dark-800', hex: '#362C24', usage: 'Hero backgrounds, title section bands, badge text' },
    ],
  },
  {
    name: 'Ink',
    colors: [
      { name: 'Ink-900', var: '--ink-900', hex: '#140D20', usage: 'Primary text, card strokes, active nav background' },
      { name: 'Ink-800', var: '--ink-800', hex: '#211C2B', usage: 'Quote text, era badge background, secondary dark text' },
      { name: 'Ink-500', var: '--ink-500', hex: '#65616D', usage: 'Secondary text, metadata labels, scale marks' },
      { name: 'Ink-400', var: '--ink-400', hex: '#848288', usage: 'Tertiary text, placeholder copy, subsection headings' },
      { name: 'Ink-300', var: '--ink-300', hex: '#C1C0C5', usage: 'Muted text, dotted leaders, outline tag borders, card numbers' },
      { name: 'Ink-200', var: '--ink-200', hex: '#D1D0D4', usage: 'Subtle borders, dividers, rationale borders' },
      { name: 'Ink-100', var: '--ink-100', hex: '#EFEEF1', usage: 'Light text on dark bands, hero titles, active nav text' },
    ],
  },
]

export const overlays: OverlaySpec[] = [
  { name: 'Opacity-Panel', value: '0.5', usage: 'Section background panels, decorative overlays' },
  { name: 'Opacity-Muted', value: '0.6', usage: 'Step numbers in sidebar navigation' },
]

export const typeGroups: TypeGroup[] = [
  {
    name: 'Heading',
    styles: [
      { name: 'Heading-770', size: '72 / 60', family: 'IBM Plex Serif', weight: 'Bold', token: '--text-display-770', sample: 'Hero Title' },
      { name: 'Heading-670', size: '48 / 56', family: 'IBM Plex Serif', weight: 'Bold', token: '--text-display-670', sample: 'Title Bold' },
      { name: 'Heading-610', size: '48 / 56', family: 'IBM Plex Serif', weight: 'Thin', token: '--text-display-610', sample: 'Title Thin' },
      { name: 'Heading-470', size: '28 / 36', family: 'IBM Plex Serif', weight: 'Bold', token: '--text-display-470', sample: 'Heading 1' },
      { name: 'Heading-230', size: '22 / 28', family: 'IBM Plex Serif', weight: 'Light', token: '--text-display-230', sample: 'Heading 2' },
    ],
  },
  {
    name: 'Body',
    styles: [
      { name: 'Body-640', size: '18 / 28', family: 'IBM Plex Sans', weight: 'Regular', token: '--text-body-640', sample: 'The quick brown fox jumps over the lazy dog.' },
      { name: 'Body-440', size: '14 / 20', family: 'IBM Plex Sans', weight: 'Regular', token: '--text-body-440', sample: 'The quick brown fox jumps over the lazy dog.' },
      { name: 'Body-350', size: '13 / 16', family: 'IBM Plex Sans', weight: 'Medium', token: '--text-body-350', sample: 'The quick brown fox jumps over the lazy dog.' },
    ],
  },
  {
    name: 'Metadata',
    styles: [
      { name: 'Meta-540', size: '13 / 18', family: 'IBM Plex Mono', weight: 'Regular', token: '--text-meta-540', sample: 'MECHANICAL · c. 1450', extra: 'text-transform: uppercase; letter-spacing: 0.1em' },
      { name: 'Meta-440', size: '12 / 16', family: 'IBM Plex Mono', weight: 'Regular', token: '--text-meta-440', sample: 'Medium, Dimensions, Weight' },
      { name: 'Meta-430', size: '12 / 16', family: 'IBM Plex Mono', weight: 'Light', token: '--text-meta-430', sample: 'Cast iron, 280 × 420 mm, 12.4 kg' },
    ],
  },
]

export const spacingTokens: TokenSpec[] = [
  { name: '2xs', var: '--space-2xs', value: '2px', usage: 'Tight inline gaps, swatch info spacing' },
  { name: 'xs', var: '--space-xs', value: '4px', usage: 'Tag padding, compact list gaps' },
  { name: 'sm', var: '--space-sm', value: '8px', usage: 'Icon gaps, badge padding, spec row gaps' },
  { name: 'md', var: '--space-md', value: '16px', usage: 'Card gaps, field spacing, nav padding' },
  { name: 'lg', var: '--space-lg', value: '24px', usage: 'Card padding, hero badge margin, section gaps' },
  { name: 'xl', var: '--space-xl', value: '30px', usage: 'Sidebar padding, glossary sticky offset, section label gutter' },
  { name: '2xl', var: '--space-2xl', value: '40px', usage: 'Section row gaps, hero bottom padding' },
  { name: '3xl', var: '--space-3xl', value: '60px', usage: 'Half grid column — large component spacing' },
  { name: '4xl', var: '--space-4xl', value: '120px', usage: 'Full grid column — section padding, hero padding' },
]

export const strokeTokens: TokenSpec[] = [
  { name: 'Thin', var: '--stroke-thin', value: '1px', usage: 'Subtle dividers, outline tags, list borders' },
  { name: 'Medium', var: '--stroke-medium', value: '2px', usage: 'Card strokes, section heading borders, sidebar border' },
]

export const radiusTokens: TokenSpec[] = [
  { name: 'xs', var: '--radius-xs', value: '2px', usage: 'Status badges in glossary' },
  { name: 'sm', var: '--radius-sm', value: '4px', usage: 'Nav link hover states' },
  { name: 'md', var: '--radius-md', value: '8px', usage: 'Placeholder containers' },
]

export const shadowTokens: TokenSpec[] = [
  { name: 'Card', var: '--shadow-card', value: '4px 4px 0', usage: 'Default card offset shadow' },
  { name: 'Card-SM', var: '--shadow-card-sm', value: '3px 3px 0', usage: 'Compact card shadow, secondary cards' },
  { name: 'Card-Hover', var: '--shadow-card-hover', value: '5px 5px 0', usage: 'Card hover/pressed feedback' },
]

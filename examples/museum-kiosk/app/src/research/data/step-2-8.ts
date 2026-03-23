import type { ColorGroup, TypeGroup, OverlaySpec, TokenSpec } from './types/step-2-8'

export const colorGroups: ColorGroup[] = [
  {
    name: 'Primary Surface',
    colors: [
      { name: 'Surface-100', var: '--surface-100', hex: '#FAF7F2', usage: 'Card fills, modal backgrounds, lightest surface' },
      { name: 'Surface-200', var: '--surface-200', hex: '#F5F0E8', usage: 'Default page ground, body background' },
      { name: 'Surface-300', var: '--surface-300', hex: '#EDE8DC', usage: 'Alternate ground for inset panels, warm bands' },
      { name: 'Surface-400', var: '--surface-400', hex: '#D8D3CA', usage: 'Column dividers, borders, subtle separation' },
      { name: 'Surface-500', var: '--surface-500', hex: '#C8C2B8', usage: 'Disabled card fills, empty-state placeholders, muted text' },
    ],
  },
  {
    name: 'Accent',
    colors: [
      { name: 'Amber-500', var: '--amber-500', hex: '#E8A838', usage: 'Primary zone highlight, active tab, section headings' },
      { name: 'Orange-500', var: '--orange-500', hex: '#D46A38', usage: 'Secondary highlight, glossary accents, era tags' },
    ],
  },
  {
    name: 'Structure',
    colors: [
      { name: 'Ink-900', var: '--ink-900', hex: '#1A1A1A', usage: 'Primary text, borders, card strokes, button outlines' },
      { name: 'Ink-800', var: '--ink-800', hex: '#2A2A2A', usage: 'Active nav state fill, pressed button background' },
      { name: 'Gray-500', var: '--gray-500', hex: '#6B6B6B', usage: 'Secondary text, metadata labels, scale marks' },
      { name: 'Gray-400', var: '--gray-400', hex: '#8A8A8A', usage: 'Tertiary text, placeholder copy, subsection headings' },
    ],
  },
  {
    name: 'Warm Darks',
    colors: [
      { name: 'Warm-Dark', var: '--warm-dark', hex: '#3A3530', usage: 'Hero backgrounds, title section bands' },
      { name: 'Warm-Mid', var: '--warm-mid', hex: '#4A4540', usage: 'Dark content bands, tonal contrast panels' },
      { name: 'Warm-Border', var: '--warm-border', hex: '#524D47', usage: 'Borders and dotted leaders on dark bands' },
    ],
  },
  {
    name: 'Status',
    colors: [
      { name: 'Status-Thriving', var: '--status-thriving', hex: '#4A8A4A', usage: 'Thriving glyph status badge text' },
      { name: 'Status-Thriving BG', var: '--status-thriving-bg', hex: '#4A8A4A1A', usage: 'Thriving glyph status badge background' },
      { name: 'Status-Endangered', var: '--status-endangered', hex: '#8A4A3A', usage: 'Endangered glyph status badge text' },
      { name: 'Status-Endangered BG', var: '--status-endangered-bg', hex: '#8A4A3A1A', usage: 'Endangered glyph status badge background' },
      { name: 'Status-Extinct BG', var: '--status-extinct-bg', hex: '#0000000D', usage: 'Extinct glyph status badge background' },
      { name: 'Status-Adapted', var: '--status-adapted', hex: '#4A5A8A', usage: 'Adapted glyph status badge text' },
      { name: 'Status-Adapted BG', var: '--status-adapted-bg', hex: '#4A5A8A1A', usage: 'Adapted glyph status badge background' },
    ],
  },
]

export const overlays: OverlaySpec[] = [
  { name: 'Opacity-Panel', value: '0.5', usage: 'Section background panels, decorative overlays' },
  { name: 'Opacity-Muted', value: '0.6', usage: 'Step numbers in sidebar navigation' },
]

export const typeGroups: TypeGroup[] = [
  {
    name: 'Display — IBM Plex Serif',
    styles: [
      { name: 'Display / Title', token: '--text-display-title', weight: 'Bold', size: '48 / 56', sample: 'Title Regular' },
      { name: 'Display / Title Thin', token: '--text-display-title-thin', weight: 'Thin', size: '48 / 56', sample: 'Title Thin' },
      { name: 'Display / Heading 1', token: '--text-display-h1', weight: 'Bold', size: '28 / 36', sample: 'Heading 1' },
      { name: 'Display / Heading 2', token: '--text-display-h2', weight: 'Light', size: '22 / 28', sample: 'Heading 2' },
    ],
  },
  {
    name: 'Body / UI — IBM Plex Sans',
    styles: [
      { name: 'Body / Default', token: '--text-body-default', weight: 'Regular', size: '18 / 28', sample: 'The quick brown fox jumps over the lazy dog.' },
      { name: 'Body / Small', token: '--text-body-small', weight: 'Regular', size: '14 / 20', sample: 'The quick brown fox jumps over the lazy dog.' },
      { name: 'UI / Nav Label', token: '--text-ui-nav', weight: 'Medium', size: '13 / 16', sample: 'The quick brown fox jumps over the lazy dog.' },
    ],
  },
  {
    name: 'Metadata — IBM Plex Mono',
    styles: [
      { name: 'Meta / Era Tag', token: '--text-meta-era', weight: 'Regular', size: '13 / 18', sample: 'MECHANICAL · c. 1450', extra: 'text-transform: uppercase; letter-spacing: 0.1em' },
      { name: 'Meta / Field Label', token: '--text-meta-field-label', weight: 'Regular', size: '12 / 16', sample: 'Medium, Dimensions, Weight' },
      { name: 'Meta / Field Value', token: '--text-meta-field-value', weight: 'Light', size: '12 / 16', sample: 'Cast iron, 280 × 420 mm, 12.4 kg' },
    ],
  },
]

export const spacingTokens: TokenSpec[] = [
  { name: '2xs', var: '--space-2xs', value: '2px', usage: 'Tight inline gaps, swatch info spacing' },
  { name: 'xs', var: '--space-xs', value: '4px', usage: 'Tag padding, compact list gaps' },
  { name: 'sm', var: '--space-sm', value: '8px', usage: 'Icon gaps, badge padding, spec row gaps' },
  { name: 'md', var: '--space-md', value: '16px', usage: 'Card gaps, field spacing, nav padding' },
  { name: 'lg', var: '--space-lg', value: '24px', usage: 'Card padding, hero badge margin, section gaps' },
  { name: 'xl', var: '--space-xl', value: '32px', usage: 'Sidebar padding, glossary sticky offset' },
  { name: '2xl', var: '--space-2xl', value: '48px', usage: 'Section row gaps, content column spacing' },
  { name: '3xl', var: '--space-3xl', value: '64px', usage: 'Section padding, hero top padding' },
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

import type { ColorGroup, TypeGroup, ComponentDef } from './types/step-2-8'

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
    name: 'Accent — Warm Overlay',
    colors: [
      { name: 'Amber-500', var: '--amber-500', hex: '#E8A838', usage: 'Primary zone highlight, active tab, selected state' },
      { name: 'Amber-700', var: '--amber-700', hex: '#D4922A', usage: 'Pressed/hover state for amber, progress bar fill' },
      { name: 'Orange-500', var: '--orange-500', hex: '#D46A38', usage: 'Secondary zone highlight, section badges, era tags' },
      { name: 'Orange-700', var: '--orange-700', hex: '#C25A30', usage: 'Pressed/hover for orange, active room indicator' },
    ],
  },
  {
    name: 'Structure',
    colors: [
      { name: 'Ink-900', var: '--ink-900', hex: '#1A1A1A', usage: 'Primary text, borders, card strokes, button outlines' },
      { name: 'Ink-800', var: '--ink-800', hex: '#2A2A2A', usage: 'Secondary headlines, nav icons, pressed button fill' },
      { name: 'Gray-500', var: '--gray-500', hex: '#6B6B6B', usage: 'Secondary text, metadata labels, scale marks' },
      { name: 'Gray-400', var: '--gray-400', hex: '#8A8A8A', usage: 'Tertiary text, placeholder copy, disabled labels' },
    ],
  },
  {
    name: 'Warm Darks',
    colors: [
      { name: 'Warm-Dark', var: '--warm-dark', hex: '#3A3530', usage: 'Editorial dark bands, hero backgrounds, title sections' },
      { name: 'Warm-Mid', var: '--warm-mid', hex: '#4A4540', usage: 'Mid-tone panels, primary content bands, tonal contrast' },
      { name: 'Warm-Border', var: '--warm-border', hex: '#524D47', usage: 'Borders and accents on dark bands, decorative strokes' },
    ],
  },
  {
    name: 'Semantic',
    colors: [
      { name: 'Collected-Green', var: '--collected-green', hex: '#5A7A5A', usage: 'Collected/completed state, progress bar segment' },
      { name: 'Locked-Brown', var: '--locked-brown', hex: '#8A5A3A', usage: 'Locked/unavailable state, restricted overlay' },
    ],
  },
]

export const overlays = [
  { name: 'Zone-Overlay-Opacity', value: '50%', usage: 'Floor plan zone fill (amber or orange at half opacity over cream)' },
  { name: 'Shadow-Opacity', value: '12%', usage: 'Specimen card and zone drop shadows' },
]

export const typeGroups: TypeGroup[] = [
  {
    name: 'Display — IBM Plex Serif',
    styles: [
      { name: 'Display / Title', token: '--text-display-title', weight: 'Bold', size: '80 / 88', sample: 'Before the Prompt' },
      { name: 'Display / Specimen Name', token: '--text-display-specimen', weight: 'Bold', size: '56 / 64', sample: 'WYSIWYG Editor' },
      { name: 'Display / Heading 1', token: '--text-display-h1', weight: 'Bold', size: '40 / 48', sample: 'The Evolution of Type' },
      { name: 'Display / Heading 2', token: '--text-display-h2', weight: 'Light', size: '32 / 40', sample: 'From Atoms to Pixels' },
    ],
  },
  {
    name: 'Body / UI — IBM Plex Sans',
    styles: [
      { name: 'Body / Default', token: '--text-body-default', weight: 'Regular', size: '24 / 36', sample: 'The quick brown fox jumps over the lazy dog.' },
      { name: 'Body / Small', token: '--text-body-small', weight: 'Regular', size: '20 / 28', sample: 'The quick brown fox jumps over the lazy dog.' },
      { name: 'UI / Button Label', token: '--text-ui-button', weight: 'Medium', size: '20 / 20', sample: 'COLLECT SPECIMEN', extra: 'text-transform: uppercase; letter-spacing: 0.08em' },
      { name: 'UI / Nav Label', token: '--text-ui-nav', weight: 'Medium', size: '16 / 20', sample: 'Floor Plan · Collection · About' },
      { name: 'UI / Caption', token: '--text-ui-caption', weight: 'Regular', size: '16 / 24', sample: 'Image credit: Letterform Archive, 2024' },
    ],
  },
  {
    name: 'Metadata — IBM Plex Mono',
    styles: [
      { name: 'Meta / Era Tag', token: '--text-meta-era', weight: 'Regular', size: '18 / 24', sample: 'MECHANICAL · c. 1450', extra: 'text-transform: uppercase; letter-spacing: 0.1em' },
      { name: 'Meta / Field Label', token: '--text-meta-field-label', weight: 'Regular', size: '14 / 20', sample: 'Medium, Dimensions, Weight' },
      { name: 'Meta / Field Value', token: '--text-meta-field-value', weight: 'Light', size: '14 / 20', sample: 'Cast iron, 280 × 420 mm, 12.4 kg' },
      { name: 'Meta / Progress', token: '--text-meta-progress', weight: 'Regular', size: '16 / 20', sample: '3 / 5 collected' },
    ],
  },
]

export const components: ComponentDef[] = [
  {
    name: 'Specimen Card',
    description: 'The primary content container — one per evolutionary stage. Feels like a pinned card on a museum wall.',
    variants: [
      { name: 'Default', spec: 'Surface-100 fill, 2px Ink-900 stroke, 3px offset drop shadow, era tag in upper-left' },
      { name: 'Collected', spec: 'Default + muted green (Collected-Green) check badge in upper-right corner' },
      { name: 'Locked', spec: 'Surface-500 fill, dashed Ink-900 stroke, Locked-Brown lock icon, no tap action' },
    ],
  },
  {
    name: 'Zone Overlay',
    description: 'Tappable regions on the floor plan map, one per exhibit room.',
    variants: [
      { name: 'Unvisited', spec: 'Amber-500 fill at Zone-Overlay-Opacity, 2px Ink-900 outline, drop shadow, room label centered' },
      { name: 'Visited', spec: 'Surface-400 fill at 60% opacity, 1px Gray-500 outline, muted label' },
      { name: 'Active / Pressed', spec: 'Orange-500 fill at 80% opacity, 2px Ink-900 outline, scale 0.97 feedback' },
    ],
  },
  {
    name: 'Button',
    description: 'Dark-stroke bordered, cream-filled controls with caps labels. Minimum 88px touch target.',
    variants: [
      { name: 'Primary Default', spec: 'Surface-100 fill, 2px Ink-900 stroke, label in UI / Button Label style' },
      { name: 'Primary Hover', spec: 'Ink-800 fill, Surface-100 text (inverted)' },
      { name: 'Primary Disabled', spec: 'Surface-500 fill, Gray-400 stroke and text, no tap action' },
      { name: 'Secondary Default', spec: 'No fill (transparent), 1px Gray-500 stroke, Gray-500 label' },
      { name: 'Secondary Hover', spec: 'Surface-400 fill, Ink-900 stroke and label' },
    ],
  },
  {
    name: 'Header',
    description: 'Persistent top navigation bar — minimal chrome so the specimen content stays in focus.',
    variants: [
      { name: 'Main Header', spec: 'Back arrow + exhibit title + floor map icon + collection counter; dotted leader lines' },
      { name: 'Slim Header', spec: 'Back/close icon only; used on artifact pages' },
    ],
  },
  {
    name: 'Era Tag',
    description: 'Inline label identifying a specimen\'s historical period.',
    variants: [
      { name: 'Default', spec: 'Surface-400 pill, Meta / Era Tag text style, e.g. "Mechanical · c. 1450"' },
      { name: 'Active', spec: 'Orange-500 pill, Surface-100 text, used when viewing that era' },
    ],
  },
  {
    name: 'Toast / Confirmation',
    description: 'Triggered when a visitor taps "Collect" on a specimen page.',
    variants: [
      { name: 'Collectible Confirmation', spec: 'Surface-100 fill, Ink-900 stroke, Collected-Green check icon, auto-dismiss 3s' },
    ],
  },
]

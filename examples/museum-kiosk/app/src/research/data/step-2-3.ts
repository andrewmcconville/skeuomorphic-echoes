import type { LabelValue } from './types/common'
import type { ScreenEntry, RoomEntry, CatalogGroup } from './types/step-2-3'

export const screens: ScreenEntry[] = [
  { name: 'Floor Plan Map (Home)', type: 'Home screen', notes: 'Entry point; always accessible via nav' },
  { name: 'Skeuomorph Room: WYSIWYG', type: 'Room', notes: 'Tap zone on floor plan map' },
  { name: 'Skeuomorph Room: Camera Shutter', type: 'Room', notes: 'Tap zone on floor plan map' },
  { name: 'Skeuomorph Room: Envelope', type: 'Room', notes: 'Tap zone on floor plan map' },
  { name: 'Skeuomorph Room: Hanging Up', type: 'Room', notes: 'Tap zone on floor plan map' },
  { name: 'Artifact (×20)', type: 'Detail screen', notes: 'Tap from skeuomorph room' },
  { name: 'Artifact Collection', type: 'List screen', notes: 'Accessible from home via nav icon' },
  { name: 'About', type: 'Info screen', notes: 'Accessible from home via nav icon' },
  { name: 'Glossary', type: 'Reference screen', notes: 'Accessible from home via nav icon' },
]

export const modals: ScreenEntry[] = [
  { name: 'Navigation drawer', type: 'Slide-out menu', notes: 'Hamburger/menu icon tap' },
  { name: 'Collectible confirmation', type: 'Popup/toast', notes: 'Collecting an evolutionary stage' },
  { name: 'Specimen detail expand', type: 'Modal overlay', notes: 'Tap "show more" on metadata' },
  { name: 'Inactivity reset prompt', type: 'Dialog', notes: 'Kiosk idle timeout' },
]

export const rooms: RoomEntry[] = [
  {
    name: 'WYSIWYG',
    stages: ['Google Docs', 'Adobe InDesign', 'Printing Press', 'Linotype Machine', 'Scrolls'],
  },
  {
    name: 'Camera Shutter',
    stages: ['Screenshot', 'Smartphone', 'Digital Camera', 'Film SLR', 'Box Camera'],
  },
  {
    name: 'Envelope',
    stages: ['Chat/DM', 'Email Client', 'Telegram', 'Paper Envelope', 'Wax-Sealed Letter'],
  },
  {
    name: 'Hanging Up',
    stages: ['Smartphone End Call', 'Flip Phone', 'Touch-Tone Phone', 'Rotary Phone', 'Candlestick Phone'],
  },
]

export const homeContent: LabelValue[] = [
  { label: 'Title', value: '"Before the Prompt" — anchors exhibit identity' },
  { label: 'Subtitle', value: 'One-line hook explaining the exhibit concept' },
  { label: 'Floor plan', value: 'Top-down layout of the four skeuomorph rooms; primary navigation surface' },
  { label: 'Skeuomorph room zones (×4)', value: 'Tappable regions with labels; 88px min touch targets' },
  { label: 'Zone states', value: 'Collected vs. uncollected differentiation' },
  { label: 'Collection icon', value: 'Shows artifacts collected out of total' },
  { label: 'About icon', value: 'Links to credits, sources, and project info' },
  { label: 'Progress', value: 'Overall completion across all four skeuomorph rooms' },
]

export const collectionContent: LabelValue[] = [
  { label: 'Title', value: '"Artifact Collection"' },
  { label: 'Navigation', value: 'Back arrow returns to floor plan' },
  { label: 'Artifact cards', value: 'Each collected artifact (e.g., Printing Press, Google Docs); thumbnail + name + era' },
  { label: 'Grouping', value: 'Artifacts grouped by skeuomorph room' },
  { label: 'Progress per room', value: 'e.g., "3 / 5 collected" beneath each room group' },
  { label: 'Locked state', value: 'Silhouette or placeholder for uncollected artifacts' },
]

export const aboutContent: LabelValue[] = [
  { label: 'Title', value: '"About" or exhibit title' },
  { label: 'Subheading', value: 'Brief descriptor of the exhibit\'s theme' },
  { label: 'Navigation', value: 'Back arrow to return to floor plan' },
  { label: 'Photo', value: 'Creator headshot or exhibit logo' },
  { label: 'Bio', value: 'Short paragraph about the designer/curator' },
  { label: 'Contact', value: 'Email or portfolio link for the creator' },
  { label: 'Overview', value: 'What the exhibit covers and why it exists' },
  { label: 'Sources', value: 'Works cited, image credits, tools used' },
]

export const glossaryContent: LabelValue[] = [
  { label: 'Title', value: '"Glossary"' },
  { label: 'Navigation', value: 'Back arrow to return to floor plan' },
  { label: 'Entries', value: 'typographic glyphs with origin, function, and presentation data' },
  { label: 'Entry fields', value: 'Character, name, aliases, era, etymology, original/modern function, status' },
  { label: 'Filtering', value: 'Table of contents linking to each glyph entry' },
]

export const roomLandingContent: LabelValue[] = [
  { label: 'Skeuomorph room title', value: 'Names the skeuomorph room (e.g., "WYSIWYG")' },
  { label: 'Description', value: '2–3 sentences on what physical object persists and where' },
  { label: 'Summary', value: 'One-line thesis connecting the original artifact to its digital echo' },
  { label: 'Navigation', value: 'Back to map and artifact collection' },
  { label: 'Stage cards', value: '4–5 per skeuomorph room; title + thumbnail + era tag; shows collected state' },
  { label: 'Progress', value: 'Visual bar showing skeuomorph room completion' },
  { label: 'Mini-map', value: 'Highlights which skeuomorph room the visitor is currently in' },
]

export const interiorCore: LabelValue[] = [
  { label: 'Specimen name', value: 'Display-size title of the artifact' },
  { label: 'Era tag', value: 'e.g., "Mechanical · c. 1450"' },
  { label: 'Date range', value: 'e.g., "c. 1450 – c. 1880"' },
  { label: 'Stage position', value: 'e.g., "3 of 6"; locates user in the evolutionary chain' },
  { label: 'Summary', value: '1–2 sentences describing the artifact' },
  { label: 'Hero image', value: 'Primary specimen illustration' },
  { label: 'Navigation', value: 'Previous / next / close / back to skeuomorph room' },
]

export const interiorCatalog: CatalogGroup[] = [
  { group: 'Physical', fields: ['Medium / Material', 'Dimensions', 'Weight', 'Scale indicator'] },
  { group: 'Mechanism', fields: ['Input method', 'Output', 'Key constraint', 'Innovation'] },
  { group: 'Cultural', fields: ['Geographic origin', 'Primary users', 'Cultural impact'] },
  { group: 'Lineage', fields: ['Preceded by', 'Succeeded by', 'Skeuomorphic echo', 'Ghost term'] },
  { group: 'Provenance', fields: ['Collection / Source', 'Image credit', 'Further reading'] },
]

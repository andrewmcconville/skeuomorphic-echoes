import type { LabelValue } from './types/common'

export const demographics: LabelValue[] = [
  { label: 'Age', value: '27–33' },
  { label: 'Location', value: 'Chicago / Milwaukee corridor' },
  { label: 'Education', value: 'MFA (completed within the last year)' },
  { label: 'Occupation', value: 'Independent designer/artist; freelance + residencies + short contracts' },
  { label: 'Income', value: 'Variable / project-based' },
  { label: 'Tech comfort', value: 'High (creative tools, prototyping, AR/interactive exhibits)' },
  { label: 'Device habits', value: 'iPhone daily; photographs labels/screens; saves links/notes immediately' },
  { label: 'Accessibility', value: 'Mild sensory overload in crowded galleries — prefers clear UI, low-friction flow' },
  { label: 'Schedule', value: 'Visits in 30–60 minute loops; wants a satisfying "complete one chain" option' },
]

export const interests: readonly string[] = [
  'Interface archaeology',
  'Design history',
  'Archives',
  'Sound objects',
  'Interaction design',
]

export const traits: readonly string[] = [
  'Curious',
  'Critical',
  'Aesthetic-driven',
  'Systems-minded',
  'Impatient with sloppy design',
]

export const brands: readonly string[] = [
  'Teenage Engineering',
  'MUJI',
  'Braun / Dieter Rams',
  'IKEA',
  'Apple (selectively)',
]

export const goals: readonly string[] = [
  'Discover the history behind familiar interface icons, sounds, and language.',
  'Save/collect references (artifacts, favorites, achievements) to revisit later.',
]

export const motivations: readonly string[] = [
  'Builds a personal archive of design references for inspiration, talks, and fun.',
  'Enjoys systems-thinking: timelines, taxonomies, tech trees, provenance.',
  'Loves minimal, engineered aesthetics and objects that feel like instruments.',
]

export const frustrations: readonly string[] = [
  'Over-explaining and academic walls of text that kill momentum.',
  'Confusing navigation or interactions that don\'t pay off.',
  'Visual clutter, weak hierarchy, inconsistent UI patterns.',
]

export const needs: readonly string[] = [
  'A crisp intro definition + immediate "Start exploring" action.',
  'Clear orientation at all times: where am I, what era is this, what\'s next.',
  'Skimmable content with optional depth (expand/collapse, "show more context").',
  'Progress feedback (timeline position, visited states, collection status).',
]

export interface StepEntry {
  id: string
  title: string
  to: string
}

export const steps: readonly StepEntry[] = [
  { id: '2.1', title: 'Project Overview', to: '/step/2.1' },
  { id: '2.2', title: 'Persona', to: '/step/2.2' },
  { id: '2.3', title: 'Sitemap & Content Inventory', to: '/step/2.3' },
  { id: '2.4', title: 'Happy Path & User Task', to: '/step/2.4' },
  { id: '2.5', title: 'Lo-fi Wireframe on Paper', to: '/step/2.5' },
  { id: '2.6', title: 'Lo-fi Wireframe in Figma', to: '/step/2.6' },
  { id: '2.7', title: 'Think-Aloud & Task Analysis', to: '/step/2.7' },
  { id: '2.8', title: 'Design System', to: '/step/2.8' },
  { id: '2.9', title: 'Hi-fi Home & Primary Skeuomorph', to: '/step/2.9' },
]

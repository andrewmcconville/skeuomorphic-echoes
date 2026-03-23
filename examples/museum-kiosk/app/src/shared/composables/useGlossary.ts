import { glossaryEntries, type SourcePart } from '@shared/data/glossary'

export function isCite(part: SourcePart): part is { cite: string } {
  return typeof part === 'object'
}

export function scrollToEntry(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export const statusLabel: Record<string, string> = {
  active: 'Active',
  vestigial: 'Vestigial',
  extinct: 'Extinct',
  repurposed: 'Repurposed',
}

export { glossaryEntries }

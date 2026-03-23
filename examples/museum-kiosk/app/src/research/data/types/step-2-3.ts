/** Screen or modal table row used in sitemap/content inventory */
export interface ScreenEntry {
  name: string
  type: string
  notes: string
}

/** Room with its evolutionary stages */
export interface RoomEntry {
  name: string
  stages: string[]
}

/** Catalog metadata group */
export interface CatalogGroup {
  group: string
  fields: string[]
}

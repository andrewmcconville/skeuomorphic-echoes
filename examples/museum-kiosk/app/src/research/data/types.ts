/** Reusable label-value pair for specs grids and demographic rows */
export interface LabelValue {
  label: string
  value: string
}

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

/** Inspiration site link */
export interface InspirationSite {
  name: string
  url: string
  note: string
}

/** Secondary skeuomorph mapping */
export interface SkeuomorphMapping {
  name: string
  maps: string
  description: string
}

/** Color swatch for design system */
export interface ColorSwatch {
  name: string
  var: string
  hex: string
  usage: string
}

/** Color group containing swatches */
export interface ColorGroup {
  name: string
  colors: ColorSwatch[]
}

/** Typography style sample */
export interface TypeStyle {
  name: string
  token: string
  weight: string
  size: string
  sample: string
  extra?: string
}

/** Typography group */
export interface TypeGroup {
  name: string
  styles: TypeStyle[]
}

/** Component variant specification */
export interface ComponentVariant {
  name: string
  spec: string
}

/** UI component definition */
export interface ComponentDef {
  name: string
  description: string
  variants: ComponentVariant[]
}

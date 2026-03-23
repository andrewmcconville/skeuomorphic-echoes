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

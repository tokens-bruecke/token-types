declare global {
  /**
   * NON TOKEN TYPES
   *
   * There are all non token types that are used for token generation.
   */

  export type BorderStyle =
    | 'solid'
    | 'dashed'
    | 'dotted'
    | 'double'
    | 'groove'
    | 'ridge'
    | 'outset'
    | 'inset'

  export type TokenDescriptionType = string

  export type TokenType =
    // simple token types
    | 'color'
    | 'dimension'
    | 'fontFamily'
    | 'fontWeight'
    | 'duration'
    | 'cubicBezier'
    | 'number'
    | 'shadow'
    | 'fontSize'
    | 'lineHeight'
    | 'letterSpacing'
    | 'strokeStyle'
    // composite token types
    | 'border'
    | 'transition'
    | 'gradient'
    | 'typography'
    // experemental token types
    | 'alias'
    | 'grid'
    | 'blur'
    // default JSON types
    | 'string'
    | 'boolean'
    | 'object'
    | 'array'
    | 'null'

  export type DimensionStringType = string | number

  export type DurationStringType = string

  export type GradientTokenType = 'linear' | 'radial' | 'angular' | 'conic'

  /**
   * TOKEN TYPES
   *
   * There are all simple token types.
   */

  export interface GenericTokenI {
    $type: TokenType
    $value: any
    $description?: string
    $extensions?: any
  }

  /**
   * Documentation: https://design-tokens.github.io/community-group/format/#color
   */

  export interface ColorTokenI extends GenericTokenI {
    $type: 'color'
    $value: string | object
  }

  /**
   * Documentation: https://design-tokens.github.io/community-group/format/#dimension
   */

  export interface DimensionTokenI extends GenericTokenI {
    $type: 'dimension'
    $value: DimensionStringType
  }

  /**
   * Documentation: https://design-tokens.github.io/community-group/format/#font-family
   */

  export interface FontFamilyTokenI extends GenericTokenI {
    $type: 'fontFamily'
    $value: string | string[] // Single font name or array of font names
  }

  /**
   * Documentation: https://design-tokens.github.io/community-group/format/#font-weight
   */

  export interface FontWeightTokenI extends GenericTokenI {
    $type: 'fontWeight'
    $value:
      | number
      | 'thin'
      | 'hairline'
      | 'extra-light'
      | 'ultra-light'
      | 'light'
      | 'normal'
      | 'regular'
      | 'book'
      | 'medium'
      | 'semi-bold'
      | 'demi-bold'
      | 'bold'
      | 'extra-bold'
      | 'ultra-bold'
      | 'black'
      | 'heavy'
      | 'extra-black'
      | 'ultra-black'
  }

  /**
   * Part of the composite token: https://design-tokens.github.io/community-group/format/#typography
   */

  export interface FontSizeTokenI extends GenericTokenI {
    $type: 'fontSize'
    $value: DimensionStringType
  }

  /**
   * Part of the composite token: https://design-tokens.github.io/community-group/format/#typography
   */

  export interface LineHeightTokenI extends GenericTokenI {
    $type: 'lineHeight'
    $value: DimensionStringType
  }

  /**
   * Part of the composite token: https://design-tokens.github.io/community-group/format/#typography
   */

  export interface LetterSpacingTokenI extends GenericTokenI {
    $type: 'letterSpacing'
    $value: DimensionStringType
  }

  /**
   * Documentation: https://design-tokens.github.io/community-group/format/#duration
   */

  export interface DurationTokenI extends GenericTokenI {
    $type: 'duration'
    $value: DurationStringType // Number followed by "ms" unit
  }

  /**
   * Documentation: https://design-tokens.github.io/community-group/format/#cubic-bezier
   */

  export interface CubicBezierTokenI extends GenericTokenI {
    $type: 'cubicBezier'
    $value: [number, number, number, number] // Array containing four numbers
  }

  /**
   * Documentation: https://design-tokens.github.io/community-group/format/#number
   */

  export interface NumberTokenI extends GenericTokenI {
    $type: 'number'
    $value: number
  }

  /**
   * COMPOSITE TOKENS
   *
   * Tokens that are consist of multiple simple tokens.
   */

  /**
   * Documentation: https://design-tokens.github.io/community-group/format/#stroke-style
   */

  export type StrokeStyleTokenValueType =
    | BorderStyle
    | {
        dashArray: (string | number)[]
        lineCap: 'round' | 'butt' | 'square'
        lineJoin: 'round' | 'bevel' | 'miter'
        miterLimit: number
        dashOffset: number
      }

  export interface StrokeStyleTokenI extends GenericTokenI {
    $type: 'strokeStyle'
    $value: StrokeStyleTokenValueType
  }

  /**
   * Documentation: https://design-tokens.github.io/community-group/format/#border
   */

  export type BorderTokenValueType = {
    color: string
    width: string
    style: StrokeStyleTokenI
  }

  export interface BorderTokenI extends GenericTokenI {
    $type: 'border'
    $value: BorderTokenValueType
  }

  /**
   * Documentation: https://design-tokens.github.io/community-group/format/#transition
   */

  export type TransitionTokenValueType = {
    duration: DurationTokenI | string
    delay: DurationTokenI | string
    timingFunction: CubicBezierTokenI | string
  }

  export interface TransitionTokenI extends GenericTokenI {
    $type: 'transition'
    $value: TransitionTokenValueType
  }

  /**
   * Documentation: https://design-tokens.github.io/community-group/format/#gradient
   */

  export type GradientTokenStopI = {
    color: ColorTokenI | string
    position: string
  }

  export type GradientTokenValueI = {
    type: GradientTokenType
    angle: string
    stops: GradientTokenStopI[]
  }

  export interface GradientTokenI extends GenericTokenI {
    $type: 'gradient'
    $value: GradientTokenValueI
  }

  /**
   * Documentation: https://design-tokens.github.io/community-group/format/#shadow
   * Issue: https://github.com/design-tokens/community-group/issues/100
   */

  export type ShadowTokenValueType = {
    inset: boolean // is still in discussion
    color: ColorTokenI | string
    offsetX: DimensionTokenI | string
    offsetY: DimensionTokenI | string
    blur: DimensionTokenI | string
    spread: DimensionTokenI | string
  }

  export interface ShadowTokenI extends GenericTokenI {
    $type: 'shadow'
    $value: ShadowTokenValueType
  }

  /**
   * Documentation: https://design-tokens.github.io/community-group/format/#typography
   */

  export type TypographyTokenValueType = {
    fontFamily: FontFamilyTokenI | string
    fontSize: FontSizeTokenI | string
    lineHeight: LineHeightTokenI | DimensionStringType
    letterSpacing: LetterSpacingTokenI | DimensionStringType
    fontWeight: FontWeightTokenI | DimensionStringType
  }

  export interface TypographyTokenI extends GenericTokenI {
    $type: 'typography'
    $value: TypographyTokenValueType
  }

  /**
   * EXPEREMENTAL TOKEN TYPES
   *
   * There are all experemental token types. Which are not officially in the spec.
   */

  /**
   * Alias token propoasal
   * issue: https://github.com/design-tokens/community-group/issues/214
   */

  export interface AliasTokenI extends GenericTokenI {
    $type: 'alias'
    $value: `{\${string}}` // Name of the token to alias
  }

  /**
   * Grid token propoasal
   */

  export type GridTokenValueType = {
    columnCount?: number
    columnGap?: DimensionStringType
    columnWidth?: DimensionStringType
    columnMargin?: DimensionStringType
    rowCount?: number
    rowGap?: DimensionStringType
    rowHeight?: DimensionStringType
    rowMargin?: DimensionStringType
  }

  export interface GridTokenI extends GenericTokenI {
    $type: 'grid'
    $value: GridTokenValueType
  }

  /**
   * Blur token propoasal
   */

  export type BlurTokenValueType = {
    role: 'layer' | 'background'
    blur: DimensionStringType
  }

  export interface BlurTokenI extends GenericTokenI {
    $type: 'blur'
    $value: BlurTokenValueType
  }
}

export {}

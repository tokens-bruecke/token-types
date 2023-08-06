/**
 * NON TOKEN TYPES
 *
 * There are all non token types that are used for token generation.
 */

declare type BorderStyle =
  | "solid"
  | "dashed"
  | "dotted"
  | "double"
  | "groove"
  | "ridge"
  | "outset"
  | "inset";

declare type TokenDescriptionType = string;

declare type TokenType =
  // simple token types
  | "color"
  | "dimension"
  | "fontFamily"
  | "fontWeight"
  | "duration"
  | "cubicBezier"
  | "number"
  | "shadow"
  | "fontSize"
  | "lineHeight"
  | "letterSpacing"
  | "strokeStyle"
  // composite token types
  | "border"
  | "transition"
  | "gradient"
  | "typography"
  // experemental token types
  | "alias"
  | "grid"
  | "blur"
  // default JSON types
  | "string"
  | "boolean"
  | "object"
  | "array"
  | "null";

declare type DimensionStringType = string | number;

declare type DurationStringType = string;

declare type GradientTokenType = "linear" | "radial" | "angular" | "conic";

/**
 * TOKEN TYPES
 *
 * There are all simple token types.
 */

declare interface GenericTokenI {
  $type: TokenType;
  $value: any;
  $description?: string;
  $extensions?: any;
}

/**
 * Documentation: https://design-tokens.github.io/community-group/format/#color
 */

declare interface ColorTokenI extends GenericTokenI {
  $type: "color";
  $value: string | object;
}

/**
 * Documentation: https://design-tokens.github.io/community-group/format/#dimension
 */

declare interface DimensionTokenI extends GenericTokenI {
  $type: "dimension";
  $value: DimensionStringType;
}

/**
 * Documentation: https://design-tokens.github.io/community-group/format/#font-family
 */

declare interface FontFamilyTokenI extends GenericTokenI {
  $type: "fontFamily";
  $value: string | string[]; // Single font name or array of font names
}

/**
 * Documentation: https://design-tokens.github.io/community-group/format/#font-weight
 */

declare interface FontWeightTokenI extends GenericTokenI {
  $type: "fontWeight";
  $value:
    | number
    | "thin"
    | "hairline"
    | "extra-light"
    | "ultra-light"
    | "light"
    | "normal"
    | "regular"
    | "book"
    | "medium"
    | "semi-bold"
    | "demi-bold"
    | "bold"
    | "extra-bold"
    | "ultra-bold"
    | "black"
    | "heavy"
    | "extra-black"
    | "ultra-black";
}

/**
 * Part of the composite token: https://design-tokens.github.io/community-group/format/#typography
 */

declare interface FontSizeTokenI extends GenericTokenI {
  $type: "fontSize";
  $value: DimensionStringType;
}

/**
 * Part of the composite token: https://design-tokens.github.io/community-group/format/#typography
 */

declare interface LineHeightTokenI extends GenericTokenI {
  $type: "lineHeight";
  $value: DimensionStringType;
}

/**
 * Part of the composite token: https://design-tokens.github.io/community-group/format/#typography
 */

declare interface LetterSpacingTokenI extends GenericTokenI {
  $type: "letterSpacing";
  $value: DimensionStringType;
}

/**
 * Documentation: https://design-tokens.github.io/community-group/format/#duration
 */

declare interface DurationTokenI extends GenericTokenI {
  $type: "duration";
  $value: DurationStringType; // Number followed by "ms" unit
}

/**
 * Documentation: https://design-tokens.github.io/community-group/format/#cubic-bezier
 */

declare interface CubicBezierTokenI extends GenericTokenI {
  $type: "cubicBezier";
  $value: [number, number, number, number]; // Array containing four numbers
}

/**
 * Documentation: https://design-tokens.github.io/community-group/format/#number
 */

declare interface NumberTokenI extends GenericTokenI {
  $type: "number";
  $value: number;
}

/**
 * COMPOSITE TOKENS
 *
 * Tokens that are consist of multiple simple tokens.
 */

/**
 * Documentation: https://design-tokens.github.io/community-group/format/#stroke-style
 */

declare interface StrokeStyleTokenI extends GenericTokenI {
  $type: "strokeStyle";
  $value:
    | BorderStyle
    | {
        dashArray: (string | number)[];
        lineCap: "round" | "butt" | "square";
        lineJoin: "round" | "bevel" | "miter";
        miterLimit: number;
        dashOffset: number;
      };
}

/**
 * Documentation: https://design-tokens.github.io/community-group/format/#border
 */

declare interface BorderTokenI extends GenericTokenI {
  $type: "border";
  $value: {
    color: string;
    width: string;
    style: StrokeStyleTokenI;
  };
}

/**
 * Documentation: https://design-tokens.github.io/community-group/format/#transition
 */

declare interface TransitionTokenI extends GenericTokenI {
  $type: "transition";
  $value: {
    duration: DurationTokenI | string;
    delay: DurationTokenI | string;
    timingFunction: CubicBezierTokenI | string;
  };
}

/**
 * Documentation: https://design-tokens.github.io/community-group/format/#gradient
 */

declare interface GradientTokenStopI {
  color: ColorTokenI | string;
  position: string;
}

declare interface GradientTokenValueI {
  type: GradientTokenType;
  angle: string;
  stops: GradientTokenStopI[];
}

declare interface GradientTokenI extends GenericTokenI {
  $type: "gradient";
  $value: GradientTokenValueI;
}

/**
 * Documentation: https://design-tokens.github.io/community-group/format/#shadow
 * Issue: https://github.com/design-tokens/community-group/issues/100
 */

declare interface ShadowTokenI extends GenericTokenI {
  $type: "shadow";
  $value: {
    inset: boolean; // is still in discussion
    color: ColorTokenI | string;
    offsetX: DimensionTokenI | string;
    offsetY: DimensionTokenI | string;
    blur: DimensionTokenI | string;
    spread: DimensionTokenI | string;
  };
}

/**
 * Documentation: https://design-tokens.github.io/community-group/format/#typography
 */

declare interface TypographyTokenI extends GenericTokenI {
  $type: "typography";
  $value: {
    fontFamily: FontFamilyTokenI | string;
    fontSize: FontSizeTokenI | string;
    lineHeight: LineHeightTokenI | DimensionStringType;
    letterSpacing: LetterSpacingTokenI | DimensionStringType;
    fontWeight: FontWeightTokenI | DimensionStringType;
  };
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

declare interface AliasTokenI extends GenericTokenI {
  $type: "alias";
  $value: `{\${string}}`; // Name of the token to alias
}

/**
 * Grid token propoasal
 */

declare interface GridTokenI extends GenericTokenI {
  $type: "grid";
  $value: {
    columnCount?: number;
    columnGap?: DimensionStringType;
    columnWidth?: DimensionStringType;
    columnMargin?: DimensionStringType;
    rowCount?: number;
    rowGap?: DimensionStringType;
    rowHeight?: DimensionStringType;
    rowMargin?: DimensionStringType;
  };
}

/**
 * Blur token propoasal
 */

declare interface BlurTokenI extends GenericTokenI {
  $type: "blur";
  $value: {
    role: "layer" | "background";
    blur: DimensionStringType;
  };
}

export {};

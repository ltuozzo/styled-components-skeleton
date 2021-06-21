/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line no-shadow
export enum SpacingType {
  XXS = 2,
  XS = 3,
  S = 4,
  M = 5,
  L = 7,
  XL = 10,
  XXL = 15,
}

export const gapUnit = 0.5;

export const spacing = (type: SpacingType | number): string => `${gapUnit * type}rem`;

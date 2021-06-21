export const color = {
  // TODO add colors
  white: '#fff',
  black: '#000',
} as const;

/* styled-components theme */
export const theme = {
  color,
} as const;

export type ThemeType = typeof theme;
export type ColorType = ThemeType['color'][keyof ThemeType['color']];

// Overwrite styled-components DefaultTheme
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}

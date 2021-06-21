import type { MediaQuery } from '../config/mediaQuery';

export const respondTo = (query: MediaQuery): string => `@media only screen and ${query}`;

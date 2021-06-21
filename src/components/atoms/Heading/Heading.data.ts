import type { ReactNode } from 'react';
import type { FontWeight } from '../../../styles/config/variables';

// eslint-disable-next-line no-shadow
export enum HeadingType {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export type HeadingProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: string | React.ComponentType<any>;
  type?: HeadingType;
  fontWeight?: FontWeight;
  children: ReactNode;
};

import type { ReactNode } from 'react';
import type { FontWeight, TextTransform } from '../../../styles/config/variables';

// eslint-disable-next-line no-shadow
export enum ParagraphType {
  Normal = 'normal',
  Title = 'title',
  Subtitle = 'subtitle',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
}

export type ParagraphProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: string | React.ComponentType<any>;
  type?: ParagraphType;
  fontWeight?: FontWeight;
  textTransform?: TextTransform;
  children: ReactNode;
  color?: string;
};

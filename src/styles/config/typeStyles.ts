import { css, FlattenSimpleInterpolation } from 'styled-components';
import { HeadingType } from '../../components/atoms/Heading/Heading.data';
import { ParagraphType } from '../../components/atoms/Paragraph/Paragraph.data';
import { fluidType } from '../helpers/fluidType';
import { FontWeight } from './variables';
import { MediaQuery } from './mediaQuery';
import { respondTo } from '../helpers/respondTo';

type TypeStyles = ParagraphType | HeadingType;

export const typeStyle: Record<TypeStyles, FlattenSimpleInterpolation> = {
  [HeadingType.H1]: css`
    ${fluidType(130, 320)};
    font-weight: ${FontWeight.Medium};
    font-weight: ${FontWeight.Medium};
    line-height: 1;
  `,
  [HeadingType.H2]: css`
    ${fluidType(100, 220)};
    font-weight: ${FontWeight.Medium};
    font-weight: ${FontWeight.Medium};
    line-height: 0.95;
  `,
  [HeadingType.H3]: css`
    ${fluidType(68, 90)};
    font-weight: ${FontWeight.Medium};
    font-weight: ${FontWeight.Medium};
    line-height: 1.1;
  `,
  [HeadingType.H4]: css`
    ${fluidType(26, 60)};
    font-weight: ${FontWeight.Medium};
    font-weight: ${FontWeight.Medium};
    line-height: 1.1;
  `,
  [HeadingType.H5]: css`
    ${fluidType(24, 46)};
    font-weight: ${FontWeight.Medium};
    font-weight: ${FontWeight.Medium};
    line-height: 1.2;
  `,
  [HeadingType.H6]: css`
    ${fluidType(22, 28)};
    font-weight: ${FontWeight.Medium};
    line-height: 1.2;
  `,
  [ParagraphType.Normal]: css`
    ${fluidType(15, 22)};
    font-weight: ${FontWeight.Medium};
    font-weight: ${FontWeight.Medium};
    line-height: 1.2;
  `,
  [ParagraphType.Title]: css`
    ${fluidType(26, 100)};
    line-height: 1.2;
    ${respondTo(MediaQuery.MEDIUM)} {
      line-height: 0.95;
    }
  `,
  [ParagraphType.Subtitle]: css`
    ${fluidType(15, 60)};
    line-height: 1.2;
  `,
  [ParagraphType.H4]: css`
    ${fluidType(26, 60)};
    line-height: 1.2;
  `,
} as const;

export type TypeStyleType = typeof typeStyle;

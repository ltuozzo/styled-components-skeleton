import styled from 'styled-components';
import { typeStyle } from '../../../styles/config/typeStyles';
import type { FontWeight, TextTransform } from '../../../styles/config/variables';
import type { ParagraphType } from './Paragraph.data';

export type StyledParagraphProps = {
  $type: ParagraphType;
  $fontWeight?: FontWeight;
  $textTransform?: TextTransform;
  $color?: string;
};

export const StyledParagraph = styled.p<StyledParagraphProps>`
  ${({ $type }) => typeStyle[$type]};
  ${({ $fontWeight }) => $fontWeight && `font-weight:  ${$fontWeight}`};
  ${({ $textTransform }) => $textTransform && `text-transform:  ${$textTransform}`};
  ${({ $color }) => $color && `color:  ${$color}`};
`;

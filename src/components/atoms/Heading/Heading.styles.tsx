import styled from 'styled-components';
import type { FontWeight } from '../../../styles/config/variables';
import type { HeadingType } from './Heading.data';
import { typeStyle } from '../../../styles/config/typeStyles';

export type StyledHeadingProps = {
  $type: HeadingType;
  $fontWeight?: FontWeight;
};

export const StyledHeading = styled.h1<StyledHeadingProps>`
  ${({ $type }) => typeStyle[$type]};
  ${({ $fontWeight }) => $fontWeight && `font-weight:  ${$fontWeight}`};
`;

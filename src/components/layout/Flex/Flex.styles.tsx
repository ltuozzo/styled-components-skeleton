import styled from 'styled-components';
import type { FlexAlign, FlexDirection, FlexGrowShrink, FlexJustify, FlexWrap } from './Flex.data';

type FlexType = {
  $flexDirection: FlexDirection;
  $justifyContent: FlexJustify;
  $alignItems: FlexAlign;
  $flexWrap: FlexWrap;
  $flexGrow: FlexGrowShrink;
  $flexShrink: FlexGrowShrink;
};

export const StyledFlex = styled.div<FlexType>`
  display: flex;
  ${({ $flexDirection }) => $flexDirection && `flex-direction: ${$flexDirection};`}
  ${({ $justifyContent }) => $justifyContent && `justify-content: ${$justifyContent};`}
	${({ $alignItems }) => $alignItems && `align-items: ${$alignItems};`}
	${({ $flexWrap }) => $flexWrap && `flex-wrap: ${$flexWrap};`}
  ${({ $flexGrow }) => $flexGrow && `flex-grow: ${$flexGrow};`}
  ${({ $flexShrink }) => $flexShrink && `flex-shrink: ${$flexShrink};`}
`;

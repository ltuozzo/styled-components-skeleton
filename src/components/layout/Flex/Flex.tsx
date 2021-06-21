import { ElementType, forwardRef, ReactNode } from 'react';
import type { FlexJustify, FlexDirection, FlexAlign, FlexWrap, FlexGrowShrink } from './Flex.data';
import { StyledFlex } from './Flex.styles';

export type FlexProps = {
  children: ReactNode;
  flexDirection?: FlexDirection;
  justifyContent?: FlexJustify;
  alignItems?: FlexAlign;
  flexWrap?: FlexWrap;
  flexGrow?: FlexGrowShrink;
  flexShrink?: FlexGrowShrink;
  elementType?: ElementType;
};

const Flex = forwardRef<Element, FlexProps>(
  (
    {
      flexDirection,
      justifyContent,
      alignItems,
      flexWrap,
      flexGrow,
      flexShrink,
      children,
      elementType = 'div',
      ...props
    },
    ref,
  ) => (
    <StyledFlex
      ref={ref}
      as={elementType}
      $flexDirection={flexDirection}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $flexWrap={flexWrap}
      $flexGrow={flexGrow}
      $flexShrink={flexShrink}
      {...props}
    >
      {children}
    </StyledFlex>
  ),
);

export default Flex;

import { forwardRef } from 'react';
import { StyledHeading } from './Heading.styles';
import { HeadingProps, HeadingType } from './Heading.data';

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ type = HeadingType.H1, as = type, fontWeight, children, ...props }, ref) => (
    <StyledHeading ref={ref} as={as} $type={type} $fontWeight={fontWeight} {...props}>
      {children}
    </StyledHeading>
  ),
);

import { forwardRef } from 'react';
import { ParagraphProps, ParagraphType } from './Paragraph.data';
import { StyledParagraph } from './Paragraph.styles';

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  (
    { type = ParagraphType.Normal, as = 'p', fontWeight, textTransform, color, children, ...props },
    ref,
  ) => (
    <StyledParagraph
      ref={ref}
      as={as}
      $type={type}
      $fontWeight={fontWeight}
      $textTransform={textTransform}
      $color={color}
      {...props}
    >
      {children}
    </StyledParagraph>
  ),
);

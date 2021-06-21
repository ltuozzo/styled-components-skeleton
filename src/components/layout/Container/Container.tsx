import type { ReactNode } from 'react';
import { StyledContainer } from './Container.styles';

type ContainerProps = {
  children: ReactNode;
};
export default function Container({ children, ...props }: ContainerProps): JSX.Element {
  return <StyledContainer {...props}>{children}</StyledContainer>;
}

import { css, FlattenSimpleInterpolation } from 'styled-components';

const calculateRatio = ([width, height]: readonly [number, number]) => (height / width) * 100;

export const aspectRatio = (
  // eslint-disable-next-line no-shadow
  aspectRatio: readonly [number, number],
  position = 'relative',
): FlattenSimpleInterpolation => css`
  position: relative;

  &::before {
    content: '';
    display: block;
    position: ${position};
    padding-top: ${calculateRatio(aspectRatio)}%;
  }
`;

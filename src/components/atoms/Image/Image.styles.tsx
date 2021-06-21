import { position, size } from 'polished';
import styled from 'styled-components';
import { aspectRatio } from '../../../styles/helpers/aspectRatio';
import type { AspectRatio, FitType } from './Image';

export const StyledImage = styled.div<{
  $aspectRatio?: AspectRatio;
  $hasFit: boolean;
}>`
  ${size('auto', '100%')};
  ${({ $hasFit }) => $hasFit && position('absolute', 0)};
  ${({ $aspectRatio }) => $aspectRatio && aspectRatio($aspectRatio)};
`;

export const StyledPicture = styled.picture<{ $fullView: boolean }>`
  ${({ $fullView }) => $fullView && position('absolute', 0)};
`;

export const StyledImageElement = styled.img<{ $fit?: FitType }>`
  width: 100%;
  ${({ $fit }) => $fit && `height: 100%; object-fit: ${$fit};`}
`;

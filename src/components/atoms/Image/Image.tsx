import type { ComponentPropsWithoutRef } from 'react';
import { StyledImage, StyledImageElement, StyledPicture } from './Image.styles';

export type AspectRatio = [number, number];
export type FitType = 'cover' | 'contain';

type ImageSource = {
  media: string;
  srcset: string;
};

const FALLBACK_SOURCE: ReadonlyArray<ImageSource> = [];

export type ImageProps = {
  alt: string;
  src: string;
  fit?: FitType;
  source?: ReadonlyArray<ImageSource>;
  aspectRatio?: AspectRatio;
} & ComponentPropsWithoutRef<'img'>;

export default function Image({
  alt,
  src,
  aspectRatio,
  fit,
  source = FALLBACK_SOURCE,
  ...props
}: ImageProps): JSX.Element {
  return (
    <StyledImage $aspectRatio={aspectRatio} $hasFit={!!fit} {...props}>
      <StyledPicture $fullView={!!aspectRatio || !!fit}>
        {source.map(({ media, srcset }) => (
          <source key={srcset} media={media} srcSet={srcset} />
        ))}

        <StyledImageElement src={src} alt={alt} $fit={fit} />
      </StyledPicture>
    </StyledImage>
  );
}

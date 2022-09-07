// COMPONENTS
import * as Style from './styles';

// TYPES
import { ImageProps } from './utils/types';

export const Image = ({
  img,
  radius = '100%',
  size = '48px',
  width,
  height,
  alt,
}: ImageProps) => (
  <Style.ImgHolder radius={radius} size={size} width={width} height={height}>
    <img src={img} alt={alt ?? ''} />
  </Style.ImgHolder>
);

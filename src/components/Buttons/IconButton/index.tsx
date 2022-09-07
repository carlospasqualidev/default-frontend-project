// COMPONENTS
import { theme } from '../../../styles/theme';
import { ContainerButton } from './styles';
import { Image } from '../../Image';

// TYPES
import { IIconButton } from './utils/types';

export const IconButton = ({
  labelPos = 'left',
  opacity = '1',
  label,
  icon,
  gap = theme.size.xxsm,
  color = theme.color.gray4,
  selected,
  onClick,
  className,
  hideLabelOnMedia,
  fontWeight,
  size = '24px;',
}: IIconButton) => (
  <ContainerButton
    hideLabelOnMedia={hideLabelOnMedia}
    labelPos={labelPos}
    selected={selected}
    opacity={opacity}
    gap={gap}
    color={color}
    fontWeight={fontWeight}
    onClick={() => {
      onClick();
    }}
  >
    <Image img={icon} size={size} radius="0px" />
    {label && <p className={className}>{label}</p>}
  </ContainerButton>
);

// COMPONENTS
import * as Style from './styles';

// TYPES
import { ITag } from './utils/types';

export const Tag = ({ isInvalid }: ITag) => (
  <Style.TagContainer isInvalid={isInvalid}>
    <p className="p7">{isInvalid ? 'Bloqueado' : 'Ativo'}</p>
  </Style.TagContainer>
);

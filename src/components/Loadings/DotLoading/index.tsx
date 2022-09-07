import { theme } from '../../../styles/theme';
import { LoadingContainer, LoadingWrapper } from './styles';

interface IDotLoading {
  label?: string;
  bgColor?: string;
}

export const DotLoading = ({
  label,
  bgColor = theme.color.primary,
}: IDotLoading) => (
  <LoadingContainer bgColor={bgColor}>
    <LoadingWrapper>
      <h4>{label}</h4>
      <div>
        <div className="dot-pulse" />
      </div>
    </LoadingWrapper>
  </LoadingContainer>
);

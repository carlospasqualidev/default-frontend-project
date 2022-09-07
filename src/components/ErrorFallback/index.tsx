import * as Style from './styles';
import { icon } from '../../assets/icons/index';

export const ErrorFallback = () => (
  <Style.Background>
    {/* //CHANGE HERE */}
    <img src={icon.logo} alt="" />
    <Style.Content>
      <h2>Oops! Encontramos um problema e nossa equipe foi notificada.</h2>
    </Style.Content>
    <button
      type="button"
      onClick={() => {
        window.location.reload();
      }}
    >
      Tentar novamente
    </button>
  </Style.Background>
);

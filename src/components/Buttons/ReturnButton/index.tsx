// LIBS
import { useNavigate } from 'react-router-dom';

// COMPONENTS
import { Background } from './styles';
import { icon } from '../../../assets/icons/index';
import { Image } from '../../Image';

export const ReturnButton = ({ path }: { path?: string }) => {
  const navigate = useNavigate();

  return (
    <Background
      onClick={() => {
        if (path) {
          navigate(path);
        } else {
          navigate(-1);
        }
      }}
    >
      <Image img={icon.leftArrow} size="16px" />
      <h6>Voltar</h6>
    </Background>
  );
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

// COMPONENTS
import { Image } from '../Image';
import { Input } from '../Form/Input';

// TYPES
import { IUploader } from './utils/types';

// COMPONENTS
import * as Style from './styles';
import { icon } from '../../assets/icons/index';

export const Uploader = ({
  label,
  error,
  register,
  defaultImage,
  setNewImage,
}: IUploader) => {
  const [image, setImage] = useState<any>(defaultImage);
  return (
    <Style.BackgroundSection>
      <h6>{label}</h6>
      <Style.Container>
        <Style.ImageWrapper>
          <img src={image ? icon.editWithBg : icon.plusWithBg} alt="" />
          <Image img={image ?? icon.imageBackplate} size="80px" />
          <Input
            type="file"
            error={error}
            {...register}
            onChange={(evt) => {
              if (evt.target.files?.length) {
                const newImage = URL.createObjectURL(evt.target.files[0]);
                setImage(newImage);

                if (setNewImage) {
                  setNewImage(newImage);
                }
              }
            }}
            style={{
              position: 'absolute',
              cursor: 'pointer',
              height: '80px',
              width: '80px',
              top: 20,
              borderRadius: '100%',
              opacity: 0,
            }}
          />
        </Style.ImageWrapper>
        <p className="p5">JPG ou PNG. Tamanho máximo de 5 MB.</p>
      </Style.Container>
    </Style.BackgroundSection>
  );
};

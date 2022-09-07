/* eslint-disable @typescript-eslint/no-explicit-any */
// LIBS
import { useState } from 'react';

// COMPONENTS
import * as Style from './styles';
// ICONS
import { icon } from '../../assets/icons/index';

// TYPES
import { theme } from '../../styles/theme';
import { IconButton } from '../Buttons/IconButton';

export const ModalComponent = () => {
  const [modalIsOpen, setOpenModal] = useState<boolean>(false);
  const [animation, setAnimation] = useState<boolean>(false);

  const toggleModal = () => {
    if (modalIsOpen) {
      setAnimation(false);
      setTimeout(() => {
        setOpenModal(!modalIsOpen);
      }, 250);
    } else {
      setAnimation(true);
      setOpenModal(true);
    }
  };

  const Modal = ({
    children,
    title,
    size = 'md',
  }: {
    children: JSX.Element;
    title: string;
    size?: 'md' | 'lg';
  }) => (
    <Style.Background
      id="background"
      animation={animation}
      onMouseDown={(evt: any) => {
        if (evt.target.id === 'background') toggleModal();
      }}
    >
      <Style.Body animation={animation} size={size}>
        <Style.Header>
          <h2>{title}</h2>
          <IconButton
            icon={icon.x}
            color={theme.color.primary}
            onClick={() => {
              toggleModal();
            }}
          />
        </Style.Header>
        {children}
      </Style.Body>
    </Style.Background>
  );

  return {
    Modal,
    modalIsOpen,
    toggleModal,
  };
};

// LIBS
import { useState } from 'react';

// COMPONENTS
import { ArrowContainer, Popover } from 'react-tiny-popover';
import { IconButton } from '../IconButton';
import * as Style from './styles';
import { Button } from '../Button';

// TYPES
import { IPopoverButton } from './utils/types';

// THEMES
import { theme } from '../../../styles/theme';

// ICONS
import { icon } from '../../../assets/icons';

export const PopoverButton = ({
  type = 'Button',
  buttonIcon = '',
  buttonIconSize = '24px',
  iconButtonColor,
  bgColor,
  label,
  message = {
    title: 'Title',
    content: 'Message Title',
    contentColor: theme.color.gray4,
  },
  actionButtonBgColor,
  actionButtonClick,
  borderless,
  loading,
}: IPopoverButton) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);

  function getArrowStyle(position: string | undefined, arrowSize: number) {
    switch (position) {
      case 'top':
        return {
          bottom: 3,
          borderTop: `${arrowSize}px solid white`,
          zIndex: 1,
        };
      default:
        return {
          right: 3,
          borderLeft: `${arrowSize}px solid white`,
          zIndex: 1,
        };
    }
  }

  const togglePopOver = () => {
    if (isPopoverOpen) {
      setAnimate(false);
      setTimeout(() => {
        setIsPopoverOpen(false);
      }, 250);
    } else {
      setAnimate(true);
      setIsPopoverOpen(true);
    }
  };

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={['left', 'top']}
      padding={1}
      onClickOutside={() => {
        setAnimate(false);
        setTimeout(() => {
          setIsPopoverOpen(false);
        }, 250);
      }}
      // eslint-disable-next-line react/no-unstable-nested-components
      content={({ position, childRect, popoverRect }) => {
        const arrowSize = 10;
        return (
          <Style.AnimationDiv animation={animate}>
            <ArrowContainer
              position={position}
              childRect={childRect}
              popoverRect={popoverRect}
              arrowColor={theme.color.gray3}
              arrowSize={arrowSize}
            >
              <ArrowContainer
                position={position}
                childRect={childRect}
                popoverRect={popoverRect}
                arrowSize={arrowSize}
                arrowColor={theme.color.gray3}
                style={{
                  paddingLeft: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  paddingRight: 0,
                }}
                arrowStyle={getArrowStyle(position, arrowSize)}
              >
                <Style.PopoverBackground>
                  <Style.PopoverBody
                    contentColor={message.contentColor ?? theme.color.gray4}
                  >
                    <h2>
                      {label}
                      <IconButton
                        onClick={() => {
                          setAnimate(false);
                          setTimeout(() => {
                            setIsPopoverOpen(false);
                          }, 250);
                        }}
                        icon={icon.x}
                      />
                    </h2>
                    <Style.Hr />
                    <p className="p4">{message.title}</p>
                    <p className="p3">{message.content}</p>
                    <Style.Hr />
                    <Style.ActionButtonContainer>
                      <Button
                        label={label}
                        bgColor={actionButtonBgColor}
                        onClick={() => {
                          togglePopOver();
                          actionButtonClick();
                        }}
                      />
                    </Style.ActionButtonContainer>
                  </Style.PopoverBody>
                </Style.PopoverBackground>
              </ArrowContainer>
            </ArrowContainer>
          </Style.AnimationDiv>
        );
      }}
    >
      <Style.ButtonContainer>
        {type === 'Button' && (
          <Button
            borderless={borderless}
            bgColor={bgColor}
            loading={loading}
            label={label}
            onClick={togglePopOver}
          />
        )}

        {type === 'IconButton' && (
          <IconButton
            hideLabelOnMedia
            label={label}
            color={iconButtonColor}
            icon={buttonIcon}
            size={buttonIconSize}
            onClick={togglePopOver}
          />
        )}
      </Style.ButtonContainer>
    </Popover>
  );
};

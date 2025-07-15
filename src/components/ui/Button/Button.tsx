import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { color } from '@tokens';
import { Icon, Text } from '@components';

import {
  buttonBackgroundColor,
  buttonHeight,
  buttonPadding,
  buttonTextColor,
  textVariant,
} from './Button.constants.ts';

import type { ButtonProps, ButtonSize, ButtonTypes } from './Button.types.ts';

const Button = ({
  size = 'medium',
  type = 'contained',
  round = false,
  text,
  leftIcon,
  rightIcon,
  style,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      size={size}
      buttonType={type}
      round={round}
      iconOnly={text?.length === 0}
      style={style}
      onClick={onClick}
      {...props}
    >
      {leftIcon && <Icon name={leftIcon} variant='Stroke_R_28' />}
      {text && <Text variant={textVariant[size]}>{text}</Text>}
      {rightIcon && <Icon name={rightIcon} variant='Stroke_R_28' />}
    </StyledButton>
  );
};

export default Button;

const makeButtonStyle = (
  size: ButtonSize,
  buttonType: ButtonTypes,
  round: boolean,
  iconOnly: boolean,
) => css`
  border-radius: ${round ? '16px' : '8px'};
  border: ${buttonType == 'outlined'
    ? `1px solid ${color.primary['500']}`
    : 'none'};
  height: ${buttonHeight[size]};
  width: ${iconOnly ? buttonHeight[size] : 'auto'};
  background-color: ${buttonBackgroundColor[buttonType]['default']};
  color: ${buttonTextColor[buttonType]['default']};
  padding: 0 ${buttonPadding[size]};

  &:hover {
    background-color: ${buttonBackgroundColor[buttonType]['hover']};
    color: ${buttonTextColor[buttonType]['hover']};
  }
  &:active {
    background-color: ${buttonBackgroundColor[buttonType]['pressed']};
    color: ${buttonTextColor[buttonType]['pressed']};
  }
`;

const StyledButton = styled.button<{
  size: ButtonSize;
  buttonType: ButtonTypes;
  round: boolean;
  iconOnly: boolean;
}>`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  ${({ size, buttonType, round, iconOnly }) =>
    makeButtonStyle(size, buttonType, round, iconOnly)}
`;

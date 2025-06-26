import styled from '@emotion/styled';

import { getIconStyles } from './Icon.styles';

import type { IconProps } from './Icon.types';

interface StyledIconProps {
  variant: IconProps['variant'];
}

const Icon = ({
  name,
  variant,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}: IconProps) => (
  <StyledIcon
    variant={variant}
    role={ariaLabel ? 'img' : undefined}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden ?? (!ariaLabel ? true : undefined)}
    {...props}
  >
    {name}
  </StyledIcon>
);

export default Icon;

const StyledIcon = styled.span<StyledIconProps>`
  ${({ variant }) => getIconStyles(variant)}
`;

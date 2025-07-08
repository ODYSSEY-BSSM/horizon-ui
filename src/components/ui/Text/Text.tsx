import styled from '@emotion/styled';

import { getTextStyles } from './Text.styles';

import type { TextProps, TextVariant } from './Text.types';

interface StyledTextProps {
  variant: TextVariant;
  ellipsis: boolean;
  color?: string;
  width?: string | number;
  textAlign?: string;
  whiteSpace?: string;
}

const Text = ({
  children,
  variant,
  color,
  width = 'auto',
  textAlign = 'left',
  ellipsis = false,
  whiteSpace = 'nowrap',
  tag = 'p',
  ...props
}: TextProps) => {
  return (
    <StyledText
      as={tag}
      variant={variant}
      ellipsis={ellipsis}
      color={color}
      width={width}
      textAlign={textAlign}
      whiteSpace={whiteSpace}
      {...props}
    >
      {children}
    </StyledText>
  );
};

export default Text;

const StyledText = styled.p<StyledTextProps>`
  ${({ variant }) => getTextStyles(variant)}
  ${({ ellipsis }) =>
    ellipsis &&
    `
				display: inline-block;
				overflow: hidden;
				text-overflow: ellipsis;
			`}
  color: ${({ color }) => color};
  width: ${({ width }) => width};
  text-align: ${({ textAlign }) => textAlign};
  white-space: ${({ whiteSpace }) => whiteSpace};
`;

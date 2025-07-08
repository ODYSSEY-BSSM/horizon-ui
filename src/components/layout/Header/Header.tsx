import styled from '@emotion/styled';

import { color } from '@tokens';
import { Button, Text } from '@components';

interface HeaderProps {
  title: string;
  button?: {
    text?: string;
    leftIcon?: string;
  };
}

const Header = ({ title, button }: HeaderProps) => {
  return (
    <StyledHeader>
      <Text variant='T_SB_16'>{title}</Text>
      {button && <Button type='outlined' size='small' {...button} />}
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  padding: 0 40px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${color.grayscale['100']};
`;

import styled from '@emotion/styled';

import { color } from '@tokens';
import { Text } from '@components';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <StyledHeader>
      <Text variant='T_SB_16'>{title}</Text>
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
  border-bottom: 1px solid ${color.grayscale['100']};
`;

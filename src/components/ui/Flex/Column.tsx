import styled from '@emotion/styled';

import { FlexProps } from './Flex.types.ts';

const Column = ({
  children,
  gap,
  width,
  height,
  padding,
  alignItems,
  ...props
}: FlexProps) => {
  return (
    <StyledColumn style={{ gap, width, height, padding, alignItems, ...props }}>
      {children}
    </StyledColumn>
  );
};

export default Column;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

import styled from '@emotion/styled';

import { FlexProps } from './Flex.types.ts';

const Row = ({
  children,
  gap,
  width,
  height,
  padding,
  alignItems,
  justifyContent,
  style,
}: FlexProps) => {
  return (
    <StyledRow
      style={{
        gap,
        width,
        height,
        padding,
        alignItems,
        justifyContent,
        ...style,
      }}
    >
      {children}
    </StyledRow>
  );
};

export default Row;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

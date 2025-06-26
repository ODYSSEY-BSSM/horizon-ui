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
  ...props
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
        ...props.props,
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

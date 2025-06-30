import { useMemo } from 'react';
import styled from '@emotion/styled';

import { color } from '@tokens';
import { Icon, Row, Text } from '@components';

interface RoadmapsSidebarItemProps {
  itemName: string;
  icon: string;
  to: string;
  selected?: boolean;
  level?: number;
}

const RoadmapsSidebarItem = ({
  itemName,
  icon,
  to,
  selected = false,
  level = 1,
}: RoadmapsSidebarItemProps) => {
  const verticalLines = useMemo(() => {
    return Array.from({ length: level - 1 }, (_, index) => (
      <VerticalLine key={index} />
    ));
  }, [level]);

  return (
    <StyledRoadmapsSidebarItem selected={selected} to={to}>
      <Row height='100%'>
        {verticalLines}
      </Row>
      <Row gap='4px' alignItems='center'>
        <Icon
          name={icon}
          variant='Stroke_L_24'
          color={selected ? color.black : color.grayscale['500']}
        />
        <Text variant='B_M_14' ellipsis>{itemName}</Text>
      </Row>
    </StyledRoadmapsSidebarItem>
  );
};

export default RoadmapsSidebarItem;

interface StyledRoadmapsSidebarItemProps {
  selected: boolean;
  to: string;
}

const StyledRoadmapsSidebarItem = styled.div<StyledRoadmapsSidebarItemProps>`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  color: ${({ selected }) => (selected ? color.black : color.grayscale['500'])};
  background-color: ${({ selected }) =>
    selected ? color.primary['100'] : color.white};
  
  &:hover {
    background-color: ${({ selected }) =>
      selected ? color.primary['100'] : color.grayscale['100']};
  }
`;

const VerticalLine = styled.div`
  width: 32px;
  border-right: 1px solid ${color.grayscale['400']};
  height: 100%;
`;

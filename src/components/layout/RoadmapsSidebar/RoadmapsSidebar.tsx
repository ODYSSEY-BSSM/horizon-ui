import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { color } from '@tokens';
import { Column, Icon, Row, Text } from '@components';
import { Directory, GetDirectoryRes } from '@/types/directory/remote.ts';

import RoadmapsSidebarItem from './RoadmapsSidebarItem/RoadmapsSidebarItem.tsx';
import { mockData } from './RoadmapsSidebar.mockData.ts';

interface DirectoryItemProps {
  directory: Directory;
  level: number;
  handleItemFocus: (itemId: number) => void;
  focusedItem: number | null;
}

const DirectoryItem = ({
  directory,
  level,
  handleItemFocus,
  focusedItem,
}: DirectoryItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <RoadmapsSidebarItem
        itemName={directory.name}
        icon={isOpen ? 'folder_open' : 'folder'}
        level={level}
        onClick={() => handleItemFocus(directory.id)}
        onDoubleClick={() => setIsOpen(!isOpen)}
        selected={focusedItem === directory.id}
      />
      {isOpen && (
        <>
          {directory.directories.map(childDirectory => (
            <DirectoryItem
              key={`directory-${childDirectory.id}`}
              directory={childDirectory}
              level={level + 1}
              handleItemFocus={handleItemFocus}
              focusedItem={focusedItem}
            />
          ))}
          {directory.roadmaps.map(roadmap => (
            <RoadmapsSidebarItem
              key={`roadmap-${roadmap.id}`}
              itemName={roadmap.title}
              icon='graph_1'
              level={level + 1}
              to={`/roadmaps/${roadmap.id}`}
              onClick={() => handleItemFocus(roadmap.id)}
              selected={focusedItem === roadmap.id}
            />
          ))}
        </>
      )}
    </>
  );
};

const RoadmapsSidebar = () => {
  const [items, setItems] = useState<GetDirectoryRes | null>(null);
  const [focusedItem, setFocusedItem] = useState<number | null>(null);

  useEffect(() => {
    setItems(mockData);
  }, []);

  const handleItemFocus = (itemId: number) => {
    setFocusedItem(itemId);
  };

  return (
    <StyledRoadmapsSidebar>
      <Row
        width='100%'
        padding='6px 6px 6px 20px'
        justifyContent='space-between'
        alignItems='center'
      >
        <Text variant='B_M_12' color={color.grayscale['400']}>
          내 로드맵
        </Text>
        <Icon
          name='add'
          variant='Stroke_L_24'
          color={color.grayscale['400']}
          style={{ cursor: 'pointer' }}
        />
      </Row>
      <StyledRoadmapsSidebarItemWrapper>
        <Column width='100%'>
          {items?.directories.map(directory => (
            <DirectoryItem
              key={`directory-${directory.id}`}
              directory={directory}
              level={1}
              handleItemFocus={handleItemFocus}
              focusedItem={focusedItem}
            />
          ))}
          {items?.roadmaps.map(roadmap => (
            <RoadmapsSidebarItem
              key={`roadmap-${roadmap.id}`}
              itemName={roadmap.title}
              icon='graph_1'
              level={1}
              to={`/roadmaps/${roadmap.id}`}
              onClick={() => handleItemFocus(roadmap.id)}
              selected={focusedItem === roadmap.id}
            />
          ))}
        </Column>
      </StyledRoadmapsSidebarItemWrapper>
    </StyledRoadmapsSidebar>
  );
};

export default RoadmapsSidebar;

const StyledRoadmapsSidebar = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${color.white};
  min-width: 0;
`;

const StyledRoadmapsSidebarItemWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;

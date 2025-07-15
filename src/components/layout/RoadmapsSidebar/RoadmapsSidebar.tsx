import { memo, useCallback, useMemo, useState } from 'react';
import styled from '@emotion/styled';

import { color } from '@tokens';
import { Column, Row, Text } from '@components';
import { Directory, GetDirectoryRes } from '@/types/directory/remote.ts';

import RoadmapsSidebarItem from './RoadmapsSidebarItem/RoadmapsSidebarItem.tsx';

interface DirectoryItemProps {
  directory: Directory;
  level: number;
  handleItemFocus: (itemId: number) => void;
  focusedItem: number | null;
}

const DirectoryItem = memo(
  ({ directory, level, handleItemFocus, focusedItem }: DirectoryItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = useCallback(() => {
      handleItemFocus(directory.id);
    }, [handleItemFocus, directory.id]);

    const handleDoubleClick = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen]);

    const childDirectories = useMemo(() => {
      return directory.directories.map(childDirectory => (
        <DirectoryItem
          key={`directory-${childDirectory.id}`}
          directory={childDirectory}
          level={level + 1}
          handleItemFocus={handleItemFocus}
          focusedItem={focusedItem}
        />
      ));
    }, [directory.directories, level, handleItemFocus, focusedItem]);

    const roadmapItems = useMemo(() => {
      return directory.roadmaps.map(roadmap => (
        <RoadmapsSidebarItem
          key={`roadmap-${roadmap.id}`}
          itemName={roadmap.title}
          icon='graph_1'
          level={level + 1}
          to={`/roadmaps?id=${roadmap.id}`}
          onClick={() => handleItemFocus(roadmap.id)}
          selected={focusedItem === roadmap.id}
        />
      ));
    }, [directory.roadmaps, level, handleItemFocus, focusedItem]);

    return (
      <>
        <RoadmapsSidebarItem
          itemName={directory.name}
          icon={isOpen ? 'folder_open' : 'folder'}
          level={level}
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
          selected={focusedItem === directory.id}
        />
        {isOpen && (
          <>
            {childDirectories}
            {roadmapItems}
          </>
        )}
      </>
    );
  },
);

interface RoadmapsSidebarProps {
  data: GetDirectoryRes;
}

const RoadmapsSidebar = ({ data }: RoadmapsSidebarProps) => {
  const [focusedItem, setFocusedItem] = useState<number | null>(null);

  const handleItemFocus = useCallback((itemId: number) => {
    setFocusedItem(itemId);
  }, []);

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
      </Row>
      <StyledRoadmapsSidebarItemWrapper>
        <Column width='100%'>
          {useMemo(
            () =>
              data.directories.map(directory => (
                <DirectoryItem
                  key={`directory-${directory.id}`}
                  directory={directory}
                  level={1}
                  handleItemFocus={handleItemFocus}
                  focusedItem={focusedItem}
                />
              )),
            [data.directories, handleItemFocus, focusedItem],
          )}
          {useMemo(
            () =>
              data.roadmaps.map(roadmap => (
                <RoadmapsSidebarItem
                  key={`roadmap-${roadmap.id}`}
                  itemName={roadmap.title}
                  icon='graph_1'
                  level={1}
                  to={`/roadmaps?id=${roadmap.id}`}
                  onClick={() => handleItemFocus(roadmap.id)}
                  selected={focusedItem === roadmap.id}
                />
              )),
            [data.roadmaps, handleItemFocus, focusedItem],
          )}
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
  border-right: 1px solid ${color.grayscale['100']};
`;

const StyledRoadmapsSidebarItemWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;

import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { color } from '@tokens';
import { Column, Icon, Row, Text } from '@components';
import { GetDirectoryRes } from '@/types/directory/remote.ts';

import RoadmapsSidebarItem from './RoadmapsSidebarItem/RoadmapsSidebarItem.tsx';
import { mockData } from './RoadmapsSidebar.mockData.ts';

interface DirectoryItemProps {
  directory: GetDirectoryRes;
  level: number;
}

const DirectoryItem = ({ directory, level }: DirectoryItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <RoadmapsSidebarItem
        itemName={directory.name}
        icon={isOpen ? 'folder_open' : 'folder'}
        level={level}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <>
          {directory.childDirectories.map((childDirectory, index) => (
            <DirectoryItem
              key={`${childDirectory.name}-${index}`}
              directory={childDirectory}
              level={level + 1}
            />
          ))}
          {directory.roadmaps.map(roadmap => (
            <RoadmapsSidebarItem
              key={roadmap.id}
              itemName={roadmap.title}
              icon='graph_1'
              level={level + 1}
              to={`/roadmaps/${roadmap.id}`}
            />
          ))}
        </>
      )}
    </>
  );
};

const RoadmapsSidebar = () => {
  const [directories, setDirectories] = useState<GetDirectoryRes[]>([]);

  useEffect(() => {
    setDirectories(mockData);
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
        <Icon name='add' variant='Stroke_L_24' color={color.grayscale['400']} />
      </Row>
      <StyledRoadmapsSidebarItemWrapper>
        <Column width='100%'>
          {directories.map((directory, index) => (
            <DirectoryItem
              key={`${directory.name}-${index}`}
              directory={directory}
              level={1}
            />
          ))}
        </Column>
      </StyledRoadmapsSidebarItemWrapper>
    </StyledRoadmapsSidebar>
  );
};

export default RoadmapsSidebar;

const StyledRoadmapsSidebar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${color.white};
`;

const StyledRoadmapsSidebarItemWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;

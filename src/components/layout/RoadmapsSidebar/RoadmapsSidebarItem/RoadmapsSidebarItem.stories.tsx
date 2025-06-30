import RoadmapsSidebarItem from './RoadmapsSidebarItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RoadmapsSidebarItem> = {
  title: 'Components/Layout/RoadmapsSidebarItem',
  component: RoadmapsSidebarItem,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '로드맵 사이드바 아이템 컴포넌트입니다. 계층 구조를 시각적으로 표현하며, 선택/비선택 상태를 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    itemName: {
      description: '표시할 텍스트 내용',
      control: 'text',
    },
    icon: {
      description: '아이콘 이름',
      control: 'text',
    },
    to: {
      description: '링크 경로',
      control: 'text',
    },
    selected: {
      description: '선택 상태 여부',
      control: 'boolean',
    },
    level: {
      description: '계층 레벨 (1부터 시작)',
      control: {
        type: 'range',
        min: 1,
        max: 5,
        step: 1,
      },
    },
  },
  args: {
    itemName: '로드맵 아이템',
    icon: 'folder',
    to: '/roadmap',
    selected: false,
    level: 1,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    itemName: '프론트엔드 로드맵',
    icon: 'folder',
    to: '/frontend',
  },
};

// 선택된 상태
export const Selected: Story = {
  args: {
    itemName: '현재 선택된 항목',
    icon: 'folder_open',
    to: '/current',
    selected: true,
  },
};

// 아이콘 없음
export const WithoutIcon: Story = {
  args: {
    itemName: '아이콘이 없는 항목',
    icon: '',
    to: '/no-icon',
  },
};

// 다양한 레벨
export const Level1: Story = {
  args: {
    itemName: '레벨 1 (루트)',
    icon: 'folder',
    to: '/level1',
    level: 1,
  },
};

export const Level2: Story = {
  args: {
    itemName: '레벨 2 (1뎁스)',
    icon: 'folder',
    to: '/level2',
    level: 2,
  },
};

export const Level3: Story = {
  args: {
    itemName: '레벨 3 (2뎁스)',
    icon: 'folder',
    to: '/level3',
    level: 3,
  },
};

export const Level4: Story = {
  args: {
    itemName: '레벨 4 (3뎁스)',
    icon: 'folder',
    to: '/level4',
    level: 4,
  },
};

export const Level5: Story = {
  args: {
    itemName: '레벨 5 (4뎁스)',
    icon: 'folder',
    to: '/level5',
    level: 5,
  },
};

// 긴 텍스트
export const LongText: Story = {
  args: {
    itemName:
      '매우 긴 텍스트가 들어갔을 때의 동작을 확인하기 위한 스토리입니다',
    icon: 'folder',
    to: '/long-text',
    level: 2,
  },
};

// 다양한 아이콘들
export const DifferentIcons: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <RoadmapsSidebarItem icon='home' to='/home' itemName='홈' />
      <RoadmapsSidebarItem
        icon='folder'
        to='/folder'
        level={2}
        itemName='폴더'
      />
      <RoadmapsSidebarItem icon='file' to='/file' level={3} itemName='파일' />
      <RoadmapsSidebarItem
        icon='code'
        to='/code'
        level={3}
        itemName='코드'
        selected
      />
      <RoadmapsSidebarItem
        icon='settings'
        to='/settings'
        level={2}
        itemName='설정'
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 아이콘을 사용한 예시입니다.',
      },
    },
  },
};

// 계층 구조 예시
export const HierarchyExample: Story = {
  render: () => (
    <div
      style={{
        width: '350px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
      }}
    >
      <RoadmapsSidebarItem
        icon='folder_open'
        to='/frontend'
        selected
        level={1}
        itemName='프론트엔드 개발'
      />
      <RoadmapsSidebarItem
        icon='folder'
        to='/frontend/basic'
        level={2}
        itemName='프론트엔드 개발'
      />
      <RoadmapsSidebarItem
        icon='graph_1'
        to='/frontend/basic/html'
        level={3}
        itemName='HTML'
      />
      <RoadmapsSidebarItem
        icon='graph_1'
        to='/frontend/basic/css'
        level={3}
        itemName='CSS'
      />
      <RoadmapsSidebarItem
        icon='graph_1'
        to='/frontend/basic/js'
        level={3}
        itemName='JavaScript'
      />
      <RoadmapsSidebarItem
        icon='folder'
        to='/frontend/framework'
        level={2}
        itemName='프레임워크'
      />
      <RoadmapsSidebarItem
        icon='graph_1'
        to='/frontend/framework/react'
        level={3}
        itemName='React'
      />
      <RoadmapsSidebarItem
        icon='file'
        to='/frontend/framework/vue'
        level={3}
        itemName='Vue.js'
      />
      <RoadmapsSidebarItem
        icon='file'
        to='/frontend/framework/angular'
        level={3}
        itemName='Angular'
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '실제 로드맵에서 사용될 수 있는 계층 구조의 예시입니다.',
      },
    },
  },
};

// 상태별 비교
export const StateComparison: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <div style={{ marginBottom: '16px' }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>
          비선택 상태
        </h4>
        <RoadmapsSidebarItem
          icon='folder'
          to='/inactive'
          itemName='비선택 아이템'
        />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>
          선택 상태
        </h4>
        <RoadmapsSidebarItem
          icon='folder_open'
          to='/active'
          selected
          itemName='선택된 아이템'
        />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>
          아이콘 없음
        </h4>
        <RoadmapsSidebarItem
          icon=''
          to='/no-icon'
          itemName='아이콘 없는 아이템'
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '컴포넌트의 다양한 상태를 한 번에 비교할 수 있습니다.',
      },
    },
  },
};

// 반응형 테스트
export const ResponsiveTest: Story = {
  render: () => (
    <div>
      <div
        style={{
          width: '200px',
          marginBottom: '20px',
          border: '1px solid #ddd',
          padding: '10px',
        }}
      >
        <h4 style={{ margin: '0 0 10px 0', fontSize: '12px' }}>
          좁은 너비 (200px)
        </h4>
        <RoadmapsSidebarItem
          icon='folder'
          to='/narrow'
          level={3}
          itemName='좁은 공간에서의 표시'
        />
      </div>
      <div
        style={{ width: '400px', border: '1px solid #ddd', padding: '10px' }}
      >
        <h4 style={{ margin: '0 0 10px 0', fontSize: '12px' }}>
          넓은 너비 (400px)
        </h4>
        <RoadmapsSidebarItem
          icon='folder'
          to='/wide'
          level={3}
          itemName='넓은 공간에서의 표시'
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 너비에서의 컴포넌트 동작을 확인할 수 있습니다.',
      },
    },
  },
};

// 성능 테스트 (많은 아이템)
export const PerformanceTest: Story = {
  render: () => (
    <div
      style={{
        width: '300px',
        height: '400px',
        overflow: 'auto',
        border: '1px solid #ddd',
      }}
    >
      {Array.from({ length: 50 }, (_, index) => (
        <RoadmapsSidebarItem
          key={index}
          icon={index % 3 === 0 ? 'folder' : 'file'}
          to={`/item-${index}`}
          level={Math.floor(index / 10) + 1}
          selected={index === 25}
          itemName={`아이템 ${index + 1}`}
        />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '많은 수의 아이템이 렌더링될 때의 성능을 테스트할 수 있습니다.',
      },
    },
  },
};

// 호버 효과 테스트
export const HoverTest: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <div style={{ marginBottom: '10px' }}>
        <p style={{ fontSize: '12px', color: '#666', margin: '0 0 8px 0' }}>
          각 아이템에 마우스를 올려보세요
        </p>
        <RoadmapsSidebarItem
          icon='folder'
          to='/hover1'
          itemName='호버 테스트 1'
        />
        <RoadmapsSidebarItem
          icon='file'
          to='/hover2'
          level={2}
          itemName='호버 테스트 2'
        />
        <RoadmapsSidebarItem
          icon='code'
          to='/hover3'
          level={3}
          itemName='호버 테스트 3'
          selected
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '호버 효과를 테스트할 수 있습니다.',
      },
    },
  },
};

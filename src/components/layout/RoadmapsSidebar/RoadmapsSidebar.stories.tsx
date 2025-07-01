import RoadmapsSidebar from './RoadmapsSidebar.tsx';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RoadmapsSidebar> = {
  title: 'Components/Layout/RoadmapsSidebar',
  component: RoadmapsSidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '로드맵 사이드바 컴포넌트입니다. "내 로드맵" 헤더와 추가 버튼을 포함한 사이드바 레이아웃을 제공합니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '기본 로드맵 사이드바입니다. "내 로드맵" 텍스트와 추가 버튼을 포함합니다.',
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ height: '100vh', display: 'flex' }}>
        <div
          style={{
            width: '300px',
            borderRight: '1px solid #e0e0e0',
            display: 'flex',
          }}
        >
          <div
            style={{
              width: '100px',
              backgroundColor: 'yellow',
              borderRight: '1px solid #e0e0e0',
              height: '100%',
            }}
          ></div>
          <Story />
        </div>
        <div style={{ flex: 1, padding: '24px', backgroundColor: '#f8f9fa' }}>
          <h2 style={{ margin: 0, color: '#666' }}>메인 컨텐츠 영역</h2>
          <p style={{ color: '#888', marginTop: '8px' }}>
            사이드바와 함께 표시되는 영역입니다.
          </p>
        </div>
      </div>
    ),
  ],
};

// 다양한 높이에서의 테스트
export const DifferentHeights: Story = {
  decorators: [
    Story => (
      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <div>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>
            높이 300px
          </h4>
          <div
            style={{
              width: '250px',
              height: '300px',
              border: '1px solid #e0e0e0',
            }}
          >
            <Story />
          </div>
        </div>
        <div>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>
            높이 500px
          </h4>
          <div
            style={{
              width: '250px',
              height: '500px',
              border: '1px solid #e0e0e0',
            }}
          >
            <Story />
          </div>
        </div>
        <div>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>
            높이 200px
          </h4>
          <div
            style={{
              width: '250px',
              height: '200px',
              border: '1px solid #e0e0e0',
            }}
          >
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story:
          '다양한 높이에서 사이드바가 어떻게 동작하는지 확인할 수 있습니다.',
      },
    },
  },
};

// 다양한 너비에서의 테스트
export const DifferentWidths: Story = {
  decorators: [
    Story => (
      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <div>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>
            너비 200px
          </h4>
          <div
            style={{
              width: '200px',
              height: '400px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
            }}
          >
            <Story />
          </div>
        </div>
        <div>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>
            너비 300px
          </h4>
          <div
            style={{
              width: '300px',
              height: '400px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
            }}
          >
            <Story />
          </div>
        </div>
        <div>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>
            너비 400px
          </h4>
          <div
            style={{
              width: '400px',
              height: '400px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
            }}
          >
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: '다양한 너비에서 사이드바가 어떻게 보이는지 확인할 수 있습니다.',
      },
    },
  },
};

// 다크 테마 시뮬레이션
export const DarkThemeSimulation: Story = {
  decorators: [
    Story => (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#1a1a1a',
          minHeight: '100vh',
        }}
      >
        <h4
          style={{
            margin: '0 0 10px 0',
            fontSize: '14px',
            color: '#ffffff',
          }}
        >
          다크 테마 시뮬레이션
        </h4>
        <div
          style={{
            width: '300px',
            height: '500px',
            backgroundColor: '#2d2d2d',
            border: '1px solid #404040',
            borderRadius: '8px',
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          '다크 테마 환경에서 사이드바가 어떻게 보이는지 시뮬레이션합니다.',
      },
    },
  },
};

// 접근성 테스트
export const AccessibilityTest: Story = {
  decorators: [
    Story => (
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#333' }}>
            접근성 테스트
          </h4>
          <p style={{ fontSize: '14px', color: '#666', margin: '0 0 16px 0' }}>
            키보드 네비게이션을 테스트해보세요:
          </p>
          <ul style={{ fontSize: '12px', color: '#888', paddingLeft: '20px' }}>
            <li>Tab 키로 요소 간 이동</li>
            <li>Enter 또는 Space 키로 버튼 활성화</li>
            <li>화면 읽기 도구 호환성 확인</li>
          </ul>
        </div>
        <div
          style={{
            width: '300px',
            height: '400px',
            border: '2px solid #007acc',
            borderRadius: '8px',
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: '키보드 네비게이션과 스크린 리더 접근성을 테스트할 수 있습니다.',
      },
    },
  },
};

// 상호작용 테스트
export const InteractionTest: Story = {
  decorators: [
    Story => (
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#333' }}>
            상호작용 테스트
          </h4>
          <p style={{ fontSize: '14px', color: '#666', margin: '0 0 16px 0' }}>
            다음 상호작용을 테스트해보세요:
          </p>
          <ul style={{ fontSize: '12px', color: '#888', paddingLeft: '20px' }}>
            <li>추가 버튼 클릭 (+ 아이콘)</li>
            <li>버튼 호버 효과</li>
            <li>포커스 상태 확인</li>
          </ul>
        </div>
        <div
          style={{
            width: '300px',
            height: '400px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: '사용자 상호작용 요소들을 테스트할 수 있습니다.',
      },
    },
  },
};

// RTL (Right-to-Left) 테스트
export const RTLTest: Story = {
  decorators: [
    Story => (
      <div style={{ padding: '20px', direction: 'rtl' }}>
        <h4
          style={{
            margin: '0 0 10px 0',
            fontSize: '14px',
            color: '#666',
            textAlign: 'right',
          }}
        >
          RTL (오른쪽에서 왼쪽) 레이아웃 테스트
        </h4>
        <div
          style={{
            width: '300px',
            height: '400px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            marginLeft: 'auto',
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'RTL (Right-to-Left) 레이아웃에서의 사이드바 동작을 확인합니다.',
      },
    },
  },
};

// 성능 테스트
export const PerformanceTest: Story = {
  decorators: [
    Story => {
      const startTime = performance.now();

      return (
        <div style={{ padding: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <h4
              style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#333' }}
            >
              성능 테스트
            </h4>
            <p style={{ fontSize: '12px', color: '#888', margin: 0 }}>
              렌더링 시간: {(performance.now() - startTime).toFixed(2)}ms
            </p>
          </div>
          <div
            style={{
              width: '300px',
              height: '400px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
            }}
          >
            <Story />
          </div>
        </div>
      );
    },
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: '컴포넌트의 렌더링 성능을 측정합니다.',
      },
    },
  },
};

// 스타일 커스터마이징 예시
export const CustomStyling: Story = {
  decorators: [
    Story => (
      <div style={{ padding: '20px' }}>
        <h4 style={{ margin: '0 0 20px 0', fontSize: '16px', color: '#333' }}>
          스타일 커스터마이징 예시
        </h4>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <h5
              style={{ margin: '0 0 10px 0', fontSize: '12px', color: '#666' }}
            >
              기본 스타일
            </h5>
            <div
              style={{
                width: '250px',
                height: '300px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
              }}
            >
              <Story />
            </div>
          </div>
          <div>
            <h5
              style={{ margin: '0 0 10px 0', fontSize: '12px', color: '#666' }}
            >
              커스텀 배경색
            </h5>
            <div
              style={{
                width: '250px',
                height: '300px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                backgroundColor: '#f0f8ff',
              }}
            >
              <Story />
            </div>
          </div>
          <div>
            <h5
              style={{ margin: '0 0 10px 0', fontSize: '12px', color: '#666' }}
            >
              그림자 효과
            </h5>
            <div
              style={{
                width: '250px',
                height: '300px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
            >
              <Story />
            </div>
          </div>
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: '다양한 스타일 커스터마이징 옵션을 보여줍니다.',
      },
    },
  },
};

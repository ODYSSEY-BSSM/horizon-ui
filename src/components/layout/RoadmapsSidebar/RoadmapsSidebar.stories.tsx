import RoadmapsSidebar from './RoadmapsSidebar';

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

// ===== 경로 기반 스토리들 =====

// 루트 레벨 - 모든 디렉토리가 닫힌 상태
export const RootLevel: Story = {
  parameters: {
    docs: {
      description: {
        story: '루트 레벨',
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ padding: '20px' }}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#333' }}>
          루트 레벨 (경로: /)
        </h4>
        <p style={{ fontSize: '14px', color: '#666', margin: '0 0 16px 0' }}>
          최상위 디렉토리들: 프론트엔드 개발, 백엔드 개발, 데이터베이스, DevOps,
          개인 프로젝트
        </p>
        <div
          style={{
            width: '300px',
            height: '500px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
};

// 1단계 깊이 - 프론트엔드 개발 디렉토리 열린 상태
export const FrontendPathExpanded: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '프론트엔드 개발 디렉토리가 열린 상태입니다. (경로: /프론트엔드 개발)',
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ padding: '20px' }}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#333' }}>
          프론트엔드 개발 경로 (경로: /프론트엔드 개발)
        </h4>
        <p style={{ fontSize: '14px', color: '#666', margin: '0 0 16px 0' }}>
          하위 디렉토리: React 생태계, JavaScript 심화 <br />
          직접 로드맵: 프론트엔드 개발자 로드맵, 웹 접근성 가이드
        </p>
        <div
          style={{
            width: '300px',
            height: '500px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
};

// 2단계 깊이 - React 생태계 디렉토리 열린 상태
export const ReactEcosystemPath: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'React 생태계 디렉토리가 열린 상태입니다. (경로: /프론트엔드 개발/React 생태계)',
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ padding: '20px' }}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#333' }}>
          React 생태계 경로 (경로: /프론트엔드 개발/React 생태계)
        </h4>
        <p style={{ fontSize: '14px', color: '#666', margin: '0 0 16px 0' }}>
          로드맵: React Hooks 마스터하기, React 상태관리 완전정복
        </p>
        <div
          style={{
            width: '300px',
            height: '500px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
};

// 3단계 깊이 - DevOps > 클라우드 서비스 > AWS 경로
export const DeepNestedPath: Story = {
  parameters: {
    docs: {
      description: {
        story: '3단계 깊이의 경로입니다. (경로: /DevOps/클라우드 서비스/AWS)',
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ padding: '20px' }}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#333' }}>
          깊은 중첩 경로 (경로: /DevOps/클라우드 서비스/AWS)
        </h4>
        <p style={{ fontSize: '14px', color: '#666', margin: '0 0 16px 0' }}>
          최대 깊이 예시: AWS 기초 서비스, AWS 보안 모범사례
        </p>
        <div
          style={{
            width: '300px',
            height: '500px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
};

// 경로 비교 - 여러 경로 동시 표시
export const PathComparison: Story = {
  parameters: {
    docs: {
      description: {
        story: '다양한 경로 깊이를 비교해서 보여줍니다.',
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ padding: '20px' }}>
        <h4 style={{ margin: '0 0 20px 0', fontSize: '16px', color: '#333' }}>
          경로 깊이 비교
        </h4>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <h5
              style={{ margin: '0 0 10px 0', fontSize: '12px', color: '#666' }}
            >
              루트 레벨 (/)
            </h5>
            <div
              style={{
                width: '250px',
                height: '400px',
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
              1단계 (/프론트엔드 개발)
            </h5>
            <div
              style={{
                width: '250px',
                height: '400px',
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
              3단계 (/DevOps/클라우드/AWS)
            </h5>
            <div
              style={{
                width: '250px',
                height: '400px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
              }}
            >
              <Story />
            </div>
          </div>
        </div>
      </div>
    ),
  ],
};

// 빈 디렉토리 경로
export const EmptyDirectoryPath: Story = {
  parameters: {
    docs: {
      description: {
        story: '하위 디렉토리나 로드맵이 없는 빈 디렉토리 경로입니다.',
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ padding: '20px' }}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#333' }}>
          빈 디렉토리 경로
        </h4>
        <p style={{ fontSize: '14px', color: '#666', margin: '0 0 16px 0' }}>
          하위 디렉토리는 없지만 로드맵만 있는 경우: 데이터베이스 디렉토리
        </p>
        <div
          style={{
            width: '300px',
            height: '500px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
};

// 경로 탐색 시뮬레이션
export const PathNavigationSimulation: Story = {
  parameters: {
    docs: {
      description: {
        story: '사용자가 경로를 탐색하는 과정을 시뮬레이션합니다.',
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ padding: '20px' }}>
        <h4 style={{ margin: '0 0 20px 0', fontSize: '16px', color: '#333' }}>
          경로 탐색 시뮬레이션
        </h4>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <h5
              style={{ margin: '0 0 10px 0', fontSize: '12px', color: '#666' }}
            >
              단계 1: 루트에서 시작
            </h5>
            <div
              style={{
                width: '200px',
                height: '300px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
              }}
            >
              <Story />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                fontSize: '24px',
                color: '#666',
                padding: '0 10px',
              }}
            >
              →
            </div>
          </div>
          <div>
            <h5
              style={{ margin: '0 0 10px 0', fontSize: '12px', color: '#666' }}
            >
              단계 2: 디렉토리 확장
            </h5>
            <div
              style={{
                width: '200px',
                height: '300px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
              }}
            >
              <Story />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                fontSize: '24px',
                color: '#666',
                padding: '0 10px',
              }}
            >
              →
            </div>
          </div>
          <div>
            <h5
              style={{ margin: '0 0 10px 0', fontSize: '12px', color: '#666' }}
            >
              단계 3: 하위 디렉토리 접근
            </h5>
            <div
              style={{
                width: '200px',
                height: '300px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
              }}
            >
              <Story />
            </div>
          </div>
        </div>
      </div>
    ),
  ],
};

// 경로 브레드크럼 시뮬레이션
export const PathBreadcrumbSimulation: Story = {
  parameters: {
    docs: {
      description: {
        story: '현재 경로를 브레드크럼으로 표시하는 개념을 시뮬레이션합니다.',
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ padding: '20px' }}>
        <h4 style={{ margin: '0 0 20px 0', fontSize: '16px', color: '#333' }}>
          경로 브레드크럼 시뮬레이션
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <div
              style={{
                backgroundColor: '#f8f9fa',
                padding: '8px 12px',
                borderRadius: '4px',
                fontSize: '12px',
                color: '#666',
                marginBottom: '10px',
              }}
            >
              현재 경로: / (루트)
            </div>
            <div
              style={{
                width: '300px',
                height: '200px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
              }}
            >
              <Story />
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundColor: '#f8f9fa',
                padding: '8px 12px',
                borderRadius: '4px',
                fontSize: '12px',
                color: '#666',
                marginBottom: '10px',
              }}
            >
              현재 경로: / → 프론트엔드 개발
            </div>
            <div
              style={{
                width: '300px',
                height: '200px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
              }}
            >
              <Story />
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundColor: '#f8f9fa',
                padding: '8px 12px',
                borderRadius: '4px',
                fontSize: '12px',
                color: '#666',
                marginBottom: '10px',
              }}
            >
              현재 경로: / → 프론트엔드 개발 → React 생태계
            </div>
            <div
              style={{
                width: '300px',
                height: '200px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
              }}
            >
              <Story />
            </div>
          </div>
        </div>
      </div>
    ),
  ],
};

// 경로별 콘텐츠 개수 표시
export const PathContentCount: Story = {
  parameters: {
    docs: {
      description: {
        story: '각 경로별로 포함된 디렉토리와 로드맵의 개수를 표시합니다.',
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ padding: '20px' }}>
        <h4 style={{ margin: '0 0 20px 0', fontSize: '16px', color: '#333' }}>
          경로별 콘텐츠 개수
        </h4>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <div
              style={{
                backgroundColor: '#f8f9fa',
                padding: '8px 12px',
                borderRadius: '4px',
                fontSize: '12px',
                color: '#666',
                marginBottom: '10px',
              }}
            >
              루트: 디렉토리 5개, 로드맵 20개
            </div>
            <div
              style={{
                width: '250px',
                height: '350px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
              }}
            >
              <Story />
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundColor: '#f8f9fa',
                padding: '8px 12px',
                borderRadius: '4px',
                fontSize: '12px',
                color: '#666',
                marginBottom: '10px',
              }}
            >
              프론트엔드: 서브디렉토리 2개, 로드맵 2개
            </div>
            <div
              style={{
                width: '250px',
                height: '350px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
              }}
            >
              <Story />
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundColor: '#f8f9fa',
                padding: '8px 12px',
                borderRadius: '4px',
                fontSize: '12px',
                color: '#666',
                marginBottom: '10px',
              }}
            >
              React 생태계: 로드맵 2개
            </div>
            <div
              style={{
                width: '250px',
                height: '350px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
              }}
            >
              <Story />
            </div>
          </div>
        </div>
      </div>
    ),
  ],
};

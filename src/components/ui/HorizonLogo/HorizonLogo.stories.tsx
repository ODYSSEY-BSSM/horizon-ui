import HorizonLogo from './HorizonLogo.tsx';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HorizonLogo> = {
  title: 'UI/HorizonLogo',
  component: HorizonLogo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Horizon 브랜드 로고 컴포넌트. 심볼만, 텍스트만, 또는 전체 로고를 표시할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    symbolOnly: {
      control: 'boolean',
      description: '심볼만 표시',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    textOnly: {
      control: 'boolean',
      description: '텍스트만 표시',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    width: {
      control: 'text',
      description: '로고 너비',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'auto' },
      },
    },
    height: {
      control: 'text',
      description: '로고 높이',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'auto' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '전체 로고 (심볼 + 텍스트)',
      },
    },
  },
};

// 심볼만
export const SymbolOnly: Story = {
  args: {
    symbolOnly: true,
  },
  parameters: {
    docs: {
      description: {
        story: '심볼만 표시하는 버전',
      },
    },
  },
};

// 텍스트만
export const TextOnly: Story = {
  args: {
    textOnly: true,
  },
  parameters: {
    docs: {
      description: {
        story: '텍스트만 표시하는 버전',
      },
    },
  },
};

// 다양한 크기
export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <HorizonLogo width={80} height={21} />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>
          Small (80px)
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <HorizonLogo width={140} height={40} />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>
          Medium (140px)
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <HorizonLogo width={210} height={60} />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>
          Large (210px)
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 크기의 로고',
      },
    },
  },
};

// 모든 변형 한눈에 보기
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          padding: '20px',
          border: '1px solid #eee',
          borderRadius: '8px',
        }}
      >
        <HorizonLogo width={140} />
        <p style={{ margin: '12px 0 0 0', fontWeight: 'bold' }}>Default</p>
      </div>
      <div
        style={{
          textAlign: 'center',
          padding: '20px',
          border: '1px solid #eee',
          borderRadius: '8px',
        }}
      >
        <HorizonLogo symbolOnly width={40} />
        <p style={{ margin: '12px 0 0 0', fontWeight: 'bold' }}>Symbol Only</p>
      </div>
      <div
        style={{
          textAlign: 'center',
          padding: '20px',
          border: '1px solid #eee',
          borderRadius: '8px',
        }}
      >
        <HorizonLogo textOnly width={100} />
        <p style={{ margin: '12px 0 0 0', fontWeight: 'bold' }}>Text Only</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 로고 변형을 한눈에 보기',
      },
    },
  },
};

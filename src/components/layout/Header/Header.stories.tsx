import Header from './Header';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '헤더 제목',
    },
    button: {
      control: 'object',
      description: '버튼 속성',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 헤더 (버튼 없음)
export const Default: Story = {
  args: {
    title: '기본 헤더',
  },
};

// 텍스트 버튼이 있는 헤더
export const WithTextButton: Story = {
  args: {
    title: '텍스트 버튼 헤더',
    button: {
      text: '추가',
    },
  },
};

// 아이콘과 텍스트가 있는 버튼
export const WithIconAndText: Story = {
  args: {
    title: '아이콘 버튼 헤더',
    button: {
      text: '새로 만들기',
      leftIcon: 'add',
    },
  },
};

// 아이콘만 있는 버튼
export const WithIconOnly: Story = {
  args: {
    title: '아이콘 전용 헤더',
    button: {
      leftIcon: 'settings',
    },
  },
};

// 긴 제목 테스트
export const LongTitle: Story = {
  args: {
    title: '매우 긴 제목을 가진 헤더 컴포넌트 테스트입니다',
    button: {
      text: '버튼',
      leftIcon: 'edit',
    },
  },
};

// 다양한 버튼 텍스트
export const DifferentButtonTexts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
      <Header title='저장 버튼' button={{ text: '저장', leftIcon: 'save' }} />
      <Header title='편집 버튼' button={{ text: '편집', leftIcon: 'edit' }} />
      <Header title='삭제 버튼' button={{ text: '삭제', leftIcon: 'delete' }} />
      <Header
        title='설정 버튼'
        button={{ text: '설정', leftIcon: 'settings' }}
      />
    </div>
  ),
};

// 반응형 테스트
export const ResponsiveTest: Story = {
  args: {
    title: '반응형 테스트',
    button: {
      text: '버튼',
      leftIcon: 'add',
    },
  },
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
      },
    },
  },
};

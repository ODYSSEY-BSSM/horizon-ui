import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';

import '@testing-library/jest-dom';

describe('Button 컴포넌트', () => {
  it('기본 버튼이 정상적으로 렌더링되어야 합니다', () => {
    render(<Button text='테스트 버튼' />);

    const button = screen.getByText('테스트 버튼');
    expect(button).toBeInTheDocument();
  });

  it('클릭 이벤트가 정상적으로 동작해야 합니다', () => {
    const handleClick = jest.fn();
    render(<Button text='클릭 테스트' onClick={handleClick} />);

    const button = screen.getByText('클릭 테스트');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('아이콘이 있는 버튼이 정상적으로 렌더링되어야 합니다', () => {
    render(
      <Button text='아이콘 버튼' leftIcon='leftIcon' rightIcon='rightIcon' />,
    );

    expect(screen.getByText('leftIcon')).toBeInTheDocument();
    expect(screen.getByText('rightIcon')).toBeInTheDocument();
    expect(screen.getByText('아이콘 버튼')).toBeInTheDocument();
  });

  it('다양한 크기의 버튼이 정상적으로 렌더링되어야 합니다', () => {
    const { rerender } = render(<Button text='small 버튼' size='small' />);
    expect(screen.getByText('small 버튼')).toBeInTheDocument();

    rerender(<Button text='medium 버튼' size='medium' />);
    expect(screen.getByText('medium 버튼')).toBeInTheDocument();

    rerender(<Button text='large 버튼' size='large' />);
    expect(screen.getByText('large 버튼')).toBeInTheDocument();
  });

  it('다양한 타입의 버튼이 정상적으로 렌더링되어야 합니다', () => {
    const { rerender } = render(
      <Button text='contained 버튼' type='contained' />,
    );
    expect(screen.getByText('contained 버튼')).toBeInTheDocument();

    rerender(<Button text='outlined 버튼' type='outlined' />);
    expect(screen.getByText('outlined 버튼')).toBeInTheDocument();

    rerender(<Button text='ghost 버튼' type='ghost' />);
    expect(screen.getByText('ghost 버튼')).toBeInTheDocument();

    rerender(<Button text='text 버튼' type='text' />);
    expect(screen.getByText('text 버튼')).toBeInTheDocument();
  });

  it('round 속성이 적용된 버튼이 정상적으로 렌더링되어야 합니다', () => {
    render(<Button text='둥근 버튼' round />);

    const button = screen.getByText('둥근 버튼').parentElement;
    expect(button).toHaveStyle('border-radius: 16px');
  });

  it('아이콘만 있는 버튼이 정상적으로 렌더링되어야 합니다', () => {
    render(<Button leftIcon='iconOnly' />);

    expect(screen.getByText('iconOnly')).toBeInTheDocument();
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('data-icon-only', 'true');
  });
});

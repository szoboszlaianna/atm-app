import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  test('Check button click', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>);

    fireEvent.click(getByText('Click me'));
    expect(onClick).toHaveBeenCalled();
  });
});

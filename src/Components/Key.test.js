import { render, screen, fireEvent } from '@testing-library/react';
import Key from './Key';

describe('Key component', () => {
  test('Check if key is clickable', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Key id='9' onClick={onClick}>
        9
      </Key>
    );

    fireEvent.click(getByText('9'));
    expect(onClick).toHaveBeenCalled();
  });
});

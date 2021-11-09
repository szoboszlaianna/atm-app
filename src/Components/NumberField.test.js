import { render, screen } from '@testing-library/react';
import Coin from './Coin';

describe('Coin component', () => {
  test('Check bills', () => {
    render(<Coin key={5} amount={2} value={500} />);
    expect(screen.getByRole('img')).toHaveClass('bill');
  });

  test('Check coin', () => {
    render(<Coin key={5} amount={2} value={20} />);
    expect(screen.getByRole('img')).toHaveClass('coin_image');
  });
});

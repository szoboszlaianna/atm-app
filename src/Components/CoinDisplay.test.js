import { render, screen } from '@testing-library/react';
import CoinDisplay from './CoinDisplay';

describe('CoinDisplay component', () => {
  test('Check if bill is rendered', () => {
    let bill = [
      {
        id: 0,
        value: 1000,
        type: 'note',
        diameter: 0,
      },
      {
        id: 1,
        value: 500,
        type: 'note',
        diameter: 0,
      },
    ];
    const result = [0, 1];
    const { container } = render(<CoinDisplay result={result} coins={bill} />);
    let columns = container.getElementsByClassName('column');
    expect(columns[0].childElementCount).toBe(2);
  });

  test('Check if bigger coin is rendered', () => {
    let coins = [
      {
        id: 0,
        value: 80,
        type: 'coin',
        diameter: 50,
      },
      {
        id: 1,
        value: 40,
        type: 'coin',
        diameter: 40,
      },
    ];
    const result = [0, 1];
    const { container } = render(<CoinDisplay result={result} coins={coins} />);
    let columns = container.getElementsByClassName('column');
    expect(columns[1].childElementCount).toBe(2);
  });

  test('Check if smaller coin is rendered', () => {
    let coins = [
      {
        id: 0,
        value: 80,
        type: 'coin',
        diameter: 20,
      },
      {
        id: 1,
        value: 40,
        type: 'coin',
        diameter: 10,
      },
    ];
    const result = [0, 1];
    const { container } = render(<CoinDisplay result={result} coins={coins} />);
    let columns = container.getElementsByClassName('column');
    expect(columns[2].childElementCount).toBe(2);
  });
});

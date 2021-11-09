import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Title component', () => {
  test('Check bills', () => {
    render(<Title>Title</Title>);
    const titleElement = screen.getByText('Title');
    expect(titleElement).toBeInTheDocument();
  });
});

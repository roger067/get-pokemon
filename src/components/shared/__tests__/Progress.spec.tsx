import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { describe, expect, test } from 'vitest';

import Progress from '../Progress';

describe('test progress bar', () => {
  test('should render correct label', () => {
    render(<Progress value={75} label="Attack" />);
    expect(screen.getByText(/Attack/)).toBeInTheDocument();
    expect(screen.getByText(/75/)).toBeInTheDocument();
  });

  test('should render progress width based on value', () => {
    render(<Progress value={75} label="Attack" />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveStyle(`width: 50%`);
  });
});

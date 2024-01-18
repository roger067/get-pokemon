import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { describe, expect, test, vi } from 'vitest';

import Select from '../Select';

describe('Select Component', () => {
  const placeholder = 'Select an option';
  const items = [
    { id: '1', value: 'Option 1' },
    { id: '2', value: 'Option 2' },
    { id: '3', value: 'Option 3' },
  ];

  test('should render correctly', () => {
    render(
      <Select
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        items={items}
      />
    );

    const selectButton = screen.getByRole('button', { name: placeholder });
    expect(selectButton).toBeInTheDocument();

    const dropdownList = screen.queryByRole('listbox');
    expect(dropdownList).toBeNull();
  });

  test('opens and closes the dropdown correctly', () => {
    render(
      <Select
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        items={items}
      />
    );

    fireEvent.click(screen.getByText(placeholder));

    expect(screen.getByRole('listbox')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Option 1'));

    expect(screen.queryByRole('listbox')).toBeNull();
  });

  test('selects an option correctly', () => {
    const mockOnChange = vi.fn();

    render(
      <Select
        placeholder={placeholder}
        value=""
        onChange={mockOnChange}
        items={items}
      />
    );

    const selectButton = screen.getByRole('button', { name: placeholder });
    fireEvent.click(selectButton);

    const option = screen.getByText('Option 1');
    fireEvent.click(option);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});

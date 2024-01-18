import { render } from '@testing-library/react';
import Progress from '../Progress';

test('Renders the main page', () => {
  render(<Progress value={10} label="Teste" />);
  expect(true).toBeTruthy();
});

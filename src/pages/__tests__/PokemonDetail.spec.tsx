import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { describe, test, vi } from 'vitest';

import PokemonDetail from '../PokemonDetail';
import { RenderWrapper, Root } from '../../tests/RenderWrapper';
import { RootRoute } from '@tanstack/react-router';

vi.mock('@tanstack/react-router', () => ({
  ...vi.importActual('@tanstack/react-router'),
  RootRoute: new RootRoute({
    component: Root,
  }),
  useParams: vi.fn(),
}));

describe.skip('test progress bar', () => {
  test.skip('should render component properly', () => {
    render(
      <RenderWrapper>
        <PokemonDetail />
      </RenderWrapper>
    );
  });
});

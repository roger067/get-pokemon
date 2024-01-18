import { describe, expect, test } from 'vitest';
import { formatPokemonId, getGenerationByPokemonId } from '../functional';
import { generations } from '../constants';

describe('getGenerationByPokemonId', () => {
  test('returns the correct generation for a Pokémon ID', () => {
    const testCases = [
      { id: 1, expected: generations[151] },
      { id: 251, expected: generations[251] },
      { id: 386, expected: generations[386] },
      { id: 493, expected: generations[493] },
      { id: 649, expected: generations[649] },
      { id: 721, expected: generations[721] },
      { id: 809, expected: generations[809] },
      { id: 898, expected: generations[898] },
      { id: 1000, expected: 'None' },
    ];

    testCases.forEach(({ id, expected }) => {
      expect(getGenerationByPokemonId(id)).toBe(expected);
    });
  });
});

describe('formatPokemonId', () => {
  test('correctly formats the Pokémon ID', () => {
    const testCases = [
      { id: 1, expected: '#001' },
      { id: 25, expected: '#025' },
      { id: 328, expected: '#328' },
      { id: 10000000, expected: '#10000000' },
    ];

    testCases.forEach(({ id, expected }) => {
      expect(formatPokemonId(id)).toBe(expected);
    });
  });
});

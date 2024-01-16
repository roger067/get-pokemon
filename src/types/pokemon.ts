export interface GetPokemonsResponse {
  status: string;
  count: number;
  results: Pokemon[];
  next?: string;
  previous?: string;
}

export interface GetPokemonsParams {
  offset?: string;
  limit?: string;
}

export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[];
  stats: PokemonStats[];
  abilities: PokemonAbility[];
  weight: number;
  height: number;
  species: Species;
}

interface Species {
  name: string;
  url: string;
}

interface Ability {
  name: string;
  url: string;
}

interface Stat {
  name: StatName;
  url: string;
}

export interface PokemonType {
  slot: number;
  type: {
    name: TypeName;
    url: string;
  };
}

interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: Stat;
}

interface PokemonAbility {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

export type StatName =
  | 'hp'
  | 'attack'
  | 'defense'
  | 'special-attack'
  | 'special-defense'
  | 'speed';

export type TypeName =
  | 'normal'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dark'
  | 'dragon'
  | 'steel'
  | 'fairy';

export interface PokemonApiResponse {
  status: string;
  count: number;
  next?: string;
  previous?: string;
}

export interface GetPokemonResponse extends PokemonApiResponse {
  results: PokemonResponse[];
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
  sprites: {
    front_default: string;
  };
  abilities: PokemonAbility[];
  weight: number;
  height: number;
  species: Species;
}

interface PokemonResponse {
  name: string;
  url: string;
}

interface Species extends PokemonResponse {}

interface Ability extends PokemonResponse {}

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

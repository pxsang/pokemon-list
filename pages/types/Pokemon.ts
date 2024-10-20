export interface PokemonAPIListResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface IPokemonType {
  name: string;
  url: string;
}

export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonDetail {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export interface IPokemonTypeDetail {
  id: number;
  name: string;
  pokemon: {
    pokemon: IPokemon;
  }[];
}

export type NormalizePokemonType = IPokemonTypeDetail & {
  pokemon: IPokemon[];
};

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

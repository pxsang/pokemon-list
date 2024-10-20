export interface PokemonAPIListResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface PokemonType {
  name: string;
  url: string;
}

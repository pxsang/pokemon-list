import type { IPokemon } from "@/pages/types/Pokemon";
import Pokemon from "../Pokemon/Pokemon";

export interface Pokemon {
  id: number;
  name: string;
  artwork: string;
}

interface PokemonListProps {
  data: IPokemon[];
}

export default function PokemonList({ data }: PokemonListProps) {
  if (!data || data.length === 0) {
    return (
      <div className="text-center text-3xl mx-auto my-24 font-bold">
        No results found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
      {data.map((pokemon) => (
        <Pokemon key={pokemon.url} data={pokemon} />
      ))}
    </div>
  );
}

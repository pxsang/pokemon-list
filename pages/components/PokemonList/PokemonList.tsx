import { useMemo } from "react";
import type { IPokemon } from "@/pages/types/Pokemon";
import { UsePaginationReturn } from "@/pages/hooks/usePagination";
import Pokemon from "../Pokemon/Pokemon";

export interface Pokemon {
  id: number;
  name: string;
  artwork: string;
}

interface PokemonListProps {
  data: IPokemon[];
  pagination: UsePaginationReturn;
}

export default function PokemonList({ data, pagination }: PokemonListProps) {
  const dataToDisplay = useMemo(() => {
    return data.slice(
      (pagination.page - 1) * pagination.limit,
      pagination.page * pagination.limit,
    );
  }, [data, pagination.page, pagination.limit]);

  if (!dataToDisplay || dataToDisplay.length === 0) {
    return (
      <div className="text-center text-3xl mx-auto my-24 font-bold">
        No results found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
      {dataToDisplay.map((pokemon) => (
        <Pokemon key={pokemon.url} data={pokemon} />
      ))}
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import { fetchPokemonList } from "@/pages/api/pokeAPI";
import type { IPokemon } from "@/pages/types/Pokemon";

import Pokemon from "../Pokemon/Pokemon";

export interface Pokemon {
  id: number;
  name: string;
  artwork: string;
}

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);

  useEffect(() => {
    async function fetchData() {
      const pokemonList = await fetchPokemonList();

      setPokemonList(pokemonList);
    }

    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
      {pokemonList.map((pokemon) => (
        <Pokemon key={pokemon.url} data={pokemon} />
      ))}
    </div>
  );
}

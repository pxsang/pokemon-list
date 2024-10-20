"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { fetchTypes } from "@/pages/api/pokeAPI";
import type { PokemonType } from "@/pages/types/Pokemon";

export default function PokemonTypes() {
  const [types, setTypes] = useState<PokemonType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const pokemonTypes = await fetchTypes();

      setTypes(pokemonTypes);
    }

    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex items-center mx-4 my-4">
        <div className="mr-2 my-4 font-bold self-start">Types</div>
        <div>
          {types.map((type) => (
            <PokemonType key={type.url} type={type} selected={false} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface PokemonTypeProps {
  type: PokemonType;
  selected: boolean;
}

function PokemonType({ type, selected }: PokemonTypeProps) {
  return (
    <button
      className={clsx(
        "px-2 py-2 mx-2 my-2 border-red-900 border-2 rounded-md font-bold text-red-900",
        selected && "bg-red-900 text-white",
      )}
    >
      {type.name}
    </button>
  );
}

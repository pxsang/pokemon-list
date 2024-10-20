// import { useEffect, useState } from "react";
import Image from "next/image";
import type { IPokemon, IPokemonDetail } from "@/types/Pokemon";
// import { fetchPokemonDetail } from "@/pages/api/pokeAPI";
import { useCache } from "@/hooks/useCache";

export default function Pokemon({ data }: { data: IPokemon }) {
  const { data: cachedData, loading } = useCache<IPokemonDetail>(data.url);

  const artwork = cachedData?.sprites.other["official-artwork"].front_default;

  return (
    <div>
      <div className="h-24 w-24 mx-auto">
        {loading ? (
          <div>Loading</div>
        ) : (
          artwork && (
            <Image
              src={artwork}
              title={data.name}
              alt={data.name}
              width={100}
              height={100}
              priority
            />
          )
        )}
      </div>
      <div className="text-center">{data.name}</div>
    </div>
  );
}

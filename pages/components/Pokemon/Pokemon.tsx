import { useEffect, useState } from "react";
import Image from "next/image";
import type { IPokemon, IPokemonDetail } from "@/pages/types/Pokemon";
import { fetchPokemonDetail } from "@/pages/api/pokeAPI";

export default function Pokemon({ data }: { data: IPokemon }) {
  const [pokemonDetail, setPokemonDetail] = useState<IPokemonDetail>();

  useEffect(() => {
    async function fetchData() {
      const details = await fetchPokemonDetail(data.url);

      setPokemonDetail(details);
    }

    fetchData();
  }, [data.url]);

  const artwork =
    pokemonDetail?.sprites.other["official-artwork"].front_default;

  return (
    <div>
      <div className="h-24 w-24 mx-auto">
        {artwork && (
          <Image
            src={artwork}
            title={data.name}
            alt={data.name}
            width={100}
            height={100}
            loading="lazy"
          />
        )}
      </div>
      <div className="text-center">{data.name}</div>
    </div>
  );
}

import Image from "next/image";
import type { Pokemon } from "../PokemonList/PokemonList";

export default function Pokemon({ data }: { data: Pokemon }) {
  return (
    <div>
      <div className="h-24 w-24 mx-auto">
        <Image
          src={data.artwork}
          title={data.name}
          alt={data.name}
          width={100}
          height={100}
          loading="lazy"
        />
      </div>
      <div className="text-center">{data.name}</div>
    </div>
  );
}

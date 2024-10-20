import { useEffect, useState } from "react";
import { clsx } from "clsx";
import type { NormalizePokemonType } from "@/pages/types/Pokemon";
import { fetchTypeDetail, fetchTypes } from "@/pages/api/pokeAPI";

interface PokemonTypesProps {
  selectedTypes: NormalizePokemonType[];
  onChange: (types: NormalizePokemonType[]) => void;
  total: number;
}

export default function PokemonTypes({
  selectedTypes,
  onChange,
  total,
}: PokemonTypesProps) {
  const [types, setTypes] = useState<NormalizePokemonType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const types = await fetchTypes();
      const typeDetailsPromises = types.map(
        async (type) => await fetchTypeDetail(type.url),
      );

      const typeDetails = await Promise.all(typeDetailsPromises);

      const pokemonTypes = typeDetails.map((detail) => {
        return {
          id: detail.id,
          name: detail.name,
          pokemon: detail.pokemon.map((item) => item.pokemon),
        } as NormalizePokemonType;
      });

      setTypes(pokemonTypes);
      setLoading(false);
    }

    fetchData();
  }, []);

  const handleTypeChange = (type: NormalizePokemonType) => {
    if (selectedTypes.includes(type)) {
      onChange(selectedTypes.filter((selected) => selected !== type));
    } else {
      onChange([...selectedTypes, type]);
    }
  };

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex items-center mx-4 my-4">
        <div className="mr-2 my-4 font-bold self-start">Types</div>
        <div>
          {types.map((type) => {
            const isSelected = selectedTypes.includes(type);
            return (
              <PokemonType
                key={type.id}
                type={type}
                selected={isSelected}
                onChange={handleTypeChange}
              />
            );
          })}
        </div>
      </div>
      {total > 0 && (
        <div className="my-12 mx-4 font-bold">{total} results found.</div>
      )}
    </div>
  );
}

interface PokemonTypeProps {
  type: NormalizePokemonType;
  selected: boolean;
  onChange: (type: NormalizePokemonType) => void;
}

function PokemonType({ type, selected, onChange }: PokemonTypeProps) {
  return (
    <button
      className={clsx(
        "px-2 py-2 mx-2 my-2 border-red-900 border-2 rounded-md font-bold text-red-900",
        selected && "bg-red-900 text-white",
      )}
      onClick={() => onChange(type)}
    >
      {type.name}
    </button>
  );
}

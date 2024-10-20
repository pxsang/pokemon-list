import { clsx } from "clsx";

export interface PokemonType {
  id: number;
  name: string;
}

interface PokemonTypesProps {
  types?: PokemonType[];
}

const mockTypes: PokemonType[] = [
  { id: 1, name: "normal" },
  { id: 2, name: "fighting" },
  { id: 3, name: "flying" },
];

export default function PokemonTypes({ types = mockTypes }: PokemonTypesProps) {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex items-center mx-4 my-4">
        <div className="mr-2 my-4 font-bold self-start">Types</div>
        <div>
          {types.map((type) => (
            <PokemonType key={type.id} type={type} selected={false} />
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
      key={type.id}
      className={clsx(
        "px-2 py-2 mx-2 my-2 border-red-900 border-2 rounded-md font-bold text-red-900",
        selected && "bg-red-900 text-white",
      )}
    >
      {type.name}
    </button>
  );
}

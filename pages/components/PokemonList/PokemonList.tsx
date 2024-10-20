import Pokemon from "../Pokemon/Pokemon";

export interface Pokemon {
  id: number;
  name: string;
  artwork: string;
}

interface PokemonListProps {
  data?: Pokemon[];
}

const mockData: Pokemon[] = [
  {
    id: 1,
    name: "bulbasaur",
    artwork:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    id: 2,
    name: "ivysaur",
    artwork:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    id: 3,
    name: "venusaur",
    artwork:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
  },
];

export default function PokemonList({ data = mockData }: PokemonListProps) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
      {data.map((pokemon) => (
        <Pokemon key={pokemon.id} data={pokemon} />
      ))}
    </div>
  );
}

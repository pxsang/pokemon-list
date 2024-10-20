import PokemonList from "./components/PokemonList/PokemonList";
import PokemonTypes from "./components/PokemonTypes/PokemonTypes";

export default function Home() {
  return (
    <div>
      <PokemonTypes />
      <PokemonList />
      <div>Pagination</div>
    </div>
  );
}

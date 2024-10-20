import PokemonList from "./components/PokemonList/PokemonList";
import PokemonTypes from "./components/PokemonTypes/PokemonTypes";
import Pagination from "./components/Pagination/Pagination";

export default function Home() {
  return (
    <div>
      <PokemonTypes />
      <PokemonList />
      <Pagination />
    </div>
  );
}

"use client";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonTypes from "./components/PokemonTypes/PokemonTypes";
import Pagination from "./components/Pagination/Pagination";
import usePokemonList from "./hooks/usePokemonList";

export default function Home() {
  const { pokemonList, pokemonTypes, onPokemonTypeChange, pagination } =
    usePokemonList();

  return (
    <div>
      <PokemonTypes
        selectedTypes={pokemonTypes}
        onChange={onPokemonTypeChange}
        total={pokemonList.length}
      />
      <PokemonList data={pokemonList} />
      <Pagination pagination={pagination} />
    </div>
  );
}

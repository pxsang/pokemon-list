"use client";
import { useEffect, useMemo, useState } from "react";
import intersectionBy from "lodash/intersectionBy";
import { IPokemon, NormalizePokemonType } from "./types/Pokemon";
import { fetchPokemonList } from "./api/pokeAPI";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonTypes from "./components/PokemonTypes/PokemonTypes";
import Pagination from "./components/Pagination/Pagination";
import usePagination, { PaginationWithTotal } from "./hooks/usePagination";

export default function Home() {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<NormalizePokemonType[]>(
    [],
  );
  const pagination = usePagination();

  useEffect(() => {
    async function fetchData() {
      const list = await fetchPokemonList();
      setPokemonList(list);
    }

    fetchData();
  }, []);

  const handlePokemonTypeChange = (types: NormalizePokemonType[]) => {
    setSelectedTypes(types);
    pagination.setPage(1);
  };

  const pokemonListSource = useMemo(() => {
    if (selectedTypes.length) {
      return intersectionBy(
        ...selectedTypes.map((type) => type.pokemon),
        "url",
      );
    }

    return pokemonList;
  }, [selectedTypes, pokemonList]);

  const paginationWithTotal: PaginationWithTotal = useMemo(() => {
    return {
      ...pagination,
      total: pokemonListSource.length,
    };
  }, [pagination, pokemonListSource]);

  return (
    <div>
      <PokemonTypes
        selectedTypes={selectedTypes}
        onChange={handlePokemonTypeChange}
        total={pokemonListSource.length}
      />

      <PokemonList data={pokemonListSource} pagination={paginationWithTotal} />
      <Pagination pagination={paginationWithTotal} />
    </div>
  );
}

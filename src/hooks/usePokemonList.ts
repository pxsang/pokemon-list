import { useCallback, useEffect, useMemo, useState } from "react";
import { IPokemon, NormalizePokemonType } from "@/types/Pokemon";
import usePagination, { PaginationWithTotal } from "./usePagination";
import { fetchPokemonList } from "@/pages/api/pokeAPI";
import intersectionBy from "lodash/intersectionBy";

function usePokemonList() {
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

  const handlePokemonTypeChange = useCallback(
    (types: NormalizePokemonType[]) => {
      setSelectedTypes(types);
      pagination.setPage(1);
    },
    [pagination],
  );

  const pokemonListSource = useMemo(() => {
    if (selectedTypes.length) {
      return intersectionBy(
        ...selectedTypes.map((type) => type.pokemon),
        "url",
      );
    }

    return pokemonList;
  }, [selectedTypes, pokemonList]);

  const pokemonListToDisplay = useMemo(() => {
    return pokemonListSource.slice(
      (pagination.page - 1) * pagination.limit,
      pagination.page * pagination.limit,
    );
  }, [pokemonListSource, pagination.page, pagination.limit]);

  const paginationWithTotal: PaginationWithTotal = useMemo(() => {
    return {
      ...pagination,
      total: pokemonListSource.length,
    };
  }, [pagination, pokemonListSource]);

  return useMemo(
    () => ({
      pokemonList: pokemonListToDisplay,
      pokemonTypes: selectedTypes,
      onPokemonTypeChange: handlePokemonTypeChange,
      pagination: paginationWithTotal,
    }),
    [
      pokemonListToDisplay,
      selectedTypes,
      handlePokemonTypeChange,
      paginationWithTotal,
    ],
  );
}

export default usePokemonList;

import {
  PokemonAPIListResponse,
  IPokemonType,
  IPokemon,
  IPokemonDetail,
  IPokemonTypeDetail,
} from "../../types/Pokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

export async function fetchTypes() {
  try {
    const url = `${BASE_URL}/type`;
    const data = await fetchData<PokemonAPIListResponse<IPokemonType>>(url);

    return data.results;
  } catch (error) {
    console.error(`Error fetching Pokemon Types:`, error);
    throw error;
  }
}

export async function fetchTypeDetail(url: string) {
  try {
    const data = await fetchData<IPokemonTypeDetail>(url);

    return data;
  } catch (error) {
    console.error(`Error fetching Pokemon Detail: ${url}`, error);
    throw error;
  }
}

export async function fetchPokemonList(limit = 1200) {
  try {
    const url = `${BASE_URL}/pokemon?limit=${limit}`;
    const data = await fetchData<PokemonAPIListResponse<IPokemon>>(url);

    return data.results;
  } catch (error) {
    console.error(`Error fetching Pokemon List:`, error);
    throw error;
  }
}

export async function fetchPokemonDetail(url: string) {
  try {
    const data = await fetchData<IPokemonDetail>(url);

    return data;
  } catch (error) {
    console.error(`Error fetching Pokemon Detail: ${url}`, error);
    throw error;
  }
}

import { PokemonAPIListResponse, PokemonType } from "../types/Pokemon";

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
    const data = await fetchData<PokemonAPIListResponse<PokemonType>>(url);

    return data.results;
  } catch (error) {
    console.error(`Error fetching Pokemon Types:`, error);
    throw error;
  }
}

import { PokemonType } from "../types/pokemon.type";

const BASE_URL = `https://pokeapi.co/api/v2`;

export const fetchPokemonsList = async (limit: number, offset: number) => {
  const endpoint = `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((pokemon: PokemonType) => (
    {
      ...pokemon,
      favorited: false,
    }
  ))
}

export const fetchPokemonsByName = async (name: string) => {
  const endpoint = `${BASE_URL}/pokemon/${name}`;
  const data = await (await (fetch(endpoint)).then(response => {
    return response.json();
  }).catch(err => {
    return [];
  }))

  return data.length === 0 ?
    [] :
    {
      name: data.name,
      url: data.types[0].type.url,
      favorited: false,
    };
}
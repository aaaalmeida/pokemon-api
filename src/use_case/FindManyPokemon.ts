import { PokemonRepository } from "@adapter/PokemonRepository"

export const FindManyPokemon = async (ids: string[], pokemonRepository: PokemonRepository) => {
  try {
    return pokemonRepository.findMany(ids)
  } catch (error) {
    // TODO:
  }
}
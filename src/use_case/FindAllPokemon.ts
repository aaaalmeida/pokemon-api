import { PokemonRepository } from "@adapter/PokemonRepository"

export const FindAllPokemon = async (pokemonRepository: PokemonRepository) => {
  try {
    return pokemonRepository.findAll()
  } catch (error) {
    // TODO:
  }
}
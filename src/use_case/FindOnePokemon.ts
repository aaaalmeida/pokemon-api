import { PokemonRepository } from "@adapter/PokemonRepository"

export const FindOnePokemon = async (id: string, pokemonRepository: PokemonRepository) => {
  try {
    return pokemonRepository.findOne(id)
  } catch (error) {
    // TODO:
  }
}
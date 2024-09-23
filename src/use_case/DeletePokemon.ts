import { PokemonRepository } from "@adapter/PokemonRepository"

export const DeletePokemon = async (id: string, pokemonRepository: PokemonRepository) => {
  try {
    return await pokemonRepository.delete(id)
  } catch (error) {
    // TODO:
  }
}
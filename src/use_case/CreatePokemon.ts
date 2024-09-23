import { PokemonRepository } from "@adapter/PokemonRepository"
import { PokemonSchema } from "@entity/PokemonSchema"

export const CreatePokemon = async (data: any, pokemonRepository: PokemonRepository) => {
  try {
    const schema = PokemonSchema.parse(data)
    return await pokemonRepository.save(schema)
  } catch (error) {
    // TODO:
  }
}
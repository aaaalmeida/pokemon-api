import { PokemonRepository } from "@adapter/PokemonRepository"
import { PokemonSchema } from "@entity/PokemonSchema"

export const UpdatePokemon = async (id: string, data: any, pokemonRepository: PokemonRepository) => {
  try {
    const partialSchema = PokemonSchema.partial().parse(data)

    return await pokemonRepository.update(id, partialSchema)
  } catch (error) {
    // TODO:
  }
}
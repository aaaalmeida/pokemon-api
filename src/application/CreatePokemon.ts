import { IPokemon } from "@domain/Pokemon"
import { PokemonRepository } from "@infrastructure/db/PokemonRepository"
import { PokemonSchema } from "@shared/validation/PokemonSchema"

export const CreatePokemon = async (data: IPokemon, pokemonRepository: PokemonRepository) => {
    const pokemon = PokemonSchema.parse(data)
    return await pokemonRepository.save(pokemon)
}
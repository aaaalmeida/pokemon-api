import { IPokemon } from "@domain/Pokemon";
import PokemonRepository from "@infrastructure/db/PokemonRepository";
import { PokemonSchema } from "@shared/validation/PokemonSchema";

export const UpdatePokemon = async (pokemonRepository: PokemonRepository, id: string, data: Partial<IPokemon>) => {
    const pokemon = PokemonSchema.partial().parse(data)
    return await pokemonRepository.update(id, data)
}
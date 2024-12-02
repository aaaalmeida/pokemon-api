import PokemonRepository from "@infrastructure/db/PokemonRepository";

export const DeletePokemon = async (pokemonRepository: PokemonRepository, id: string) => {
    return await pokemonRepository.delete(id)
}
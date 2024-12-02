import PokemonRepository from "@infrastructure/db/PokemonRepository"

export const FindAllPokemons = async (pokemonRepository: PokemonRepository) => {
    return await pokemonRepository.findAll()
}
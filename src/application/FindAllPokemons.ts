import { PokemonRepository } from "@infrastructure/db/PokemonRepository"

export const FindAllPokemons = (pokemonRepository: PokemonRepository) => {
    return pokemonRepository.findAll()
}
import { PokemonRepository } from "@infrastructure/db/PokemonRepository"
import { InvalidObjectId } from "@shared/exception/InvalidObjectId"
import { ObjectId } from "mongodb"

export const FindPokemonById = async (id: string, pokemonRepository: PokemonRepository) => {
    if (!ObjectId.isValid(id))
        throw new InvalidObjectId(id)

    return await pokemonRepository.findById(id)
}
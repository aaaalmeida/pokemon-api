import { IPokemon } from "@domain/Pokemon"
import { MongoClient } from "mongodb"

export class PokemonRepository {
    readonly DB_NAME = process.env.DB_NAME || "pokemon_db"
    readonly COLLECTION_NAME = "pokemon"

    constructor(private client: MongoClient) { }

    async save(pokemon: IPokemon) {
        return await this.client.db(this.DB_NAME).collection(this.COLLECTION_NAME).insertOne(pokemon)
    }
}
import { MongoClient, ObjectId } from "mongodb"
import { IPokemon } from "entity/Pokemon"

export class PokemonRepository {
  readonly client: MongoClient
  readonly DB_NAME = "pokemonDB"
  readonly DB_TABLE = "pokemon"

  constructor(mongoClient: MongoClient) {
    this.client = mongoClient
  }

  async save(pokemon: IPokemon) {
    try {
      return await this.client.db(this.DB_NAME).collection(this.DB_TABLE).insertOne(pokemon)
    } catch (error) {
      // TODO: 
    }
  }

  async delete(id: string) {
    try {
      return await this.client.db(this.DB_NAME).collection(this.DB_TABLE).deleteOne(new ObjectId(id))
    } catch (error) {
      // TODO:
    }
  }

  async update(id: string, pokemon: Partial<IPokemon>) {
    try {
      return await this.client.db(this.DB_NAME).collection(this.DB_TABLE).updateOne(new ObjectId(id), { $set: pokemon })
    } catch (error) {
      // TODO:
    }
  }

  async findOne(id: string) {
    try {
      return await this.client.db(this.DB_NAME).collection(this.DB_TABLE).findOne(new ObjectId(id))
    } catch (error) {
      // TODO:
    }
  }

  findMany(ids: string[]) {
    try {
      const objectIds: ObjectId[] = ids.map((id) => new ObjectId(id))
      return this.client.db(this.DB_NAME).collection(this.DB_TABLE).find({ _id: { $in: objectIds } })
    } catch (error) {
      // TODO
    }
  }

  findAll() {
    try {
      return this.client.db(this.DB_NAME).collection(this.DB_TABLE).find({})
    } catch (error) {
      // TODO:
    }
  }
}
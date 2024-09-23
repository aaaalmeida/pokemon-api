import { ObjectId } from "mongodb"

export interface IPokemon {
  name: string
  abilities: string[]
  evolution?: (string | ObjectId)[]
  type: string[]
}

import { ObjectId } from "mongodb"

export interface IPokemon {
    name: string
    type: string[]
    image: string
    size?: number
    weight?: number
    evolution?: ObjectId | string
}
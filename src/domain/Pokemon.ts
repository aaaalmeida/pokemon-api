import { ObjectId } from "mongodb"

export interface IPokemon {
    name: string
    type: string[]
    image: string
    size?: number
    weight?: number
    // TODO: permitir evolução
    evolution?: ObjectId | string
}
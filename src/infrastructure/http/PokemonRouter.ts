import dotenv from "dotenv"
dotenv.config()

import { CreatePokemon } from "@application/CreatePokemon"
import { IPokemon } from "@domain/Pokemon"
import { PokemonRepository } from "@infrastructure/db/PokemonRepository"
import { Router, Request, Response } from "express"
import { MongoClient } from "mongodb"
import { ZodError } from "zod"

export const pokemonRouter = Router()

const DB_URL = process.env.MONGODB_URL || "localhost:27017"
const pokemonRepository = new PokemonRepository(new MongoClient(DB_URL))

pokemonRouter.post("/", async (req: Request, res: Response) => {
    try {
        const data = req.body as IPokemon
        res.status(201).send(await CreatePokemon(data, pokemonRepository))
    } catch (error) {
        if (error instanceof ZodError)
            res.status(400).send(error.issues)
        else
            res.status(500).send("Internal Error")
    }
})
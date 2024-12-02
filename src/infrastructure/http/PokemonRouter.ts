import dotenv from "dotenv"
dotenv.config()

import { CreatePokemon } from "@application/CreatePokemon"
import { IPokemon } from "@domain/Pokemon"
import PokemonRepository from "@infrastructure/db/PokemonRepository"
import { Router, Request, Response } from "express"
import { MongoClient } from "mongodb"
import { ZodError } from "zod"
import { FindPokemonById } from "@application/FindPokemonById"
import { InvalidObjectId } from "@shared/exception/InvalidObjectId"
import { FindAllPokemons } from "@application/FindAllPokemons"
import { DeletePokemon } from "@application/DeletePokemon"
import { UpdatePokemon } from "@application/UpdatePokemon"

export const pokemonRouter = Router()

// if db url is not previously defined it will try to use a local database or throw an error
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

pokemonRouter.get("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const response = await FindPokemonById(id, pokemonRepository)
        if (!response)
            res.status(404).send("Pokemon not found")
        else
            res.status(200).send(response)
    } catch (error) {
        if (error instanceof InvalidObjectId)
            res.status(400).send("Invalid Pokemon ID")
        else res.status(500).send("Internal Error")
    }
})

pokemonRouter.get("", async (req: Request, res: Response) => {
    try {
        res.status(200).send(await FindAllPokemons(pokemonRepository))
    } catch (error) {
        res.status(500).send("Internal Error")
    }
})

pokemonRouter.patch("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const data = req.body as Partial<IPokemon>
        res.status(201).send(await UpdatePokemon(pokemonRepository, id, data))
    } catch (error) {
        res.send(500).send("Internal Error")
    }
})

pokemonRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        res.status(200).send(await DeletePokemon(pokemonRepository, req.params.id))
    } catch (error) {
        res.status(500).send("Internal Error")
    }
})
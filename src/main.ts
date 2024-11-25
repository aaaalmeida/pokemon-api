import { pokemonRouter } from "@infrastructure/http/PokemonRouter"
import dotenv from "dotenv"
dotenv.config()

import express from "express"

const PORT = process.env.PORT || 3000

const app = express()

app.get("/", (req, res) => {
    res.status(200).send("OLA MUNDO")
})

app.use(express.json())
app.use("/pokemon", pokemonRouter)

app.listen(PORT, () => {
    console.log(`${new Date().toLocaleTimeString()} server on port ${PORT}`)
})
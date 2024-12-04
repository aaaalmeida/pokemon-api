import { pokemonRouter } from "@infrastructure/http/PokemonRouter"
import dotenv from "dotenv"
import swaggerUi from "swagger-ui-express"
import express from "express"
import swaggerDocument from "@infrastructure/swagger/swaggerDocument"

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.get("/", (req, res) => {
    res.status(200).send("OLA MUNDO")
})

app.use(express.json())

app.use("/pokemon", pokemonRouter)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(PORT, () => {
    console.log(`${new Date().toLocaleTimeString()} server on port ${PORT}`)
})
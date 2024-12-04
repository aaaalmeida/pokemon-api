import pokemonRoutesDocs from "./PokemonRoutesDocs"
import swaggerSchemas from "./swaggerSchemas"

const swaggerDocument = {
    openapi: "3.0.0",
    info: {
        title: "Pokemon API",
        version: "1.0.0",
        description: "Simple API for academic purpose"
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "Local Server",
        }
    ],
    paths: {
        ...pokemonRoutesDocs
    },
    ...swaggerSchemas
}

export default swaggerDocument
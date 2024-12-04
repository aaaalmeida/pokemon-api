const pokemonRoutesDocs = {
    "/pokemon": {
        post: {
            summary: "Create a new Pokemon",
            requestBody: {
                content: {
                    "application/json": {
                        schema: { $ref: "#/components/schemas/Pokemon" }
                    }
                }
            },
            responses: {
                201: {
                    description: "Pokemon created and added to database",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    acknowledged: { type: "boolean" },
                                    insertedId: { type: "string" }
                                }
                            }
                        }
                    }
                },
                400: {
                    description: "Validation error",
                    content: {
                        "application/json": {
                            schema: {
                                type: "array",
                                items: { $ref: "#/components/schemas/ZodError" }
                            }
                        }
                    }
                },
                500: {
                    description: "Undefined Error",
                    content: {
                        "text/plain": {
                            schema: {
                                type: "string",
                                example: "Internal Error"
                            }
                        }
                    }
                }
            }
        },
        get: {
            summary: "List all Pokemons",
            responses: {
                200: {
                    description: "List of Pokemons",
                    content: {
                        "application/json": {
                            schema: {
                                type: "array",
                                items: { $ref: "#/components/schemas/Pokemon" }
                            }
                        }
                    }
                },
                500: {
                    description: "Undefined Error",
                    content: {
                        "text/plain": {
                            schema: {
                                type: "string",
                                example: "Internal Error"
                            }
                        }
                    }
                }
            }
        }
    }
}

export default pokemonRoutesDocs
const swaggerSchemas = {
    components: {
        schemas: {
            Pokemon: {
                type: "object",
                properties: {
                    name: { type: "string", example: "Pikachu" },
                    type: { type: "array", items: { type: "string" }, example: ["eletric", "normal"] },
                    image: { type: "string", example: "https://ibb.co/H4rN118" },
                    size: { type: "number", nullable: true, minimum: 0, example: "10" },
                    weight: { type: "number", nullable: true, minimum: 0, example: "10" },
                    evolution: { type: "string", nullable: true, example: "Raichu" },
                },
                required: ["name", "type", "image"]
            },
            ZodError: {
                type: "object",
                properties: {
                    code: { type: "string", example: "invalid_type" },
                    expected: { type: "string" },
                    received: { type: "number" },
                    path: {
                        type: "array", items: { type: "string" },
                        message: {
                            type: "string", example: "Expected string, received number"
                        }
                    }
                }
            }
        }
    }
}

export default swaggerSchemas
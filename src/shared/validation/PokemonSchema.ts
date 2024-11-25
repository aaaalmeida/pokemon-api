import { PokemonName } from "@shared/regex/PokemonName"
import { z } from "zod"

export const PokemonSchema = z.object({
    name: z.string().min(3).max(20),
    type: z.array(z.string().min(4).max(10).regex(PokemonName)),
    image: z.string(),
    size: z.optional(z.number().positive()),
    weight: z.optional(z.number().positive()),
    // TODO: permitir evolução
})
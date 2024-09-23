import { z } from "zod"

export const PokemonSchema = z.object({
  name: z.string().trim().min(3).regex(new RegExp(/^[a-zA-Z]+$/)),
  abilities: z.array(z.string().trim().regex(new RegExp(/^[a-zA-Z]+$/))).nonempty(),
  evolution: z.array(z.string().trim().min(3).regex(new RegExp(/^[a-zA-Z]+$/))).optional(),
  type: z.array(z.string().trim().toUpperCase().regex(new RegExp(/^[a-zA-Z]+$/))).nonempty()
})

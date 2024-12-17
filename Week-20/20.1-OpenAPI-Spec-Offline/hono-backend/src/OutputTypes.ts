import { z } from "@hono/zod-openapi";

// The output from the routes 
export const OutputParams = z.object({
    id: z.string().openapi({
        example: "123"
    }),
    name: z.string().openapi({
        example: "Amith B V"
    }),
    age: z.number().openapi({
        example: 24
    })
});
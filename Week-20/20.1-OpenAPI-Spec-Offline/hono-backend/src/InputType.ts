import { z } from "@hono/zod-openapi";

// The inputs from the user on the route
export const InputParams = z.object({
  id: z
    .string()
    .min(2)
    .max(10)
    .openapi({
      param: {
        name: "id",
        in: "path",
      },
      example: "10",
    }),
});
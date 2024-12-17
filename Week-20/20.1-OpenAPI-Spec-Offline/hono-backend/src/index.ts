import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import { InputParams } from "./InputType";
import { OutputParams } from "./OutputTypes";
import { swaggerUI } from "@hono/swagger-ui";

const app = new OpenAPIHono();

const route = createRoute({
  method: "get",
  path: "/user/{id}",
  request: {
    params: InputParams,
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: OutputParams,
        },
      },
      description: "Retrieve the user",
    },
  },
});

app.openapi(route, (c) => {
  const { id } = c.req.valid("param");
  return c.json({
    id: id,
    age: 24,
    name: "Amith B V",
  });
});

app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
  },
});

app.get("/ui", swaggerUI({ url: "/doc" }));

export default app;
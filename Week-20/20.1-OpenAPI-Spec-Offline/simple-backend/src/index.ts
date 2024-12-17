import express from "express";
import SwaggerUi from "swagger-ui-express";
import { openapispec } from "./openapispec";

const app = express();
const port = 3000;

app.use(express.json());

let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

app.get("/users", (req, res) => {
  const { name } = req.query;

  if (name) {
    const filteredUsers = users.filter((user) =>
      // @ts-ignore
      user.name.toLowerCase().includes(name.toLowerCase())
    );
    res.json(filteredUsers);
  } else {
    res.json(users);
  }
});

app.use("/documentation", SwaggerUi.serve, SwaggerUi.setup(openapispec));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
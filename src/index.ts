import express from "express";
import { middleware } from "./middleware";

const app = express();
const PORT = 3000;

app.use(middleware);

app.get("/", (req, res) => {
  res.send("Hello from Bun + Express!");
});

app.get("/user", (req, res) => {
  res.send({
    name: "Manoj Kumar",
    age: 25,
  });
});

app.post("/user", (req, res) => {
  const user = req.body;
  res.send({
    ...user,
    id: Math.floor(Math.random() * 1000),
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

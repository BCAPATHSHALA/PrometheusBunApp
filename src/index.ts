import express from "express";
// import { middleware } from "./middleware";
// import { requestCountMiddleware } from "./matrices/requestCount";
import client from "prom-client";
import { metricsMiddleware } from "./matrices";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(middleware);
// app.use(requestCountMiddleware);
app.use(metricsMiddleware);

app.get("/", (req, res) => {
  res.send("Hello from Bun + Express!");
});

app.get("/user", async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
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

app.get("/metrics", async (req, res) => {
  const metrics = await client.register.metrics();
  res.set("Content-Type", client.register.contentType);
  res.end(metrics);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

import express from "express";
import cors from "cors";

const dotenv = require("dotenv");

dotenv.config({
  path: "./.env",
});

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

app.use(express.json());
app.use(cors());

const todos = [] as any


app.get("/todos", (req, res) => {
  res.json(todos);
})

app.post("/todos", (req, res) => {
  todos.push({
    id: Math.random().toString(36).slice(2, 7),
    description: req.body.description,
    done: req.body.done
  });

  res.json(todos);

})

app.delete("/todos/:id", (req, res) => {
  todos.splice(todos.findIndex((todo: any) => todo.id === req.params.id), 1);

  res.json(todos);
})

app.put("/todos/:id", (req, res) => {
  const item = todos.find((todo: any) => todo.id === req.params.id);

  item.done = !item.done

  res.json(todos);
})
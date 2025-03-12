const Todo = require("../Models/TodoModel");

const getTodos = async (req, res) => {
  const allTodos = await Todo.find();
  res.status(200).json({ allTodos });
};

const createTodo = async (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Please provide a title" });
  }

  const newTodo = await Todo.create({ title, description });
  res.status(201).json({ newTodo });
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }
  await todo.deleteOne();
  res.status(200).json({ message: "Todo deleted successfully" });
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  console.log(title, description, completed);
  const todo = await Todo.findById(id);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }
  todo.title = title || todo.title;
  todo.description = description || todo.description;
  todo.completed = completed ?? todo.completed;
  await todo.save();
  res.status(200).json({ todo });
};
module.exports = { getTodos, createTodo, deleteTodo, updateTodo };

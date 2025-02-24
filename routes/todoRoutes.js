const express = require("express");
const router = express.Router();
const {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../Controllers/TodoController");

router.get("/", getTodos);
router.post("/", createTodo);
router.delete("/:id", deleteTodo);
router.put("/:id", updateTodo);

module.exports = router;

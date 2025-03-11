const express = require("express");
const { connectdb } = require("./Config/db");
require("dotenv").config();
const TodoRoutes = require("./routes/todoRoutes");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

// middleware
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Hello,World!");
});

app.use("/todos", TodoRoutes);

app.listen(port, async () => {
  await connectdb();
  console.log(`listening at http://localhost:${port}`);
});

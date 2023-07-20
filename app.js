require("./db/connect");
const PORT = 4000;
const express = require("express");
const app = express();
const tasks = require("./router/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware
app.use(express.json());

// routes:
app.get("/", (req, res) => {
  res.send("booweewooobie");
});

app.use("/tasks/", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();

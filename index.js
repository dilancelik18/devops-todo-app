const express = require("express");
const todos = require("./routes/todos");

const app = express();
app.use(express.json());
app.use("/todos", todos);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log());

module.exports = app; // test için export ediyoruz


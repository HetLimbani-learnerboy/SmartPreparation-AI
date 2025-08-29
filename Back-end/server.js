// server.js
const express = require("express");
const bodyParser = require("body-parser");
const questionRoutes = require("./routes/questionRoutes");

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/api", questionRoutes);
const PORT = 5021;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
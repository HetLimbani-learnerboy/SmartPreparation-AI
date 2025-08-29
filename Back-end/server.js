const express = require("express");
const cors = require("cors");
const questionRoutes = require("./routes/questionRoutes");

const app = express();
const PORT = 5021;

app.use(cors());
app.use(express.json());

app.use("/api/questions", questionRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

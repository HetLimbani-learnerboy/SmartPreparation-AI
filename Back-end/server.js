const express = require('express');
const cors = require('cors');
require('dotenv').config();

const questionRoutes = require('./routes/questionRoutes');

const app = express();
const PORT = process.env.PORT || 5021;


app.use(cors()); 
app.use(express.json()); 


app.get('/', (req, res) => {
  res.send('Quiz Backend API is up and running! 🚀');
});

app.use('/api/questions', questionRoutes);


app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
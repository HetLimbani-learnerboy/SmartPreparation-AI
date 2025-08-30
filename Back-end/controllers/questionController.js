// Import the model instead of the raw db connection
const Question = require("../models/Question");

const getRandomQuestions = async (req, res) => {
  try {
    const { branch } = req.params;
    
    // Call the model function to get the data
    const questions = await Question.findRandomByBranch(branch);
    
    res.status(200).json(questions);

  } catch (error) {
    // Catch errors from the model (like the 404 error) or the database
    console.error("Error in controller:", error);
    // Use the status code from the error if it exists, otherwise default to 500
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

module.exports = {
  getRandomQuestions,
};
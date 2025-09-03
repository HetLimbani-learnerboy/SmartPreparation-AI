const Question = require("../models/Question");

const getRandomQuestions = async (req, res) => {
  const { branch } = req.params;

  try {
    const questions = await Question.findRandomByBranch(branch);
    res.status(200).json(questions);
  } catch (error) {
    console.error("Error in controller:", error);
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

module.exports = { getRandomQuestions };

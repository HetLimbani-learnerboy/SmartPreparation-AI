const Question = require("../models/Question");

exports.addQuestion = async (req, res) => {
  const { question, option1, option2, option3, option4, answer, question_type } = req.body;
  const newQuestion = await Question.create({ question, option1, option2, option3, option4, answer, question_type });
  res.json(newQuestion);
};

exports.getQuestions = async (req, res) => {
  const questions = await Question.getAll();
  res.json(questions);
};

// ✅ Generate quiz by question_type (query param `type`)
exports.generateQuizByType = async (req, res) => {
  const type = req.query.type || req.params.type;
  if (!type) return res.status(400).json({ error: "Missing 'type' query/param" });

  const questions = await Question.getRandomByType(type, 10);
  res.json(questions);
};

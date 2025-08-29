// controllers/questionController.js
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

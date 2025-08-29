const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");

// Add question
router.post("/", questionController.addQuestion);

// All questions
router.get("/", questionController.getQuestions);

// ✅ Random 10 by question_type (query param)
router.get("/random", questionController.generateQuizByType);

// ✅ Optional alias using route param
router.get("/random/type/:type", questionController.generateQuizByType);

module.exports = router;
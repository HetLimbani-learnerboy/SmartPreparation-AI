// routes/questionRoutes.js
const express = require("express");
const router = express.Router();
const { addQuestion, getQuestions } = require("../controllers/questionController");

router.post("/questions", addQuestion);   // Add new question
router.get("/questions", getQuestions);   // Get all questions

module.exports = router;

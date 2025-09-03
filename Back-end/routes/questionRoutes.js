const express = require("express");
const router = express.Router();
const { getRandomQuestions } = require("../controllers/questionController");

// Route: /api/questions/:branch
router.get("/:branch", getRandomQuestions);

module.exports = router;

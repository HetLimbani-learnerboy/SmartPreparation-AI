// models/Question.js
const pool = require("../config/db");

class Question {
  static async create({ question, option1, option2, option3, option4, answer, question_type }) {
    const result = await pool.query(
      `INSERT INTO questions (question, option1, option2, option3, option4, answer, question_type) 
       VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
      [question, option1, option2, option3, option4, answer, question_type]
    );
    return result.rows[0];
  }

  static async getAll() {
    const result = await pool.query("SELECT * FROM questions");
    return result.rows;
  }
}

module.exports = Question;

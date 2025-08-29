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

  // ✅ 10 random by question_type
  static async getRandomByType(type, limit = 10) {
    const result = await pool.query(
      `SELECT id, question, option1, option2, option3, option4, answer, question_type
       FROM questions
       WHERE question_type = $1
       ORDER BY RANDOM()
       LIMIT $10`,
      [type, limit]
    );
    return result.rows;
  }
}

module.exports = Question;

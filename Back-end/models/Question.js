const db = require("../config/db");


const Question = {

  findRandomByBranch: async (branch) => {
    const questionTypesByBranch = {
      CSE: ["Cybersecurity", "Python", "Java", "DSA"],
      ICT: ["Networking", "Web Development"],
      "AI/ML": ["Machine Learning", "Deep Learning"],
    };

    const validTypes = questionTypesByBranch[branch];

    if (!validTypes || validTypes.length === 0) {
      // Instead of sending a response, we throw an error that the controller will catch.
      const error = new Error(`Branch '${branch}' not found or has no question types defined.`);
      error.statusCode = 404;
      throw error;
    }

    const sqlQuery = `  
      SELECT id, question, option1, option2, option3, option4, answer, question_type 
      FROM questions 
      WHERE question_type = ANY($1) 
      ORDER BY RANDOM() 
      LIMIT 10
    `;
    
    const { rows } = await db.query(sqlQuery, [validTypes]);
    return rows;
  }
};

module.exports = Question;
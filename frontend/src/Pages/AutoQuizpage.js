import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./AutoQuizpage.css";

const AutoQuizpage = () => {
  const [branch, setBranch] = useState("");
  const [quizData, setQuizData] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  // Fetch 10 random questions for the selected branch
  const handleGenerateQuiz = async () => {
    if (!branch) {
      alert("Please select a branch first!");
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:5021/api/questions/random/${branch}`
      );
      const data = await response.json();
      setQuizData(data);
      setAnswers({});
      setSubmitted(false);
    } catch (error) {
      console.error("Error fetching quiz:", error);
    }
  };

  const handleOptionChange = (qIndex, option) => {
    setAnswers((prev) => ({
      ...prev,
      [qIndex]: option,
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== quizData.length) {
      alert("Please answer all questions before submitting!");
      return;
    }
    setSubmitted(true);
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`Quiz Result - ${branch}`, 14, 15);

    const tableData = quizData.map((q, index) => [
      `Q${index + 1}: ${q.question}`,
      `Your Answer: ${answers[index]}`,
      `Correct Answer: ${q.answer}`,
    ]);

    doc.autoTable({
      head: [["Question", "Your Answer", "Correct Answer"]],
      body: tableData,
      startY: 25,
    });

    doc.save(`quiz_result_${branch}.pdf`);
  };

  // calculate score
  const score = quizData.reduce((acc, q, index) => {
    return answers[index] === q.answer ? acc + 1 : acc;
  }, 0);

  return (
    <div className="autoquizpage-container">
      <h1>Auto Quiz Generator Page</h1>
      <button onClick={() => navigate("/dashboard")} className="backbutton">
        Back to Dashboard
      </button>

      <div className="branch-selection">
        <label htmlFor="branch">Select Branch:</label>
        <select
          id="branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        >
          <option value="">--Select Branch--</option>
          <option value="CSE">CSE</option>
          <option value="ICT">ICT</option>
          <option value="AI/ML">AI/ML</option>
        </select>
      </div>

      {branch && (
        <div className="generate-container">
          <button onClick={handleGenerateQuiz} className="generate-btn">
            Generate Quiz
          </button>
        </div>
      )}

      {quizData.length > 0 && (
        <div className="quiz-container">
          <h2>Generated Quiz ({branch})</h2>
          <form>
            {quizData.map((q, index) => (
              <div key={index} className="question-block">
                <p>
                  <strong>Q{index + 1}:</strong> {q.question}
                </p>
                {[q.option1, q.option2, q.option3, q.option4].map(
                  (opt, i) => (
                    <label key={i} style={{ display: "block" }}>
                      <input
                        type="radio"
                        name={`q-${index}`}
                        value={opt}
                        checked={answers[index] === opt}
                        onChange={() => handleOptionChange(index, opt)}
                      />
                      {opt}
                    </label>
                  )
                )}
              </div>
            ))}
          </form>

          {!submitted ? (
            <button className="submit-btn" onClick={handleSubmit}>
              Submit Quiz
            </button>
          ) : (
            <div className="result-container">
              <h3>
                Result: You scored {score} / {quizData.length}
              </h3>
              <button className="download-btn" onClick={handleDownload}>
                Download Result
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AutoQuizpage;

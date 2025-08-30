import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
import "./AutoQuizpage.css";

// A helper function to shuffle arrays, used for randomizing question options
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const AutoQuizpage = () => {
  const [branch, setBranch] = useState("");
  const [quizData, setQuizData] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // useMemo shuffles the options only once when quizData is fetched
  const shuffledQuizData = useMemo(() => {
    return quizData.map(q => ({
      ...q,
      shuffledOptions: shuffleArray([q.option1, q.option2, q.option3, q.option4]),
    }));
  }, [quizData]);

  const handleGenerateQuiz = async () => {
    if (!branch) {
      alert("Please select a branch first!");
      return;
    }
    setLoading(true);
    setQuizData([]);
    setAnswers({});
    setSubmitted(false);
    try {
      const response = await fetch(`http://localhost:5021/api/questions/${branch}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `No questions found for ${branch}.`);
      }
      const data = await response.json();
      setQuizData(data);
    } catch (error) {
      alert(`Could not generate quiz: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleOptionChange = (questionId, option) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== quizData.length) {
      alert("Please answer all questions before submitting!");
      return;
    }
    const isConfirmed = window.confirm("Are you sure you want to submit your answers?");
    if (isConfirmed) {
      setSubmitted(true);
    }
  };

  const score = useMemo(() => {
    return quizData.reduce((acc, q) => {
      return answers[q.id] === q.answer ? acc + 1 : acc;
    }, 0);
  }, [quizData, answers, submitted]);


  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`Quiz Result - ${branch}`, 14, 22);
    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text(`Final Score: ${score} / ${quizData.length}`, 14, 30);

    const tableData = quizData.map((q, index) => {
        const userAnswer = answers[q.id] || "Not Answered";
        const isCorrect = userAnswer === q.answer;
        return [index + 1, q.question, userAnswer, q.answer, isCorrect ? "✅ Correct" : "❌ Incorrect"];
    });

    autoTable(doc, {
      head: [["No.", "Question", "Your Answer", "Correct Answer", "Result"]],
      body: tableData,
      startY: 35,
      headStyles: { fillColor: [44, 95, 45] }, // Dark Green
    });

    doc.save(`Quiz_Result_${branch}.pdf`);
  };

  const progress = (Object.keys(answers).length / quizData.length) * 100;

  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <h1>Auto Quiz Generator</h1>
        <p>Select your branch and generate a unique quiz in seconds.</p>
      </div>

      <div className="controls-container">
        <select id="branch" value={branch} onChange={(e) => setBranch(e.target.value)}>
          <option value="">-- Select Branch --</option>
          <option value="CSE">CSE</option>
          <option value="ICT">ICT</option>
          <option value="AI/ML">AI/ML</option>
        </select>
        <button onClick={handleGenerateQuiz} className="generate-btn" disabled={!branch || loading}>
          {loading ? "Generating..." : "Generate New Quiz"}
        </button>
      </div>

      {loading && <div className="loading-spinner"></div>}

      {shuffledQuizData.length > 0 && !loading && (
        <div className="quiz-body fadeIn">
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
          
          {shuffledQuizData.map((q, index) => (
            <div key={q.id} className="question-block">
              <p className="question-text"><strong>{index + 1}.</strong> {q.question}</p>
              <div className="options-group">
                {q.shuffledOptions.map((option, i) => {
                  const isCorrect = option === q.answer;
                  const isSelected = answers[q.id] === option;
                  let optionClass = "option-label";
                  if (submitted) {
                    if (isCorrect) optionClass += " correct";
                    else if (isSelected && !isCorrect) optionClass += " incorrect";
                  }

                  return (
                    <label key={i} className={optionClass}>
                      <input
                        type="radio"
                        name={`q-${q.id}`}
                        value={option}
                        checked={isSelected}
                        onChange={() => handleOptionChange(q.id, option)}
                        disabled={submitted}
                      />
                      {option}
                    </label>
                  );
                })}
              </div>
            </div>
          ))}

          {!submitted ? (
            <button className="submit-btn" onClick={handleSubmit}>
              Submit Quiz
            </button>
          ) : (
            <div className="result-container fadeIn">
              <h2>Quiz Complete!</h2>
              <h3>Your Score: {score} / {quizData.length}</h3>
              <p>Review your answers above. The correct answers are highlighted in green.</p>
              <button className="download-btn" onClick={handleDownload}>
                Download Result as PDF
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AutoQuizpage;
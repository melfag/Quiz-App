import { useState, useEffect } from "react";
import trueFalseAzerbaijan from "../data/trueFalseQuestions";
import Questions from "./Questions";
import { Link } from "react-router-dom";

function TrueFalse() {
  const [count, setCount] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleCorrectAnswer = (isCorrect) => {
    if (isCorrect) {
      console.log("correct answer!");
      setScore(score + 1);
    }
    const nextQuestion = count + 1;
    if (nextQuestion < trueFalseAzerbaijan.length) {
      setCount(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="App">
      {showScore ? (
        <section className="score">
          <li>
            <Link
              to="/"
              className="back-page-link"
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
          </li>
          <p>
            Score: <span className="score-number">{score}</span>
          </p>
        </section>
      ) : (
        <section>
          <li>
            <Link
              to="/"
              className="back-page-link"
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
          </li>

          <section className="multiple-questions">
            <h2>{trueFalseAzerbaijan[count].question}</h2>
            {trueFalseAzerbaijan[count].options.map((answerOption) => (
              <button
                className="move-buttons"
                onClick={() => handleCorrectAnswer(answerOption.isCorrect)}
              >
                {answerOption.option}
              </button>
            ))}
            <p className="question-number">
              Question No: {trueFalseAzerbaijan[count].number}
            </p>
          </section>

          {console.log("counter", count)}
        </section>
      )}
    </div>
  );
}

export default TrueFalse;

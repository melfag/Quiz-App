import { useState, useEffect } from "react";
import multipleAzerbaijan from "../data/multipleChoiceQuestions";
import Questions from "./Questions";
import { Link } from "react-router-dom";

function MultipleChoice() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);

  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {}, []);

  const handleTimer = () => {};

  const handleCorrectAnswer = (isCorrect) => {
    if (isCorrect) {
      console.log("correct answer!");
      setScore(score + 1);
    }
    const nextQuestion = count + 1;
    if (nextQuestion < multipleAzerbaijan.length) {
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
            Your Score: <span className="score-number">{score}</span>
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
            {
              // TODO: create a timer component instead: <p>Timer: </p>
            }
            <h2>{multipleAzerbaijan[count].question}</h2>
            {multipleAzerbaijan[count].options.map((answerOption) => (
              <button
                className="move-buttons"
                onClick={() => handleCorrectAnswer(answerOption.isCorrect)}
              >
                {answerOption.option}
              </button>
            ))}
            <p className="question-number">
              Question No: {multipleAzerbaijan[count].number}
            </p>
          </section>

          {console.log("counter", count)}
        </section>
      )}
    </div>
  );
}

export default MultipleChoice;

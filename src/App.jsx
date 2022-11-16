import { useEffect, useState } from "react";
import { jsQuestions } from "./data/questions";

function App() {
  // const [questions, setQuestions] = useState(jsQuestions);
  const [count, setCount] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const nextQuestionHandler = () => {
    setCount((count) => count + 1);
  };

  const previousQuestionHandler = () => {
    setCount((count) => count - 1);
  };

  const handleCorrectAnswer = (isCorrect) => {
    if (isCorrect) {
      console.log("correct answer!");
      setScore(score + 1);
    }

    // const nextQuestion = count + 1;
    // if (nextQuestion < jsQuestions.length) {
    //   setCount(nextQuestion);
    // } else {
    //   setShowScore(true);
    // }

    //   question[count].options.forEach((element) => {
    //     if (jsQuestions[count].answer === element) {
    //       alert("correct answer");
    //     }
    //     console.log("options: ", element);
    //   });
    //   if (question[count].answer === question[count].options) {
    //     alert("correct answer");
    //   }
    //   console.log("options", question[count].options[count]);
  };

  return (
    <div className="App">
      <h1 className="text-center bold text-3xl font-bold">Quiz App</h1>
      <section className="border flex flex-col gap-1">
        <section className="flex gap-5 p-4 border">
          <button
            className="bg-gray-400 border p-2 rounded hover:bg-gray-200"
            onClick={previousQuestionHandler}
          >
            Back
          </button>
          <h2 className="mt-2 font-bold text-lg">
            {jsQuestions[count].question}
          </h2>
          <button
            className="bg-gray-400 border p-2 rounded hover:bg-gray-200"
            onClick={nextQuestionHandler}
          >
            Next
          </button>
        </section>
        <section className="questions">
          {/* {jsQuestions.map((question) => (
          <button key={question.number}>
          {question[count].options[count]}
          </button>
        ))} */}

          {jsQuestions[count].options.map((answerOption) => (
            <button
              className="bg-gray-500 border text-white p-2 rounded hover:bg-gray-200"
              onClick={() => handleCorrectAnswer(answerOption.isCorrect)}
            >
              {answerOption.option}
            </button>
          ))}

          {/* {question[count].options.forEach((element) => {
          <button key={question.number} onClick={handleCorrectAnswer}>
            {element}
            </button>;
            console.log("options: ", element);
          })} */}
          {/* <button onClick={handleCorrectAnswer}>
          {question[count].options[0]}
        </button>{" "}
        <button>{question[count].options[1]}</button>
        <button>{question[count].options[2]}</button>
        <button>{question[count].options[3]}</button> */}
          {/* <button>{jsQuestions[count].options[count]}</button>
        <button>{jsQuestions[count].options[count]}</button>
      <button>{jsQuestions[count].options[count]}</button> */}
        </section>

        {/* {console.log(jsQuestions[0].answer)} */}
        {console.log("counter", count)}
      </section>
    </div>
  );
}

export default App;

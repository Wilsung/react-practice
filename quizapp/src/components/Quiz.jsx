import { useState, useEffect, useCallback } from "react";

import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";

import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

const TIMER = 15000;

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleTimerUp = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Quiz Complete image." />
        <h2>Done!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <div id="question">
        {/* <QuestionTimer
          key={activeQuestionIndex}
          timeout={TIMER}
          onTimerUp={handleTimerUp}
        /> */}
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <Answers
          key={activeQuestionIndex}
          answers={QUESTIONS[activeQuestionIndex].answers}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          onSelect={handleSelectAnswer}
        />
      </div>
    </div>
  );
}

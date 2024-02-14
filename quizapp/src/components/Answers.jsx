import { useRef } from "react";

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = answers.toSorted(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelect(answer)}>{answer}</button>
          </li>
        );
      })}
    </ul>
  );
}

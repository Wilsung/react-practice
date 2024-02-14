import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimerUp }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(() => {
      onTimerUp();
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimerUp]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
}

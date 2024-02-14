import { useState, createContext } from "react";

export const QuestionContext = createContext({
  questions: [],
});

const ctxValue = {
  items: shoppingCartState.items,
};

export default function QuestionContextProvider({ children }) {
    const [userAnswers, setUserAnswers] = useState([]);
  return (
    <QuestionContext.Provider value={ctxValue}>
      {children}
    </QuestionContext.Provider>
  );
}

import "./App.css";
import { useEffect, useReducer, useState } from "react";
import Loading from "./Loading";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";

function App() {
  const initialState = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
  };

  function ReducerFunction(state, action) {
    switch (action.type) {
      case "takeQuiz":
        return { ...state, questions: action.payload, status: "ready" };
      case "start":
        return { ...state, status: "active" };
      case "newAnswer":
        return {
          ...state,
          answer: action.payload.option,
          points:
            action.payload.option === action.payload.correct
              ? state.points + 10
              : state.points,
        };
      case "nextQuestion":
        return { ...state, index: state.index + 1, answer: null };
      case "finish":
        return { ...state, status: "finished" };
      case "restart":
        return { ...initialState, questions: state.questions, status: "ready" };
    }
  }
  const [state, dispatch] = useReducer(ReducerFunction, initialState);

  const { questions, status, index, answer, points } = state;

  const numQuestions = questions.length;

  useEffect(() => {
    const getQuestions = async () => {
      const res = await fetch("https://opentdb.com/api.php?amount=10");
      const data = await res.json();

      dispatch({ type: "takeQuiz", payload: data.results });
    };
    getQuestions();
  }, []);

  return (
    <div className="App">
      <main className="main-wrapper">
        <div>{status === "loading" && <Loading />}</div>
        <div>
          {status === "ready" && (
            <StartScreen dispatch={dispatch} numQuestions={numQuestions} />
          )}
        </div>
        <div>
          {status === "active" && (
            <>
              <Progress
                index={index}
                numQuestions={numQuestions}
                points={points}
              />
              <Question
                dispatch={dispatch}
                answer={answer}
                question={questions[index]}
              />
              <NextButton
                numQuestions={numQuestions}
                dispatch={dispatch}
                answer={answer}
                index={index}
              />
            </>
          )}
        </div>
        <div>
          {status === "finished" && (
            <FinishedScreen points={points} dispatch={dispatch} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

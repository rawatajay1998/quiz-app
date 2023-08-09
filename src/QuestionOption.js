import React from "react";

const QuestionOption = ({ question, dispatch, answer }) => {
  const answerOptions = [
    ...question.incorrect_answers,
    question.correct_answer,
  ];

  const answerOptionsArr = answerOptions.sort();

  const hasAnswered = answer !== null;

  return (
    <>
      {answerOptionsArr.map((option, index) => {
        return (
          <button
            className={`answer-option ${
              hasAnswered && option === question.correct_answer ? "correct" : ""
            } ${
              hasAnswered && option !== question.correct_answer
                ? "incorrectAnswer"
                : ""
            }`}
            key={option}
            disabled={hasAnswered}
            onClick={() =>
              dispatch({
                type: "newAnswer",
                payload: { option, correct: question.correct_answer },
              })
            }
          >
            <span className="count ">{index + 1}</span>
            <span className="answer-text">{option}</span>
          </button>
        );
      })}
    </>
  );
};

export default QuestionOption;

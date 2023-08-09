import React from "react";
import QuestionOption from "./QuestionOption";

const Question = ({ question, dispatch, answer }) => {
  return (
    <>
      <h3 className="question">{question.question}</h3>
      <QuestionOption dispatch={dispatch} answer={answer} question={question} />
    </>
  );
};

export default Question;

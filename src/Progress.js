import React from "react";

const Progress = ({ numQuestions, index, points }) => {
  return (
    <header className="progress">
      <p>
        <input type="range" value={index} max={numQuestions} />
      </p>
      <p>
        Question : {index + 1} / {numQuestions}
      </p>
      <p>
        <strong>Points : {points} / 100</strong>
      </p>
    </header>
  );
};

export default Progress;

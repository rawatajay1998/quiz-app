import React from "react";

const FinishedScreen = ({ points, dispatch }) => {
  return (
    <div className="text-center">
      <p>
        <strong>You scored {points} out of 100 points</strong>
      </p>
      <button className="btn" onClick={() => dispatch({ type: "restart" })}>
        Restart Quiz
      </button>
    </div>
  );
};

export default FinishedScreen;

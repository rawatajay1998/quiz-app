function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start-screen">
      <h1>Welcome to the Quiz</h1>
      <p>
        Please pass the test of total <strong>{numQuestions}</strong> questions.
      </p>
      <button className="btn" onClick={() => dispatch({ type: "start" })}>
        Please Start test
      </button>
    </div>
  );
}

export default StartScreen;

import "./App.css";
import { useReducer, useState } from "react";

function ReucerTutorial() {
  // 1. By using state method
  // const [count, setCount] = useState(1);
  // const [incrementBy, setIncrementBY] = useState(1);

  // function onAddhandler(e) {
  //   setCount(() => count + incrementBy);
  // }
  // function onSubtracthandler(e) {
  //   setCount(() => count - incrementBy);
  // }

  // function onChangeHandler(e) {
  //   setIncrementBY(() => Number(e.target.value));
  // }
  // function onResetHandler() {
  //   setCount(1);
  //   setIncrementBY(1);
  // }

  // 2. By using state method
  const initialState = {
    count: 0,
  };

  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const { count } = state;

  function onAddhandler() {
    dispatch({ type: "inc", payload: 1 });
  }
  function onSubtracthandler() {
    dispatch({ type: "dec", payload: -1 });
  }

  function onChangeHandler(e) {
    dispatch({
      type: "setCount",
      payload: Number(e.target.value),
    });
  }
  function onResetHandler() {
    dispatch({
      type: "reset",
    });
  }

  function reducerFunction(state, action) {
    switch (action.type) {
      case "inc": {
        return { count: state.count + 1 };
      }
      case "dec": {
        return { count: state.count - 1 };
      }
      case "setCount": {
        return { count: state.count + action.payload };
      }
      case "reset": {
        return { count: initialState.count };
      }
    }
  }

  return (
    <div className="App">
      <button onClick={onAddhandler}>+</button>
      <input onChange={onChangeHandler} />
      <button onClick={onSubtracthandler}>-</button>

      <button onClick={onResetHandler}>Reset</button>

      <p>{count}</p>
    </div>
  );
}

export default ReucerTutorial;

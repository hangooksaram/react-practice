import React, { useReducer } from "react";

function reducerCounter(state, action) {
  switch (action.type) {
    case "INCREASE":
      return { number: state.number + 1 };
    case "DECREASE":
      return { number: state.number - 1 };
    default:
      return state;
  }
}

const UseReudcerPage = () => {
  const [state, dispatch] = useReducer(reducerCounter, { number: 0 });
  return (
    <div>
      값 : {state.number}
      <div>
        <button onClick={() => dispatch({ type: "INCREASE" })}>+1</button>
        <button onClick={() => dispatch({ type: "DECREASE" })}>-1</button>
      </div>
    </div>
  );
};

export default UseReudcerPage;

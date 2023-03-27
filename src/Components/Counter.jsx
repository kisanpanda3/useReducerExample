import React, { useReducer } from "react";
const initialState = {
  count: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increament":
      return {
        ...state,
        count: state.count + 1
      };
    case "decreament":
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Counter</h1>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: "decreament" })}> - </button>
      <button onClick={() => dispatch({ type: "increament" })}> + </button>
    </>
  );
}
export default Counter;

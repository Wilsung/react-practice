import classes from "./Counter.module.css";

import { useSelector, useDispatch } from "react-redux"; //we can also import useStore here.
import { counterActions } from "../store/counter.js";
const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter); //this extracts the part of
  //the state we want to use - useful if we want a part of state that is nested.

  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // {type: IDENTIFIER, payload: 10 }
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

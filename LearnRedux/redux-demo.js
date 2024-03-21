const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => { //set default state here.
  if (action.type === 'increment'){
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'decrement'){
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer); //the store need to know which reducer is being used.
//this runs counterReducer on initialization.

const counterSubscriber = () => {
  const latestState = store.getState(); //this method is provided by store.
  console.log(latestState);
};

store.subscribe(counterSubscriber); //expects a subscriber function that redux
//executes when data changes.


store.dispatch({type: 'increment'}); //action with a type
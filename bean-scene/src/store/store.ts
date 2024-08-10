// store/store.ts
import { createStore, combineReducers } from 'redux';

const initialState = {
  value: 0,
};

function exampleReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + 1 };
    case 'DECREMENT':
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  example: exampleReducer,
});

const store = createStore(rootReducer);

export default store;

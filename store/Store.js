import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "./Saga";
const sagaMiddleware = createSagaMiddleware();

const UserInputReducer = (state = "", action) => {
  switch (action.type) {
    case "USER_INPUT":
      return action.payload;
    default:
      return state;
  }
};

export const userInput = (data) => {
  return {
    type: "USER_INPUT",
    payload: data,
  };
};
////////////////////////////////////////////////
export const CounterReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADDER":
      return state + 1;
    default:
      return state;
  }
};

export const adder = () => {
  return {
    type: "ADDER",
  };
};
////////////////////////////////////
const initialState = {
  user: [],
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PEOPLE":
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    default:
      return state;
  }
};
/////////////////////
export const addpeople = (data) => {
  return {
    type: "ADD_PEOPLE",
    payload: data,
  };
};

//////////////////////

export const requestPeople = () => {
  return {
    type: "REQUEST_PEOPLE",
  };
};

export const AllReducers = combineReducers({
  CounterReducer,
  UserReducer,
  UserInputReducer,
});

export const store = createStore(AllReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

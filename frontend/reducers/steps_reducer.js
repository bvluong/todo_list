import {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP,
  receiveSteps,
  receiveStep,
  removeStep
} from '../actions/step_actions';
import merge from 'lodash/merge';

const initialState = {
    1: { // this is the step with id = 1
      id: 1,
      title: "walk to store",
      body: "Went to go go get milk",
      done: false,
      todo_id: 1
    },
    2: { // this is the step with id = 2
      id: 2,
      title: "buy soap",
      body: "Go to Traders Joes in the soap section",
      done: false,
      todo_id: 1
    }
  };


const stepsReducer = (state = initialState,action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_STEPS:
      newState = merge({}, state);
      action.steps.forEach( step => { newState[step.id] = step; } );
      return newState;
    case RECEIVE_STEP:
      newState = merge({}, state);
      newState[action.step.id] = action.step;
      return newState;
    case REMOVE_STEP:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default stepsReducer;

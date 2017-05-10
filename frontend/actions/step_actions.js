import * as StepAPIUtil from '../util/step_api_util';
import { receiveErrors } from "./error_actions";

export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";

export const receiveSteps = (steps) => ({
  type: RECEIVE_STEPS,
  steps
});

export const receiveStep = (step) => ({
  type: RECEIVE_STEP,
  step
});

export const removeStep = ({ id }) => ({
  type: REMOVE_STEP,
  id
});

export const fetchSteps = (todo_id) => dispatch => (
  StepAPIUtil.fetchSteps(todo_id)
    .then(steps => dispatch(receiveSteps(steps)))
);

export const createStep = (step) => dispatch => (
  StepAPIUtil.createStep(step)
    .then(
      resStep => dispatch(receiveStep(resStep)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const updateStep = (step) => dispatch => (
  StepAPIUtil.updateStep(step)
    .then(
      resStep => dispatch(receiveStep(resStep)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const deleteStep = (id) => dispatch => (
  StepAPIUtil.deleteStep(id)
    .then(
      resStep => dispatch(removeStep(resStep))
    )
);

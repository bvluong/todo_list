import * as TodoAPIUtil from '../util/todo_api_util';
import { receiveErrors } from "./error_actions";

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = ( {id} ) => ({
  type: REMOVE_TODO,
  id
});

export const fetchTodos = () => dispatch => (
  TodoAPIUtil.fetchTodos()
    .then(todos => dispatch(receiveTodos(todos)))
);

export const createTodo = (todo) => dispatch => (
  TodoAPIUtil.createTodo(todo)
    .then(
      resTodo => dispatch(receiveTodo(resTodo)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const updateTodo = (todo) => dispatch => (
  TodoAPIUtil.updateTodo(todo)
    .then(
      resTodo => dispatch(receiveTodo(resTodo)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const deleteTodo = (id) => dispatch => (
  TodoAPIUtil.deleteTodo(id)
    .then(
      resTodo => dispatch(removeTodo(resTodo))
    )
);

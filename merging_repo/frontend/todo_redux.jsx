import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

//testing
import { allTodos, stepsByToDoId } from './reducers/selector';
import {RECEIVE_TODOS, RECEIVE_TODO, receiveTodos, receiveTodo } from './actions/todo_actions';

window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;

const store = configureStore();
window.store = store;

window.allTodos = allTodos;
window.stepsByToDoId = stepsByToDoId;

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  ReactDOM.render(<Root store = { store } />, content);
} );

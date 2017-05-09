import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

//testing
import { fetchTodos, createTodo } from './actions/todo_actions';

const store = configureStore();
window.store = store;

window.fetchTodos = fetchTodos;
window.createTodo = createTodo;

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  ReactDOM.render(<Root store = { store } />, content);
} );

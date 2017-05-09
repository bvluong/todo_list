import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

//testing
import { fetchTodos } from './actions/todo_actions';

const store = configureStore();
window.store = store;

window.fetchTodos = fetchTodos;

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  ReactDOM.render(<Root store = { store } />, content);
} );

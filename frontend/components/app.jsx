import React from "react";
import TodoListContainer from './todo_list/todo_list_container';

const App = () => (
  <div className='todos-app'>
    <h1>My Super Awesome Todo List</h1>
    <TodoListContainer />
  </div>
);

export default App;

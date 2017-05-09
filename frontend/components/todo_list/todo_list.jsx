import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    debugger
    const { todos, receiveTodo, createTodo, removeTodo } = this.props;
    return  (
      <div className = "todo-list">
        <ul>
          {
            todos.map((todo, i) => <TodoListItem
              key={i}
              todo = {todo}
              removeTodo = { removeTodo }
              receiveTodo = { receiveTodo } />)
          }
        </ul>
        <TodoForm createTodo = {createTodo}/>
      </div>
    );
  }
}

export default TodoList;

import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const {
      todos,
      updateTodo,
      createTodo,
      deleteTodo,
      errors,
      clearErrors
    } = this.props;

    return  (
      <div className = "todo-list">
        <ul>
          {
            todos.map((todo, i) => <TodoListItem
              key={i}
              todo = {todo}
              deleteTodo = { deleteTodo }
              updateTodo = { updateTodo } />)
          }
        </ul>
        <TodoForm
          errors={errors}
          clearErrors={clearErrors}
          createTodo = {createTodo}/>
      </div>
    );
  }
}

export default TodoList;

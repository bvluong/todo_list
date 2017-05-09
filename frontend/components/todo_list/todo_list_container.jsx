import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selector';
import { removeTodo, fetchTodos, createTodo } from '../../actions/todo_actions';

const mapStateToProps = (state) => {
  return { todos: allTodos(state) };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    createTodo: (todo) => dispatch(createTodo(todo)),
    removeTodo: (id) => dispatch(removeTodo(id)),
    fetchTodos: () => dispatch(fetchTodos()),
   };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

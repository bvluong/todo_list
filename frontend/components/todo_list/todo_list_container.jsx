import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selector';
import { deleteTodo, fetchTodos, createTodo, updateTodo } from '../../actions/todo_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state) => {
  return {
    todos: allTodos(state),
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTodo: (todo) => dispatch(updateTodo(todo)),
    createTodo: (todo) => dispatch(createTodo(todo)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    fetchTodos: () => dispatch(fetchTodos()),
    clearErrors: () => dispatch(clearErrors())
   };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

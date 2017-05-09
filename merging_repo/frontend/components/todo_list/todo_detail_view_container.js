import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
import { removeTodo } from '../../actions/todo_actions';
import { receiveSteps } from '../../actions/step_actions';

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id)),
  receiveSteps: (steps) => dispatch(receiveSteps(steps))
});

export default connect(mapDispatchToProps)(TodoDetailView);

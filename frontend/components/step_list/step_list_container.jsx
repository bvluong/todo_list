import { connect } from 'react-redux';
import StepList from './step_list';
import { receiveStep } from '../../actions/step_actions';
import { stepsByToDoId } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
  let { todoId } = ownProps;
  return {
    todoId,
    steps: stepsByToDoId(state, todoId)
  };
};

const mapDispatchToProps = dispatch => ({
  receiveStep: step => dispatch(receiveStep(step))
});

const StepListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);

export default StepListContainer;

import { connect } from 'react-redux';
import StepList from './step_list';
import { createStep, fetchSteps } from '../../actions/step_actions';
import { stepsByToDoId } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
  let { todoId } = ownProps;
  return {
    todoId,
    steps: stepsByToDoId(state, todoId)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSteps: () => dispatch(fetchSteps(ownProps.todoId)),
  createStep: step => dispatch(createStep(step))
});

const StepListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);

export default StepListContainer;

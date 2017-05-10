import { connect } from 'react-redux';
import StepListItem from './step_list_item';
import { deleteStep, updateStep } from '../../actions/step_actions';

const mapStateToProps = (state, ownProps) => ({
  step: ownProps.step
});

const mapDispatchToProps = dispatch => ({
  deleteStep: id => dispatch(deleteStep(id)),
  updateStep: step => dispatch(updateStep(step))
});

export default connect(mapStateToProps, mapDispatchToProps)(StepListItem);

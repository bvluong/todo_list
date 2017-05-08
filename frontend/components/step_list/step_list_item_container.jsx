import { connect } from 'react-redux';
import StepListItem from './step_list_item';
import { removeStep, receiveStep } from '../../actions/step_actions';

const mapStateToProps = (state, ownProps) => ({
  step: ownProps.step
});

const mapDispatchToProps = dispatch => ({
  removeStep: id => dispatch(removeStep(id)),
  receiveStep: step => dispatch(receiveStep(step))
});

export default connect(mapStateToProps, mapDispatchToProps)(StepListItem);

import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

class StepList extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSteps();
  }

  render() {
    return (
      <div className='step-list'>
        <ul>
          {
            this.props.steps.map(
              (step, i) => <StepListItemContainer key={i} step={step}/>
            )
          }
        </ul>
        <StepForm
          todoId={this.props.todoId}
          createStep={this.props.createStep}/>
      </div>
    );
  }
}

export default StepList;

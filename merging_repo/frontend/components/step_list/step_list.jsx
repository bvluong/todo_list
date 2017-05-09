import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

class StepList extends React.Component{
  constructor(props) {
    super(props);
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
          receiveStep={this.props.receiveStep}/>
      </div>
    );
  }
}

export default StepList;

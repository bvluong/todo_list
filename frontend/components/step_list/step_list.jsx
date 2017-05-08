import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

class StepList extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.steps)
    return (
      <div className='step-list'>
        <ul>
          {
            this.props.steps.map(
              (step, i) => <StepListItemContainer key={step.id} step={step}/>
            )
          }
        </ul>
        <StepForm receiveStep={this.props.receiveStep}/>
      </div>
    );
  }
}

export default StepList;

import React from 'react';

class StepListItem extends React.Component {
  constructor(props) {
    super(props);
    this.updateStep = this.updateStep.bind(this);
    this.remove = this.remove.bind(this);
  }

  // componentWillReceiveProps() {debugger}

  updateStep() {
    let updatedStep = Object.assign({}, this.props.step);
    // updatedStep.done = updatedStep.done? false : true;
    updatedStep.done = !updatedStep.done;
    this.props.receiveStep(updatedStep);
  }

  remove() {
    this.props.removeStep(this.props.step.id);
  }

  render() {
    let { id, title, done, body } = this.props.step;
    const doneString =  done? "Undo" : "Done";

    return (
      <div>
        <span>{title}</span>
        <span>{body}</span>
        <button onClick={this.updateStep}>{doneString}</button>
        <button onClick={this.remove}>Remove Step</button>
      </div>
  );
  }
}

export default StepListItem;

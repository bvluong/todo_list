import React from 'react';

class StepListItem extends React.Component {
  constructor(props) {
    super(props);
    this.updateStep = this.updateStep.bind(this);
    this.removeStep = this.removeStep.bind(this);
  }


  updateStep() {
    let updatedStep = Object.assign({}, this.props.step);
    updatedStep.done = !updatedStep.done;
    this.props.updateStep(updatedStep);
  }

  removeStep() {
    this.props.deleteStep(this.props.step.id);
  }

  render() {
    let { id, title, done, body } = this.props.step;
    const doneString =  done? "Undo" : "Done";

    return (
      <div className="step-list-item">
        <div>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
        <aside>
          <button onClick={this.updateStep}>{doneString}</button>
          <button onClick={this.removeStep}>Delete</button>
        </aside>
      </div>
  );
  }
}

export default StepListItem;

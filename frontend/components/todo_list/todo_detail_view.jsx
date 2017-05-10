import React from 'react';
import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
  }

  remove() {
    this.props.deleteTodo(this.props.id);
  }

  render() {
    const { id, body } = this.props;
    return (
      <div className='todo-detail-view'>
        <p>{body}</p>
        <StepListContainer todoId={id}/>
        <button onClick={this.remove}>Remove Todo</button>
      </div>
    );
  }
}

export default TodoDetailView;

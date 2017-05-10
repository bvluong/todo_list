import React from 'react';
import { uniqueId } from '../../util/util';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', body: ''};

    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  updateTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  updateBody(e) {
    this.setState({
      body: e.target.value
    });
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.createStep({
      title: this.state.title,
      body: this.state.body,
      todo_id: this.props.todoId
    })
    .then( () => this.setState({title: '', body: ''})
    );
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label>Title:
          <input
            type="text"
            onChange={this.updateTitle}
            value={this.state.title}
            placeholder="buy milk"/>
        </label>
        <label>Body:
          <textarea onChange={this.updateBody} value={this.state.body}/>
        </label>
        <input type="submit" value= "Create Step!"/>
      </form>
    );
  }

}

export default StepForm;

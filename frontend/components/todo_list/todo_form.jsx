import React from 'react';
import { uniqueId } from '../../util/util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', body: '', tag_names: [], newTagName: ''};

    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.updateTagName = this.updateTagName.bind(this);
    this.addTag = this.addTag.bind(this);
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
    this.props.createTodo(this.state)
      .then(() => this.setState({title: '', body: '', tag_names: []}))
      .then(() => this.props.clearErrors());
  }

  updateTagName(e) {
    this.setState({newTagName: e.target.value})
  }

  addTag(e) {
    e.preventDefault();
    let newTagName = this.state.newTagName;
    this.setState({
      tag_names: this.state.tag_names.concat(newTagName),
      newTagName: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.submitHandler} className="todo-form">
        <label>Title:
          <p> {this.props.errors }</p>
          <input
            type="text"
            onChange={this.updateTitle}
            value={this.state.title}
            placeholder="buy milk"/>
        </label>
        <label>Body:
          <textarea onChange={this.updateBody} value={this.state.body}/>
        </label>
        <div className='tags'>
          <ul>
            {
              this.state.tag_names.map(
                (tagName, i) => <li key={i}>{tagName}</li>
            )}
          </ul>
          <input
            type='text'
            placeholder='new tag'
            value={this.state.newTagName}
            onChange={this.updateTagName}/>
          <button
            type='button'
            onClick={this.addTag}>Add Tag</button>
        </div>
        <input type="submit" value= "Create Todo!"/>
      </form>
    );
  }

}

export default TodoForm;

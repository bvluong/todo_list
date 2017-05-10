import React from 'react';
import TodoDetailView from './todo_detail_view';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {detail: false};
    this.updateTodo = this.updateTodo.bind(this);
    this.updateDetail = this.updateDetail.bind(this);
  }

  updateTodo() {
    let updatedTodo = Object.assign({}, this.props.todo);
    updatedTodo.done = !updatedTodo.done;
    this.props.updateTodo(updatedTodo);
  }

  updateDetail() {
    let detail = this.state.detail? false : true;
    this.setState({detail});
  }

  render () {
    let { id, title, done, body } = this.props.todo;
    let detailView = null;
    if (this.state.detail) {
      detailView = <TodoDetailView
        id={id}
          body={body}
          deleteTodo={this.props.deleteTodo}/>;
    }
    const doneString =  done? "Undo" : "Done";
    return (
      <li className='todo-list-item'>
        <h3 onClick={this.updateDetail}>{title}</h3>
        <button onClick={this.updateTodo}>{doneString}</button>
        {detailView}
      </li>
    );
  }
}

export default TodoListItem;

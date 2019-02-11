import React from 'react';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    //only need to bind for click handlers
    this.onEditClick = this.onEditClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  renderActionSection() {
    if (this.state.isEditing) {
      return (
        <td className="todo-action-buttons">
          <button onClick={this.onSaveClick}>SAVE</button>
          <button onClick={this.onCancelClick}>CANCEL</button>
        </td>
      )
    }

    return (
      <td className="todo-action-buttons">
        <button onClick={this.onEditClick}>EDIT</button>
        <button onClick={this.onDeleteClick}>DELETE</button>
      </td>
    )
  }

  //render so that when task is COMPLETE - shows GREEN; INCOMPLETE - shows RED
  renderTaskSection() {
    const { task, isCompleted, toggleTask } = this.props;
    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    }
    const wrappedToggleTask = () => {
      toggleTask(task);
    }

    if (this.state.isEditing) {
      return (
        <td >
          <form onSubmit={this.onSaveClick}>
            <input type="text" defaultValue={task} ref="editInput" />
          </form>
        </td>
      )
    }

    return (
      <td className="todo-item" style={taskStyle} onClick={wrappedToggleTask}>
        {task}
      </td>
    )
  }

  render() {
    return (
      <tr>
        {this.renderTaskSection()}
        {this.renderActionSection()}
      </tr>
    )
  }

  onEditClick() {
    this.setState({ isEditing: true });
  }

  onCancelClick() {
    this.setState({ isEditing: false });
  }

  onSaveClick() {
    const { task, saveTask } = this.props;
    this.setState({ isEditing: false });
    const newTask = this.refs.editInput.value;
    saveTask(task, newTask);
  }

  onDeleteClick() {
    const { task, deleteTask } = this.props;
    deleteTask(task);
  }

}


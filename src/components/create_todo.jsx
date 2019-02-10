import React from 'react';

export default class CreateTodo extends React.Component {

  handleCreate() {
    return (e) => {
      e.preventDefault();
      const { createTodo } = this.props;
      let newTodo = this.refs.createInput.value;
      createTodo(newTodo);
      this.refs.createInput.value = "";
    };
  }

  render() {
    //by invoking handleCreate and using ES6 syntax, you don't need to bind! If you do not invoke handleCreate, you need to bind
    return (
      <form onSubmit={this.handleCreate()}>
        <input type="text" placeholder="What do I need to do?" ref="createInput" />
        <button>Create</button>
      </form>
    )
  }
}
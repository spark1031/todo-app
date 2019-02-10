import React from 'react';
import TodoList from './todo_list';

const todos = [
  {
    task: "make React tutorial",
    isCompleted: true
  },
  {
    task: "eat dinner",
    isCompleted: true
  }
]

export default class App extends React.Component {
  //make list of todos part of App's local state
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
  }

  render() {
    return (
      <div>
        <h1>React ToDo App</h1>
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}
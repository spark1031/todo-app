import React from 'react';
import TodoList from './todo_list';
import CreateTodo from './create_todo';
import _ from 'lodash';

const todos = [
  {
    task: "make React tutorial",
    isCompleted: true
  },
  {
    task: "eat dinner",
    isCompleted: false
  }
]

export default class App extends React.Component {
  //make list of todos part of App's local state
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
    this.createTodo = this.createTodo.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
  }

  createTodo(task) {
    const { todos } = this.state;
    todos.push({
      task,
      isCompleted: false
    });
    this.setState({
      todos
    });
  }

  toggleTask(task) {
    //find the todo in the array
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    //change the isCompleted to the opposite of what it is
    foundTodo.isCompleted = !foundTodo.isCompleted;
    console.log(foundTodo);
    // console.log(this.state.todos);
    this.setState = ({
      todos: this.state.todos
    });
  }

  render() {
    return (
      <div>
        <h1>React ToDo App</h1>
        <CreateTodo createTodo={this.createTodo} />
        <TodoList todos={this.state.todos} toggleTask={this.toggleTask} />
      </div>
    )
  }
}
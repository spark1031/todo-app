import React from 'react';
import TodoListHeader from './todo_list_header';
import TodoListItem from './todo_list_item';
import _ from 'lodash';

export default class TodoList extends React.Component {
  renderItems() {
    return (_.map(this.props.todos, (todo, index) => <TodoListItem key={index} {...todo} />));
  }

  render() {
    return (
      <table>
        <TodoListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    )
  }
}
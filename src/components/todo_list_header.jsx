import React from 'react';

export default class TodoListHeader extends React.Component {
  render() {
    return (
      <thead className="todo-header">
        <tr>
          <th>Task</th>
          <th>Action</th>
        </tr>
      </thead>
    )
  }
}
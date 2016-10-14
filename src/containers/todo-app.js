import React, { Component, PropTypes } from 'react';

import AddTodo from './../components/add-todo';
import FilterLink from './../components/filter-link';
import TodoList from './../components/todo-list';

const { array, func } = PropTypes;

class TodoApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AddTodo onAddClick={this.props.onAddClick} />
                <TodoList todos={this.props.todos} onTodoClick={this.props.onTodoClick} />
                <li><FilterLink onFilterClick={ this.props.onFilterClick } filter='SHOW ALL'>All</FilterLink></li>
                <li><FilterLink onFilterClick={ this.props.onFilterClick } filter='SHOW ACTIVE'>Active</FilterLink></li>
                <li><FilterLink onFilterClick={ this.props.onFilterClick } filter='SHOW COMPLETED'>Completed</FilterLink></li>
            </div>
        );
    }
}

TodoApp.propTypes = {
    onAddClick: func.isRequired,
    onFilterClick: func.isRequired,
    onTodoClick: func.isRequired,
    todos: array.isRequired,
};

export default TodoApp;

import React, { Component, PropTypes } from 'react';

import AddTodo from './../components/add-todo';
import FilterLink from './../components/filter-link';
import TodoList from './../components/todo-list';

const { array, func, string } = PropTypes;

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
    }
};

class TodoApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(getVisibleTodos(this.props.todos, this.props.visibilityFilter));
        return (
            <div>
                <AddTodo onAddClick={this.props.onAddClick} />
                <TodoList
                    todos={ getVisibleTodos(this.props.todos, this.props.visibilityFilter) }
                    onTodoClick={this.props.onTodoClick} />
                <li><FilterLink onFilterClick={ this.props.onFilterClick } filter='SHOW_ALL'>All</FilterLink></li>
                <li><FilterLink onFilterClick={ this.props.onFilterClick } filter='SHOW_ACTIVE'>Active</FilterLink></li>
                <li><FilterLink onFilterClick={ this.props.onFilterClick } filter='SHOW_COMPLETED'>Completed</FilterLink></li>
            </div>
        );
    }
}

TodoApp.propTypes = {
    onAddClick: func.isRequired,
    onFilterClick: func.isRequired,
    onTodoClick: func.isRequired,
    todos: array.isRequired,
    visibilityFilter: string.isRequired,
};

export default TodoApp;

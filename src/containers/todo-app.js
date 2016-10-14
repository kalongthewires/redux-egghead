import React, { Component, PropTypes } from 'react';

import AddTodo from './../components/add-todo';
import Footer from './../components/footer';
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
        return (
            <div>
                <AddTodo onAddClick={this.props.onAddClick} />
                <TodoList
                    todos={ getVisibleTodos(this.props.todos, this.props.visibilityFilter) }
                    onTodoClick={this.props.onTodoClick} />
                <Footer
                    onFilterClick={this.props.onFilterClick}
                    currentFilter={this.props.visibilityFilter}
                />
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

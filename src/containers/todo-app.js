import React, { PropTypes } from 'react';

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

const TodoApp = ({ onAddClick, onFilterClick, onTodoClick, todos, visibilityFilter }) => (
    <div>
        <AddTodo onAddClick={ onAddClick } />
        <TodoList
            todos={ getVisibleTodos(todos, visibilityFilter) }
            onTodoClick={ onTodoClick } />
        <Footer
            onFilterClick={ onFilterClick }
            currentFilter={ visibilityFilter }
        />
    </div>
);

TodoApp.propTypes = {
    onAddClick: func.isRequired,
    onFilterClick: func.isRequired,
    onTodoClick: func.isRequired,
    todos: array.isRequired,
    visibilityFilter: string.isRequired,
};

export default TodoApp;

import React, { PropTypes } from 'react';

import AddTodo from './../components/add-todo';
import Footer from './../components/footer';
import VisibleTodoList from './visible-todo-list';

const TodoApp = ({ params }) => (
    <div>
        <AddTodo />
        <VisibleTodoList filter={ params.filter || 'all' } />
        <Footer />
    </div>
);

TodoApp.propTypes = {
    params: PropTypes.object.isRequired,
};

export default TodoApp;

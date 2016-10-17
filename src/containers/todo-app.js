import React from 'react';

import AddTodo from './../components/add-todo';
import Footer from './../components/footer';
import VisibleTodoList from './visible-todo-list';

const TodoApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default TodoApp;

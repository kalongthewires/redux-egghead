import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import TodoApp from './containers/todo-app';

import TodoAppReducer from './reducers/todos.reducer';
const store = createStore(TodoAppReducer);

let nextActionId = 0;

const onAddClick = (text) => {
    store.dispatch({
        id: nextActionId++,
        text: text,
        type: 'ADD_TODO',
    });
};

const onTodoClick = (todoId) => {
    store.dispatch({
        id: todoId,
        type: 'TOGGLE_TODO',
    });
};

const onFilterClick = (filter) => {
    store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter
    });
};

const render = () => {
    ReactDOM.render(
        <TodoApp
            onAddClick={ onAddClick }
            onFilterClick={ onFilterClick }
            onTodoClick={ onTodoClick }
            {...store.getState()} />,
        document.querySelector('.container'),  // eslint-disable-line no-undef
    );
};

store.subscribe(render);
render();

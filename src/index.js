import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoApp from './containers/todo-app';

import TodoAppReducer from './reducers/todos.reducer';

ReactDOM.render(
    <Provider store={createStore(TodoAppReducer)}>
        <TodoApp />
    </Provider>,
    document.querySelector('.container'),  // eslint-disable-line no-undef
);

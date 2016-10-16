import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { throttle } from 'lodash';

import TodoApp from './containers/todo-app';
import TodoAppReducer from './reducers/todos.reducer';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(
    TodoAppReducer,
    persistedState,
);

store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos,
    });
}, 1000));

ReactDOM.render(
    <Provider store={ store }>
        <TodoApp />
    </Provider>,
    document.querySelector('.container'),
);

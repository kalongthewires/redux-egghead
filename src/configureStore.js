import { createStore } from 'redux';
import { throttle } from 'lodash';
import { todoApp } from './reducers/root.reducer';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
    const persistedState = loadState();
    const store = createStore(
        todoApp,
        persistedState,
    );

    store.subscribe(throttle(() => {
        saveState({
            todos: store.getState().todos,
        });
    }, 1000));

    return store;
};

export default configureStore;

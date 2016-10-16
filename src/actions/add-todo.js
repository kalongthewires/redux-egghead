let nextActionId = 0;

const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextActionId++,
    text,
});

export default addTodo;

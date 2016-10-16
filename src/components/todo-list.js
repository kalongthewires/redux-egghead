import React, { PropTypes } from 'react';
import Todo from './todo';

const { arrayOf, bool, func, number, shape, string } = PropTypes;


const TodoList = ({ onTodoClick, todos }) => {
    return (
        <ul>
            { todos.map((todo) =>
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => onTodoClick(todo.id)}
                />)
            }
        </ul>
    )
};

TodoList.propTypes = {
    onTodoClick: func.isRequired,
    todos: arrayOf(shape({
        id: number.isRequired,
        text: string.isRequired,
        completed: bool.isRequired,
    }).isRequired).isRequired,
}

export default TodoList;

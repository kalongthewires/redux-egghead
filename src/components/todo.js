import React, { PropTypes } from 'react';

const { bool, func, string } = PropTypes;

const Todo = ({ completed, onClick, text }) => (
    <li
        onClick={ onClick }
        style={ { textDecoration: completed ? 'line-through' : 'none' } }
    >
        {text}
    </li>
);

Todo.propTypes = {
    completed: bool.isRequired,
    onClick: func.isRequired,
    text: string.isRequired,
};

export default Todo;

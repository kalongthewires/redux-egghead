import React, { PropTypes } from 'react';

const { func } = PropTypes;

const AddTodo = ({ onAddClick }) => {
    let input;

    return (
        <div>
            <input ref={ node => {
                input = node;
            }} />
            <button onClick={() => {
                onAddClick(input.value);
                input.value = '';
            }}>Add Todo</button>
        </div>
    );
};

AddTodo.propTypes = {
    onAddClick: func.isRequired,
};

export default AddTodo;

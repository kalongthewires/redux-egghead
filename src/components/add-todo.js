import React from 'react';
import { connect } from 'react-redux';

let nextActionId = 0;

let AddTodo = ({ dispatch }) => { // eslint-disable-line react/prop-types
    let input;

    return (
        <div>
            <input ref={ node => {
                input = node;
            }} />
            <button onClick={() => {
                dispatch({
                    id: nextActionId++,
                    text: input.value,
                    type: 'ADD_TODO',
                });

                input.value = '';
            }}>Add Todo</button>
        </div>
    );
};

AddTodo = connect()(AddTodo);

export default AddTodo;

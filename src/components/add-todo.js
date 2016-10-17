import React from 'react';
import { connect } from 'react-redux';

import addTodo from './../actions/add-todo';

let AddTodo = ({ dispatch }) => { // eslint-disable-line react/prop-types
    let input;

    return (
        <div>
            <input ref={ node => {
                input = node;
            } } />
            <button onClick={ () => {
                dispatch(addTodo(input.value));
                input.value = '';
            } }>Add Todo</button>
        </div>
    );
};

AddTodo = connect()(AddTodo);

export default AddTodo;

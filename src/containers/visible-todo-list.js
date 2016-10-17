import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from './../components/todo-list';
import toggleTodo from './../actions/toggle-todo';

const getVisibleTodos = (todos, filter = 'all') => {
    switch(filter) {
        case 'all':
            return todos;
        case 'completed':
            return todos.filter(t => t.completed);
        case 'active':
            return todos.filter(t => !t.completed);
        default:
            throw new Error(`Unknown filter: ${ filter }`);
    }
};

const mapDispatchToProps = (dispatch) => ({
    onTodoClick: (id) => {
        dispatch(toggleTodo(id));
    },
});

const mapStateToProps = (state, { params }) => ({
    todos: getVisibleTodos(state.todos, params.filter),
});

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList));

export default VisibleTodoList;

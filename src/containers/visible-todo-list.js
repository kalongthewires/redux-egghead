import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from './../components/todo-list';
import toggleTodo from './../actions/toggle-todo';
import { getVisibleTodos } from './../reducers/root.reducer';

const mapStateToProps = (state, { params }) => ({
    todos: getVisibleTodos(state, params.filter || 'all'),
});

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    { onTodoClick: toggleTodo },
)(TodoList));

export default VisibleTodoList;

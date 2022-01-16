import React from 'react';
import TodosListItem from './TodosListItem';
import NewTodoForm from './NewTodoForm';
import './TodosList.css';

import { connect } from 'react-redux';
import { removeTodo, completedTodo } from './actions';


const TodosList = ({ todos= [], onRemovePressed, completedTodo}) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodosListItem todo={todo} onRemovePressed={onRemovePressed} completedTodo={completedTodo}/>)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchStateToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    completedTodo: text => dispatch(completedTodo(text))
})

export default connect(mapStateToProps, mapDispatchStateToProps)(TodosList);
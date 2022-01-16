import React, { useState } from 'react';
import './NewTodoForm.css';
import { connect } from 'react-redux';
import { createTodo } from './actions';

const NewTodoForm = ({todos, onCreatePressed}) => {
    const [inputVale, setInputValue] = useState('');
    return (
        <div className="new-todo-form">
            <input 
                className="new-todo-input" 
                placeholder="Type your todo here"
                value={inputVale}
                onChange={e => setInputValue(e.target.value)}
                type="text" />
            <button 
                className="new-todo-button"
                onClick={() => {
                    const isDuplicateText = todos.some(todo => todo.text === inputVale);
                    if(!isDuplicateText) {
                        onCreatePressed(inputVale);
                        setInputValue('');
                    }
                }}>Create Todo</button>
        </div>
    )
};

// this will have an entire object which redux state has
// the job of this func is to take the state object and  return another object containing the pieces of that state that are component needs to access to
// here state is the redux state
const mapStateToProps = state => ({
    todos: state.todos
});

// dispatch allows us trigger actions to which redux store will respond to 
const mapDispatchStateToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text))
});

export default connect(mapStateToProps, mapDispatchStateToProps)(NewTodoForm);
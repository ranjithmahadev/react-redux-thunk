// reducers take two args
// first one is state
// second one is action

//anywhere in our application if the action gets called the reducers gets executed

import { CREATE_TODO, REMOVE_TODO, COMPLETED_TODO } from './actions';

//this takes current state and the action that is triggered and based on that it updates the state
export const todos = (state=[], action) => {
    const {type, payload} = action;

    switch(type) {
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false
            };
            return state.concat(newTodo);
        }
        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        }
        case COMPLETED_TODO: {
            const { text } = payload;
            return state.map(todo => {
                if (todo.text === text) {
                    return {
                        ...todo, isCompleted: true
                    }
                }
                return todo;
            });
        }
        default:
            return state;
    }
    return state;
}
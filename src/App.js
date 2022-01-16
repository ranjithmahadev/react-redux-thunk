import React from 'react';
import './App.css';
import {hot} from 'react-hot-loader';
import TodosList from './todos/TodosList';

const App = () => (
    <div className="App">
        <TodosList />
    </div>
);

export default hot(module)(App);
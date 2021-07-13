import React from 'react';
import TodoInput from '../components/TodoInput';
import Todo from '../components/Todo';

export default function TodosPage() {
    return (
        <div className="todosPage">
            <br/>
            <br/>
            <br/>
            <TodoInput />
            <Todo />
        </div>
    )
}

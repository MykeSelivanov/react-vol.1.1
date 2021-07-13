import React from 'react'
import { useSelector } from 'react-redux';

export default function Todo() {
    const todos = useSelector(state => state.todos);

    return (
        <div className="todo">
            <p>testtext</p>
            <button>Complete</button> <button>Delete</button>
            {
                todos.map(todo => {
                    return <p>{todo}</p>
                })
            }
        </div>
    )
}

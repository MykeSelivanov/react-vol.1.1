import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {saveTodo} from '../app/actions';


export default function TodoInput() {

    const [userInput, setUserInput] = useState("");
    // dispatch action with userInput
    const dispatch = useDispatch();
    
    const handleUserInput = (event) => {
        console.log(`userInput`, userInput);
        setUserInput(event.target.value);
    }
    const submitForm = (event) => {
        event.preventDefault();
        dispatch(saveTodo(userInput))
    }


    return (
        <div className="todoInput">
            <form onSubmit={submitForm}>
                <label>New Todo:</label> <br />
                <input
                    name="todo"
                    type="text"
                    placeholder="Add todo"
                    onChange={handleUserInput}
                    value={userInput} />
                    <button type="submit">Add TODO</button>
            </form>
        </div>
    )
}

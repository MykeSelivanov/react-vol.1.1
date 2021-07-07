import "./App.css";
import { useState, useEffect } from 'react';

function App() {
// init states and store todos
const [todos, setTodos] = useState([]);
const [error, setError] = useState('');
const [userInput, setUserInput] = useState('');
const [completed, setShowCompleted] = useState(false);

// fetch todos, carefully check data (it has comleted attribute in it)
// API: http://jsonplaceholder.typicode.com/todos
useEffect(() => {
  fetch('http://jsonplaceholder.typicode.com/todos', { method: 'GET' })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong while fetching todos!');
      }
    })
    .then(todosData => setTodos(todosData))
    .catch((err) => setError(err.message))
}, []);

// handle user search input
// Hint: onChange, event.target.value
const handleUserInput = (event) => {
  setUserInput(event.target.value);
}

// filter data to show completed only
const handleShowCompleted = () => setShowCompleted(completed => !completed);

// make todo completed on user click
const handleUserClick = (clickedTodo) => {
  const copyTodos = [...todos];
  copyTodos.forEach(todo => {
    if(todo === clickedTodo) {
      todo.completed = !todo.completed
    }
  })
  setTodos(copyTodos);
}

// filter data based on search input
// todo.title.includes(userinput);
let filteredTodos = todos.filter(todo => todo.title.indexOf(userInput) > -1);

if(completed) {
  filteredTodos = todos.filter(todo => todo.completed === true);
}

if(error) {
  return <p>{error}</p>
}

// change null values below with your code
return (
  <div className="App">
    <header className="App-header">
      <div>
        <input className="searchbar" type="text" placeholder="Search todos" onChange={handleUserInput} value={userInput} />
      </div>
      <div>
        <label>Show Comleted</label>
        <input className="showCompleted" type="checkbox" checked={completed} onChange={handleShowCompleted} />
      </div>
    </header>
    <section>
      {/* map todos and show the result */}
      {filteredTodos.map((todo) => {
        return <p className={todo.completed === true ? 'single-todo done' : 'single-todo'} onClick={() => handleUserClick(todo)} key={todo.id}>{todo.title}</p>
      })}
    </section>
  </div>
);
}

export default App;

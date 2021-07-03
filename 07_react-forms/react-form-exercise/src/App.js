import "./App.css";
import { useState, useEffect } from 'react';

function App() {
  // init states and store todos
  const [todos, setTodos] = useState('');

  // fetch todos, carefully check data (it has comleted attribute in it)
  // API: http://jsonplaceholder.typicode.com/todos
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/todos', { method: 'GET' })
      .then(response => response.json())
      .then(todosData => setTodos(todosData));
  }, [todos]);

  // handle user search input
  // Hint: onChange, event.target.value
  const handleUserInput = (event) => {
      
  }

  // filter data based on search input


  // filter data to show completed only

  // change null values below with your code
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input className="searchbar" type="text" placeholder="Search todos" onChange={handleUserInput} value={null} />
        </div>
        <div>
          <label>Show Comleted</label>
          <input className="showCompleted" type="checkbox" checked={null} onChange={null} />
        </div>
      </header>
      <section>
        {/* map todos and show the result */}
      </section>
    </div>
  );
}

export default App;

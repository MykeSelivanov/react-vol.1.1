import './App.css';
import { useState } from 'react';

function MultipleHandling() {

  const [name, setName] = useState('');
  const [lastName, setLastname] = useState('');
  const [message, setMessage] = useState('');

  const handleNameInput = (event) => {
    setName(event.target.value);
  }
  const handleLastnameInput = (event) => {
    setName(event.target.value);
  }
  const handleMessageInput = (event) => {
    setMessage(event.target.value);
  }

  return (
    <div className="App">
    
      <form>
        <label>Name:</label> <br />
        <input
          type="text"
          placeholder="Name"
          onChange={handleNameInput}
          value={name} />

        <label>Lastname:</label> <br />
        <input
          type="text"
          placeholder="Lastname"
          onChange={handleLastnameInput}
          value={lastName} />

        <textarea
          type="text"
          placeholder="Message"
          onChange={handleMessageInput}
          value={message} />
      </form>

    </div>
  );
}

export default MultipleHandling;

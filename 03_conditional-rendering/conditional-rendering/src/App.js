import './App.css';
import Greeting from './Greeting';

function App() {
  const theme = 'dark';

  return (
    // eslint-disable-next-line react/jsx-no-duplicate-props
    <div className="App" className={ theme === 'dark' ? 'App dark' : 'App light' }>
      <header className="App-header">
        <h1>Conditional rendering</h1>
      </header>
      <Greeting/>
    </div>
  );
}

export default App;

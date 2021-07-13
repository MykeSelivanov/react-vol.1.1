import './App.css';
import Counter from './app/CounterHooks';
import CounterClass from './app/CounterClass';
import CounterHooks from './app/CounterHooks';

function App() {
  return (
    <div className="App">
      <CounterClass />
      <CounterHooks />
    </div>
  );
}

export default App;

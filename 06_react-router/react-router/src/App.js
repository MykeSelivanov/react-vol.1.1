import './App.css';
import { BrowserRouter as Router, HashRouter, Route } from 'react-router-dom';
import Nav from './Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
      </div>

    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    </Router>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}



export default App;

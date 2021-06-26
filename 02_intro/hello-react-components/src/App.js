import './App.css';
// import Welcome component from Welcome.js
import Welcome from './Welcome';
import ClassComponent from './ClassComponent';

import Counter from './Counter';

function App() {
  // data
  const name = 'Harry Potter';
  const title = 'SideBar';
  const who = 'I am';
  const message = 'I am a class component!';

  return (
    <div className="container">
      <h1>Hello React component!</h1>
      <Counter/>
       {/* Rendering nested components inside parent App component */}
      {/* 2nd component - Welcome */}
      <Welcome customerName={name}/>
      <SideBar title={title} who={who}/>
      {/* 4th component - Class component */}
      <ClassComponent message={message}/>
      {/* the data between opening and closing component tags automatically becomes props.children */}
      <Footer>Footer text</Footer>
    </div>
  );
}

// 3rd component - sidebar
function SideBar(props) {
  console.log('first', props);
  return <h3>{props.who} a {props.title}</h3>
}

function Footer(props) {
  return <h3>{props.children}</h3>
}

export default App;

import { Component } from 'react';
import './App.css';
import User from './User';

class App extends Component {

  constructor() {
    super();
    this.state = { 
      name: "Spider",
      date: "Monday",
      show: true
   };
    console.log('Constructor called');
  }

  componentDidMount() {
    // typically apis are called here 
    this.setState({name: "Batman"});
    console.log('componentDidMount called');
    console.log('UPDATING PHASE -------');
    
    this.timerID = setInterval(() => {
      // if you use this, get rid of the above setState, it will batch both setState together
      // this.setState({anme: 'Batman', date: new Date().toLocalDateString()})
      // this.setState({date: new Date().toLocaleDateString()});
    }, 1000);
  }

  shouldComponentUpdate() {
    console.log('Should Component update called');
    return true;
  }

  componentDidUpdate(prevState, prevProps, snapshot) {
    console.log('Component did update called');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount called')
    // cleanup timer
    clearInterval(this.timerID);
  }

  showBox = () => {
    this.setState({show: !this.state.show});
  }

  render() {
    console.log(this.timerID);

    console.log('Render called');
    return (
      <div className="App">
        <h1>React (class) lifecycle</h1>
        <p>Hello, {this.state.name}!</p>
        <h4>Today is {this.state.date}</h4>
        
        <button onClick={this.showBox}>Toggle</button>
        {this.state.show && <Child name={this.state.name}/>}
        <User/>
      </div>
    );
  }
}

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Peter'
    };
  };

  componentDidUpdate(prevProps) {
    console.log(this.props.name);
    console.log(prevProps.name);
    if (this.props.name !== prevProps.name){
      console.log('SUCCESS');
    }
  }

  static getDerivedStateFromProps(props, state) {
    if(props.name !== state.name) {
      return {name: props.name};
    }
    return null;
  }

  render() {
    return (
        <div style={{padding: "20px", border: "1px solid"}}>
          <h1>{this.props.name}</h1>
       </div>
    )
  }
}

function Box() {
  return <div style={{padding: "20px", border: "1px solid"}}>BOX</div>
}

export default App;

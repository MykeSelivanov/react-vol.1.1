import './App.css';
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';

const studentsAPI = {
  students: [
    { number: 1, name: 'John', class: 'A' },
    { number: 2, name: 'Doe', class: 'B' },
    { number: 3, name: 'Ryan', class: 'C' },
    { number: 4, name: 'Pete', class: 'D' },
  ],
  getAll() {
    return this.students
  },
  getStudent(id) {
    return this.students.filter((student) => student.number === Number(id))
  }
};

const AllStudents = (props) => {
  console.log(props);
  return (
    <ul>
      {studentsAPI.students.map((student) => {
        return <li key={student.number}><Link to={`/students/${student.number}`}>{student.name}</Link></li>
      })}
    </ul>
  )
}

const StudentDetails = (props) => {
  console.log(props);
  console.log(props.location.search); // query params
  const student = studentsAPI.getStudent(props.match.params.id);
  return (
    <div>
      <button onClick={() => props.history.goBack()}>Go back</button>
      <button onClick={() => props.history.push('/')}>Go to Home page</button>
      <h1>Student ID: {props.match.params.id}</h1>
      <h1>Student Name: {student[0].name}</h1>
    </div>
  )
}



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={() => <About name="test" />}>
          <About />
        </Route>
        <Route exact path="/students" component={AllStudents} />
        <Route path="/students/:id" component={StudentDetails} />
      </Switch>
    </Router>
  );
}

export default App;

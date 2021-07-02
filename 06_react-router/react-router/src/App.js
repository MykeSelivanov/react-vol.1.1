import './App.css';
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
  Link,
  useHistory,
  useLocation,
  useParams
} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import studentsAPI from './students-data';

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
  // get single student
  const student = studentsAPI.getStudent(props.match.params.id);
  // return (
  //   <div>
  //     <button onClick={() => props.history.goBack()}>Go back</button>
  //     <button onClick={() => props.history.push('/')}>Go to Home page</button>
  //     <h1>Student ID: {props.match.params.id}</h1>
  //     <h1>Student Name: {student[0].name}</h1>
  //   </div>
  // )

  // HOOK Version -----
  const history = useHistory();
  const {id} = useParams();
  return (
    <div>
      <button onClick={() => history.goBack()}>Go back</button>
      <button onClick={() => history.push('/')}>Go to Home page</button>
      <h1>Student ID: {id}</h1>
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

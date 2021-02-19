
import './App.css';
import Header from './components/Header/index';
import Homepage from './components/Homepage/index';
import Login from './components/Login/index';
import Level1 from './components/Level1/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {

  // const token = window.localStorage.getItem("token");
  
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/login">
            <Login  setAuthorised />
          </Route>
          <Route path="/">
            <Header />
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

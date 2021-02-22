import './App.css';
import Header from './components/Header/index';
import Homepage from './components/Homepage/index';
import Login from './components/Login/index';
import Level from './components/Level/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState } from 'react';
import { UserContext } from './components/UserContext';

function App() {

  const [token, setToken] = useState(window.localStorage.getItem("token"));

  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={{ token, setToken }}>
          <Header />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/level1">
              <Level />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;

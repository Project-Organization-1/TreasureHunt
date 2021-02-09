import './App.css';
import Header from './components/Header/index';
import Homepage from './components/Homepage/index';
import Login from './components/Login/index';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Homepage/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
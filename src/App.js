import './App.css';
import Header from './components/Header/index';
import Homepage from './components/Homepage/index';
import Login from './components/Login/index';
import Level1 from './components/Level1/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
          <Route path="/level1">
            <Level1/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
import "./App.css";
import Header from "./components/Header/index";
import Homepage from "./components/Homepage/index";
import Login from "./components/Login/index";
import Level1 from "./components/Level1/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [authorised, setAuthorised] = useState(false);

  return (
    <Router>
      <div className="App">
        <Switch>
          {console.log(authorised)}
          <Route path="/login/level1">
            <Level1 />
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

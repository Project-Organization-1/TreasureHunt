import React, { useState, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import "./style.css";
import jwt_decode from "jwt-decode";
import { UserContext } from "../UserContext";

function Login() {
  const history = useHistory();

  const { token, setToken } = useContext(UserContext);

  const [groupId, setGruopId] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false);
  const [valid, setValid] = useState(false);

  function submitUser(groupId, email) {
    fetch(`http://localhost:5000/user/login/${groupId}/${email}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
      },
      mode: "cors",
    })
      .then((res) => {
        if (res.status === 200) {
          setValid(true);
          setStatus(res.status);
          return res.json();
        }
        setValid(false);
        setStatus(res.status);
      })
      .then((resJson) => {
        if (resJson)
          return resJson.token;
      })
      .then((jwtoken) => {
        if (jwtoken) {
          window.localStorage.setItem("token", jwtoken);
          setToken(jwtoken);
          history.push('/level1');
        }
      })
      .catch((err) => {
        setStatus(err.status);
        throw err;
      });
  }

  function decodeJWT() {
    var token = window.localStorage.getItem("token")
    var decoded = jwt_decode(token);
    console.log(decoded);
  }

  if (token === null) {
    return (
      <section className="login">
        <div className="loginContainer">
          <h3>Log In</h3>
          <label>Group ID</label>
          <input
            type="text"
            autoFocus
            required
            onChange={(e) => setGruopId(e.target.value)}
          />
          {status === 201 && <p className="__warning">Group not Found</p>}
          <label>Email</label>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          {status === 202 && <p className="__warning">User Not found</p>}
          <div className="btnContainer">
            <button onClick={() => submitUser(groupId, email)}>
              Sign In
            </button>
          </div>
        </div>
      </section>
    )
  }
  return (
    <Redirect to="/level1" />
  )
}

export default Login;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Login() {
  const [groupId, setGruopId] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false);
  const [valid, setValid] = useState(false);

  useEffect(() => {
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
          } else {
            setValid(false);
          }
          return setStatus(res.status);
        })
        .catch((err) => {
          setStatus(err.status);
          throw err;
        });
    }

    submitUser(groupId, email);
  }, [email, groupId]);

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
          <Link to="/login/level1">
            <button disabled={!valid}>Sign In</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;

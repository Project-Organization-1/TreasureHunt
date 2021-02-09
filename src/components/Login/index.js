import React from "react";
import "./style.css";
function Login() {
  return (
    <section className="login">
      <div className="loginContainer">
        <h3>Log In</h3>
        <label>Group ID</label>
        <input type="text" autoFocus required />
        <label>Password</label>
        <input type="password" required />
        <div className="btnContainer">
          <button>Sign In</button>
        </div>
      </div>
    </section>
  );
}

export default Login;

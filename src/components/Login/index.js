import React, { useState, useEffect} from "react";
import "./style.css";
function Login() { 

  const [gruopId, setGruopId] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => {
    submitUser(gruopId, email);
  }
  function submitUser(groupId,email){
        fetch(`http://localhost:5000/user/login/${groupId}/${email}`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin":true
            },
            mode: "cors",

            // body: JSON.stringify({
            //     groupId: groupId,
            //     email: email,
            // })
        })
        .then((res)=>{
            // after adding the note, reload the page to reflect the changes
            console.log("User Logged In");
            console.log(res)
        })
        .catch(err => {
            throw(err)
        });
    }

  return (
    <section className="login">
      <div className="loginContainer">
        <h3>Log In</h3>
        <label>Group ID</label>
        <input type="text" autoFocus required onChange={e => setGruopId(e.target.value)}/>
        <label>Email</label>
        <input type="email" required onChange={e => setEmail(e.target.value)} />
        <div className="btnContainer">
          <button onClick= {handleClick}>Sign In</button>
        </div>
      </div>
    </section>
  );
}

export default Login;

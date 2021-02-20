import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./styles.css";
import { Redirect } from "react-router-dom";
import { UserContext } from "../UserContext";
import Level1 from "./level1";

function Level() {
  const {token, setToken} = useContext(UserContext);

  if(token == null){
    return <Redirect to="/"/>
  }
  return (
    <Level1 />
  );
}

export default Level;

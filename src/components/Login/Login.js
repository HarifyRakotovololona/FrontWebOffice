import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import "./Login.css";

function Login(props) {
  return (
    <>
      <div className="Login">
        <div className="LoginContentTitle1">
          <p>Bienvenue</p>
        </div>
        <div className="LoginContent">
          <div className="LoginContentTitle">
            <p>Login</p>
          </div>
          <div className="LoginContentInformation">
            <Input placeholder="Email" name={props.Input}></Input>
            <Input placeholder="Password" name={props.Input}></Input>
          </div>
          <div className="LoginButton">
            <Button name="Log In " onClick={props.functionConnection}></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

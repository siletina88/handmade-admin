import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import "./login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className='login'>
      <form className='form'>
        <input onChange={(e) => setUsername(e.target.value)} className='input' type='text' placeholder='Admin username'></input>
        <input onChange={(e) => setPassword(e.target.value)} className='input' type='password' placeholder='Admin password'></input>
        <button onClick={handleLogin} className='button'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

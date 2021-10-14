import React, { useState } from "react";
import "./newUser.scss";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/apiCalls";

const NewUser = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const user = { ...inputs };
    addUser(user, dispatch).then((window.location = "/users"));
  };

  console.log(inputs);

  return (
    <div className='newUser'>
      <h1 className='title'>Novi korisnik</h1>
      <form className='form'>
        <div className='formItem'>
          <label>Korisnicko Ime</label>
          <input onChange={handleChange} name='username' type='text' placeholder='username' />
        </div>
        <div className='formItem'>
          <label>Ime i prezime</label>
          <input onChange={handleChange} name='fullName' type='text' placeholder='fullName' />
        </div>
        <div className='formItem'>
          <label>Email</label>
          <input onChange={handleChange} name='email' type='text' placeholder='email' />
        </div>
        <div className='formItem'>
          <label>Password</label>
          <input onChange={handleChange} name='password' type='password' placeholder='password' />
        </div>
        <div className='formItem'>
          <label>Adresa</label>
          <input onChange={handleChange} name='address' type='text' placeholder='jon' />
        </div>
        <div className='formItem'>
          <label>Telefon</label>
          <input onChange={handleChange} name='phone' type='text' placeholder='jon' />
        </div>

        <button onClick={handleClick} className='button'>
          Dodaj
        </button>
      </form>
    </div>
  );
};

export default NewUser;

import React from "react";
import "./newUser.scss";

const NewUser = () => {
  return (
    <div className='newUser'>
      <h1 className='title'>Novi korisnik</h1>
      <form className='form'>
        <div className='formItem'>
          <label>Korisnicko Ime</label>
          <input type='text' placeholder='jon' />
        </div>
        <div className='formItem'>
          <label>Ime i prezime</label>
          <input type='text' placeholder='Sas Meh' />
        </div>
        <div className='formItem'>
          <label>Email</label>
          <input type='text' placeholder='email' />
        </div>
        <div className='formItem'>
          <label>Password</label>
          <input type='password' placeholder='password' />
        </div>
        <div className='formItem'>
          <label>Adresa</label>
          <input type='text' placeholder='jon' />
        </div>
        <div className='formItem'>
          <label>Telefon</label>
          <input type='text' placeholder='jon' />
        </div>

        <button className='button'>Dodaj</button>
      </form>
    </div>
  );
};

export default NewUser;

import React, { useState } from "react";
import "./user.scss";
import { PermIdentity, Email, Phone, LocationOn, Event, CloudUpload } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const User = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const user = useSelector((state) => state.user.users.find((user) => user._id === id));

  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  console.log(inputs);
  return (
    <div className='user'>
      <div className='titleContainer'>
        <h1 className='title'>Edituj korisnika</h1>
        <Link to='/newUser'>
          <button className='addButton'>Dodaj</button>
        </Link>
      </div>
      <div className='userContainer'>
        <div className='show'>
          <div className='top'>
            <img src={user.img ? user.img : "https://www.enduresc.com.au/wordpress/wp-content/uploads/2018/05/user-profile.jpg"} alt='' className='showImg' />
            <div className='showTitle'>
              <span className='showUsername'>{user.username}</span>
              <span className='userTitle'>{user.isAdmin ? "Administrator" : "Korisnik"}</span>
            </div>
          </div>
          <div className='bottom'>
            <span className='showBottomTitle'>Detalji naloga</span>
            <div className='userShowInfo'>
              <PermIdentity className='showIcon'></PermIdentity>
              <span className='showInfoTitle'>{user.username}</span>
            </div>
            <div className='userShowInfo'>
              <Event className='showIcon'></Event>
              <span className='showInfoTitle'>19.12.1988 - TODO USER PROFILE PAGE</span>
            </div>
            <span className='showBottomTitle'>Kontakt korisnika</span>
            <div className='userShowInfo'>
              <Phone className='showIcon'></Phone>
              <span className='showInfoTitle'>+387 665 123 343 - TODO USER PROFILE PAGE</span>
            </div>
            <div className='userShowInfo'>
              <Email className='showIcon'></Email>
              <span className='showInfoTitle'>{user.email}</span>
            </div>
            <div className='userShowInfo'>
              <LocationOn className='showIcon'></LocationOn>
              <span className='showInfoTitle'>DOBOJ - BiH - TODO USER PROFILE PAGE</span>
            </div>
          </div>
        </div>
        <div className='update'>
          <span className='updateTitle'>Edituj</span>
          <form className='updateForm'>
            <div className='userUpdateLeft'>
              <div className='updateItem'>
                <label>Korisnicko ime</label>
                <input onChange={handleChange} type='text' name='username' placeholder={user.username} className='updateInput' />
              </div>
              <div className='updateItem'>
                <label>Puno ime</label>
                <input onChange={handleChange} type='text' name='fullName' placeholder='Puno ime i prezime' className='updateInput' />
              </div>
              <div className='updateItem'>
                <label>Email</label>
                <input onChange={handleChange} type='text' name='email' placeholder={user.email} className='updateInput' />
              </div>
              <div className='updateItem'>
                <label>Adresa</label>
                <input onChange={handleChange} type='text' name='address' placeholder='Adresa' className='updateInput' />
              </div>
              <div className='updateItem'>
                <label>Telefon</label>
                <input onChange={handleChange} type='text' name='phone' placeholder='Broj telefona' className='updateInput' />
              </div>
            </div>
            <div className='userUpdateRight'>
              <div className='updateUpload'>
                <img src={user.img ? user.img : "https://www.enduresc.com.au/wordpress/wp-content/uploads/2018/05/user-profile.jpg"} alt='' className='updateImg' />
                <label htmlFor='file'>
                  <CloudUpload className='uploadBtn'></CloudUpload>
                </label>
                <input onChange={(e) => setFile(e.target.files[0])} type='file' id='file' style={{ display: "none" }} />
              </div>
              <button className='updateButton'>Azuriraj</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;

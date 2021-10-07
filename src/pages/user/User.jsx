import React from 'react'
import './user.scss'
import {
  PermIdentity,
  Email,
  Phone,
  LocationOn,
  Event,
  CloudUpload,
} from '@material-ui/icons'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div className="user">
      <div className="titleContainer">
        <h1 className="title">Edituj korisnika</h1>
        <Link to="/newUser">
          <button className="addButton">Dodaj</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="show">
          <div className="top">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Jon_Snow_Season_8.png/220px-Jon_Snow_Season_8.png"
              alt=""
              className="showImg"
            />
            <div className="showTitle">
              <span className="showUsername">Sasa Meh</span>
              <span className="userTitle">Software Engineer</span>
            </div>
          </div>
          <div className="bottom">
            <span className="showBottomTitle">Detalji naloga</span>
            <div className="userShowInfo">
              <PermIdentity className="showIcon"></PermIdentity>
              <span className="showInfoTitle">sasameh</span>
            </div>
            <div className="userShowInfo">
              <Event className="showIcon"></Event>
              <span className="showInfoTitle">19.12.1988</span>
            </div>
            <span className="showBottomTitle">Kontakt korisnika</span>
            <div className="userShowInfo">
              <Phone className="showIcon"></Phone>
              <span className="showInfoTitle">+387 665 123 343</span>
            </div>
            <div className="userShowInfo">
              <Email className="showIcon"></Email>
              <span className="showInfoTitle"> sasamehme@gasad.com</span>
            </div>
            <div className="userShowInfo">
              <LocationOn className="showIcon"></LocationOn>
              <span className="showInfoTitle">DOBOJ - BiH</span>
            </div>
          </div>
        </div>
        <div className="update">
          <span className="updateTitle">Edituj</span>
          <form className="updateForm">
            <div className="userUpdateLeft">
              <div className="updateItem">
                <label>Korisnicko ime</label>
                <input
                  type="text"
                  placeholder="sasameh"
                  className="updateInput"
                />
              </div>
              <div className="updateItem">
                <label>Puno ime</label>
                <input
                  type="text"
                  placeholder="Sasa Meh"
                  className="updateInput"
                />
              </div>
              <div className="updateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="sasamehme@gasad.com"
                  className="updateInput"
                />
              </div>
              <div className="updateItem">
                <label>Adresa</label>
                <input
                  type="text"
                  placeholder="DOBOJ - BiH"
                  className="updateInput"
                />
              </div>
              <div className="updateItem">
                <label>Telefon</label>
                <input
                  type="text"
                  placeholder="+387 665 123 343"
                  className="updateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="updateUpload">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Jon_Snow_Season_8.png/220px-Jon_Snow_Season_8.png"
                  alt=""
                  className="updateImg"
                />
                <label htmlFor="file">
                  <CloudUpload className="uploadBtn"></CloudUpload>
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>
              <button className="updateButton">Azuriraj</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User

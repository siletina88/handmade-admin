import React from 'react'
import './sidebar.scss'

import {
  Apps,
  AttachMoney,
  PeopleAlt,
  Panorama,
  Equalizer,
  TrendingUp,
  MailOutline,
  Message,
  RateReview,
} from '@material-ui/icons/'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="wrapper">
        <div className="menu">
          <div className="title">Dashboard</div>
          <ul className="list">
            <li className="listItem active">
              <Apps className="icon"></Apps> Pocetna
            </li>
            <li className="listItem">
              <Equalizer className="icon"></Equalizer> Statistika
            </li>
            <li className="listItem">
              <TrendingUp className="icon"></TrendingUp> Prodaja
            </li>
          </ul>
        </div>
        <div className="menu">
          <div className="title">Brzi Meni</div>
          <ul className="list">
            <li className="listItem ">
              <PeopleAlt className="icon"></PeopleAlt> Korisnici
            </li>
            <li className="listItem">
              <Panorama className="icon"></Panorama> Proizvodi
            </li>
            <li className="listItem">
              <AttachMoney className="icon"></AttachMoney> Transakcije
            </li>
          </ul>
        </div>
        <div className="menu">
          <div className="title">Notifikacije</div>
          <ul className="list">
            <li className="listItem ">
              <MailOutline className="icon"></MailOutline> Email
            </li>
            <li className="listItem">
              <Message className="icon"></Message> Feedback
            </li>
            <li className="listItem">
              <RateReview className="icon"></RateReview> Poruke
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

import React from "react";
import "./sidebar.scss";

import { Apps, AttachMoney, PeopleAlt, Panorama, Equalizer, TrendingUp, MailOutline, Message, RateReview } from "@material-ui/icons/";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='wrapper'>
        <div className='menu'>
          <div className='title'>Dashboard</div>
          <ul className='list'>
            <NavLink exact to='/' className='link' activeClassName='active'>
              <li className='listItem'>
                <Apps className='icon'></Apps>
                <span className='itemTitle'>Pocetna</span>
              </li>
            </NavLink>

            <li className='listItem'>
              <Equalizer className='icon'></Equalizer>
              <span className='itemTitle'>Statistika</span>
            </li>
            <li className='listItem'>
              <TrendingUp className='icon'></TrendingUp> <span className='itemTitle'>Prodaja</span>
            </li>
          </ul>
        </div>
        <div className='menu'>
          <div className='title'>Brzi Meni</div>
          <ul className='list'>
            <NavLink to='/users/' className='link'>
              <li className='listItem'>
                <PeopleAlt className='icon'></PeopleAlt> <span className='itemTitle'>Korisnici</span>
              </li>
            </NavLink>
            <NavLink to='/products/' className='link'>
              <li className='listItem'>
                <Panorama className='icon'></Panorama>
                <span className='itemTitle'>Artikli</span>
              </li>
            </NavLink>
            <NavLink to='/orders/' className='link'>
              <li className='listItem'>
                <AttachMoney className='icon'></AttachMoney> <span className='itemTitle'>Narudzbe</span>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className='menu'>
          <div className='title'>Notifikacije</div>
          <ul className='list'>
            <li className='listItem '>
              <MailOutline className='icon'></MailOutline> <span className='itemTitle'>Email</span>
            </li>
            <li className='listItem'>
              <Message className='icon'></Message> <span className='itemTitle'>Recenzije</span>
            </li>
            <li className='listItem'>
              <RateReview className='icon'></RateReview> <span className='itemTitle'>Poruke</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

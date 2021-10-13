// @ts-nocheck
import React from "react";
import "./topbar.scss";
import Badge from "@material-ui/core/Badge";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/apiCalls";
import { useState, useEffect } from "react";

import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SettingsIcon from "@material-ui/icons/Settings";
import LanguageIcon from "@material-ui/icons/Language";

const Topbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);

  const [username, setUsername] = useState("sas");

  useEffect(() => {
    setUsername(user?.username);
  }, [user]);

  const handleLogout = (e) => {
    e.preventDefault();
    logout(dispatch);
  };
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <span className='logo'>Cori admin</span>
        </div>
        <div className='right'>
          <div className='icons'>
            <div className='icon'>
              <Badge overlap='circular' badgeContent={4} color='primary'>
                <NotificationsNoneIcon />
              </Badge>
            </div>
            <div className='icon'>
              <LanguageIcon />
            </div>
            <div className='icon'>
              <SettingsIcon />
            </div>
            <img src='https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=681&h=383&crop=1' alt='' className='avatar' />
            {username ? <div className='icon'>Hello, {username}</div> : <div className='icon'>Hello,Guest</div>}

            <div onClick={handleLogout} className='icon'>
              LOG OUT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

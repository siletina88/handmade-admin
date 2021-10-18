// @ts-nocheck
import React from "react";
import "./topbar.scss";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SettingsIcon from "@material-ui/icons/Settings";
import LanguageIcon from "@material-ui/icons/Language";
import Badge from "@material-ui/core/Badge";
import logo from "./logo6.png";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/apiCalls";
import { useState, useEffect } from "react";

const Topbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);

  const [username, setUsername] = useState("");

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
          <div className='logo'>
            <img className='logoImg' src={logo} alt='' />
          </div>
        </div>
        <div className='right'>
          <div className='icons'>
            <div className='leftMenu'>
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
            </div>
            <div className='rightMenu'>
              {username ? <div className='icon'>Hello, {username}</div> : <div className='icon'>Cao,Guest</div>}
              <img src={user.img} alt='' className='avatar' />

              <div onClick={handleLogout} className='icon last'>
                Log Out
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

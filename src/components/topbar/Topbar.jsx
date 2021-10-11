import React from "react";
import "./topbar.scss";
import Badge from "@material-ui/core/Badge";

import { useDispatch } from "react-redux";
import { logout } from "../../redux/apiCalls";

import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SettingsIcon from "@material-ui/icons/Settings";
import LanguageIcon from "@material-ui/icons/Language";

const Topbar = () => {
  const dispatch = useDispatch();

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

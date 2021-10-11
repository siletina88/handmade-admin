import React, { useState, useEffect } from "react";
import "./widgetSm.scss";
import { Visibility } from "@material-ui/icons";
import { userRequest } from "../../requestMethods";

const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch (error) {}
    };
    getUsers();
  }, []);

  return (
    <div className='widgetSm'>
      <span className='title'>Novi korisnici</span>
      <ul className='list'>
        {users.map((user) => (
          <li className='listItem' key={user._id}>
            <img src={user.img || "https://www.pngfind.com/pngs/m/341-3416003_no-avatar-pic-unknown-person-png-transparent-png.png"} alt='' className='img' />
            <div className='user'>
              <span className='username'>{user.username}</span>
              <span className='userTitle'>{user.email}</span>
            </div>
            <button className='button'>
              <Visibility className='icon' /> Prikazi
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;

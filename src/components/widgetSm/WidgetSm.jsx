import React from 'react'
import './widgetSm.scss'
import { Visibility } from '@material-ui/icons'

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="title">Novi korisnici</span>
      <ul className="list">
        <li className="listItem">
          <img
            src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__480.jpg"
            alt=""
            className="img"
          />
          <div className="user">
            <span className="username">Anna Keller</span>
            <span className="userTitle">Software Engineer</span>
          </div>
          <button className="button">
            <Visibility className="icon" /> Prikazi
          </button>
        </li>
        <li className="listItem">
          <img
            src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__480.jpg"
            alt=""
            className="img"
          />
          <div className="user">
            <span className="username">Anna Keller</span>
            <span className="userTitle">Software Engineer</span>
          </div>
          <button className="button">
            <Visibility className="icon" /> Prikazi
          </button>
        </li>
        <li className="listItem">
          <img
            src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__480.jpg"
            alt=""
            className="img"
          />
          <div className="user">
            <span className="username">Anna Keller</span>
            <span className="userTitle">Software Engineer</span>
          </div>
          <button className="button">
            <Visibility className="icon" /> Prikazi
          </button>
        </li>
        <li className="listItem">
          <img
            src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__480.jpg"
            alt=""
            className="img"
          />
          <div className="user">
            <span className="username">Anna Keller</span>
            <span className="userTitle">Software Engineer</span>
          </div>
          <button className="button">
            <Visibility className="icon" /> Prikazi
          </button>
        </li>
        <li className="listItem">
          <img
            src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__480.jpg"
            alt=""
            className="img"
          />
          <div className="user">
            <span className="username">Anna Keller</span>
            <span className="userTitle">Software Engineer</span>
          </div>
          <button className="button">
            <Visibility className="icon" /> Prikazi
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm

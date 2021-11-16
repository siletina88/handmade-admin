import React, { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";
import "./order.scss";
import { useSelector, useDispatch } from "react-redux";
import { userRequest } from "../../requestMethods";
import { format } from "timeago.js";
import { updateOrder } from "../../redux/apiCalls";

const Order = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const id = location.pathname.split("/")[2];

  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const order = { ...inputs };
    updateOrder(id, order, dispatch).then((window.location = "/orders"));
  };

  const order = useSelector((state) => state.order.orders.find((order) => order._id === id));
  const products = useSelector((state) => state.product.products);
  const users = useSelector((state) => state.user.users);
  // @ts-ignore

  return (
    <div className='product'>
      <div className='titleContainer'></div>
      <div className='top'>
        <div className='topLeft'>
          <h1 className='title'>
            Narudzba broj - <b>{order._id}</b>{" "}
          </h1>{" "}
          <div className='infoTop'>
            <div className='infoTopLeft'>
              {" "}
              {users.map(
                (user) =>
                  user._id === order.userId && (
                    <div className='infoName'>
                      Narucilac : <div className='infoDetails'>{user.username}</div>
                    </div>
                  )
              )}
              <div className='infoName'>
                Ime i prezime: <div className='infoDetails'>{order.name}</div>
              </div>
              <div className='infoName'>
                Artikli :
                <ul className='infoList'>
                  {order.products.map((item) => {
                    let quantity = "";
                    let title = "";
                    let img = "";
                    let size = "";
                    let color = "";
                    products.map((product) => {
                      if (product._id === item._id) {
                        title = product.title;
                        quantity = item.quantity;
                        color = item.color;
                        size = item.size;
                        img = product.img;
                      }
                    });
                    return (
                      <li className='infoListItem'>
                        <img src={img} alt='' className='infoImg' />
                        <div className='infoDetails'>
                          {title} x {quantity}
                          <div className='infoDetailItem'>
                            Boja : <div className='color' style={{ background: `${color}` }}></div>
                          </div>
                          <div className='infoDetailItem'>
                            Velicina : <div className='color'>{size}</div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className='infoName'>
                Datum narudzbe : <div className='infoDetails'>{format(order.createdAt)}</div>
              </div>
            </div>
            <div className='infoTopRight'>
              {" "}
              <div className='infoName'>
                Adresa: <div className='infoDetails'>{order.address}</div>
              </div>
              <div className='infoName'>
                Grad: <div className='infoDetails'>{order.city}</div>
              </div>
              <div className='infoName'>
                Email: <div className='infoDetails'>{order.email}</div>
              </div>
              <div className='infoName'>
                Telefon: <div className='infoDetails'>{order.phone}</div>
              </div>
              <div className='infoName'>
                Iznos: <div className='infoDetails'>{order.total.toFixed(2)} KM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <form className='form'>
          <div className='formLeft'>
            <label>STATUS NARUDZBE</label>
            <select onChange={handleChange} name='status' id='inStock'>
              <option value='pending'>Narucena</option>
              <option value='delivering'>Poslata</option>
              <option value='delivered'>Urucena</option>
            </select>
          </div>
          <div className='formRight'>
            <button onClick={handleClick} className='updateButton'>
              Azuriraj
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;

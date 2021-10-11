import React from "react";
import "./widgetLg.scss";
import { useState, useEffect } from "react";
import { userRequest } from "../../requestMethods";
import { format } from "timeago.js";
import { ShoppingCart } from "@material-ui/icons";

const WidgetLg = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch (error) {}
    };
    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <button className={"button " + type}>{type}</button>;
  };

  return (
    <div className='widgetLg'>
      <h3 className='title'>Zadnje transakcije</h3>
      <table className='table'>
        <tr className='tr'>
          <th className='th'>Narudzba</th>
          <th className='th'>Adresa</th>
          <th className='th'>Datum</th>
          <th className='th'>Cijena</th>
          <th className='th'>Status</th>
        </tr>
        {orders.map((order) => (
          <tr className='tr' key={order._id}>
            <td className='user'>
              <ShoppingCart />
              <span className='name'>{order.userId}</span>
            </td>
            <td className='date'>{order.address}</td>
            <td className='date'>{format(order.createdAt)}</td>
            <td className='amount'>$ {order.amount}</td>
            <td className='status'>
              <Button type={order.status}></Button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default WidgetLg;

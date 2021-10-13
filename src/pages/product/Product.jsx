import React, { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";
import "./product.scss";
import Chart from "../../components/chart/Chart";

import { Publish } from "@material-ui/icons/";
import { useSelector, useDispatch } from "react-redux";
import { userRequest } from "../../requestMethods";

import { UpdateWithFirebase } from "../../customActions/UpdateWithFirebase";
import MONTHS from "../../constants/months";

const Product = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [productStats, setProductStats] = useState([]);

  const id = location.pathname.split("/")[2];

  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    UpdateWithFirebase(dispatch, file, id, inputs);
  };

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + id);
        // @ts-ignore
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) => setProductStats((prev) => [...prev, { name: MONTHS[item._id - 1], Sales: item.total }]));
      } catch (error) {}
    };
    getStats();
  }, []);
  const product = useSelector((state) => state.product.products.find((product) => product._id === id));

  // @ts-ignore

  return (
    <div className='product'>
      <div className='titleContainer'>
        <h1 className='title'>Artikli</h1>
        <Link to='/newProduct'>
          <button className='addButton'>Dodaj</button>
        </Link>
      </div>
      <div className='top'>
        <div className='topLeft'>
          <Chart data={productStats} dataKey='Sales' title='Statistika prodaje'></Chart>
        </div>
        <div className='topRight'>
          <div className='infoTop'>
            <img src={product.img} alt='' className='infoImg' />
            <span className='infoName'>{product.title}</span>
          </div>
          <div className='infoBottom'>
            <div className='infoItem'>
              <span className='infoKey'>id:</span>
              <span className='infoValue'>{product._id}</span>
            </div>
            <div className='infoItem'>
              <span className='infoKey'>prodaja:</span>
              <span className='infoValue'>1223</span>
            </div>

            <div className='infoItem'>
              <span className='infoKey'>na stanju:</span>
              <span className='infoValue'>{product.inStock ? "Da" : "Ne"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <form className='form'>
          <div className='formLeft'>
            <label>Ime proizvoda</label>
            <input onChange={handleChange} name='title' type='text' placeholder={product.title} />
            <label>Opis</label>
            <input onChange={handleChange} name='description' type='text' placeholder={product.description} />
            <label>Cijena</label>
            <input onChange={handleChange} name='price' type='number' placeholder={product.price} />
            <label>Na stanju</label>
            <select onChange={handleChange} name='inStock' id='inStock'>
              <option value='true'>Da</option>
              <option value='false'>Ne</option>
            </select>
          </div>
          <div className='formRight'>
            <div className='upload'>
              <img src={product.img} alt='' className='uploadImg' />
              <label
                // @ts-ignore
                for='file'
              >
                <Publish></Publish>
              </label>
              <input onChange={(e) => setFile(e.target.files[0])} type='file' id='file' style={{ display: "none" }} />
            </div>
            <button onClick={handleClick} className='updateButton'>
              Azuriraj
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;

import React, { useState } from "react";
import "./newProduct.scss";
import { useDispatch } from "react-redux";
import { AddProductWithFirebase } from "../../customActions/AddProductWithFirebase";
import { AddProductWithCloudinary } from "../../customActions/AddProductWithCloudinary";

const NewProduct = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const [files, setFiles] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCategories = (e) => {
    setCategories(e.target.value.split(","));
  };
  const handleClick = (e) => {
    e.preventDefault();

    const filesObj = Object.entries(files);

    console.log(filesObj);

    AddProductWithCloudinary(dispatch, filesObj, categories, inputs);
  };

  return (
    <div className='newProduct'>
      <h1 className='title'>Novi proizvod</h1>
      <form className='form'>
        <div className='item'>
          <label>Slika</label>
          <input type='file' id='files' multiple onChange={(e) => setFiles(e.target.files)} />
        </div>
        <div className='item'>
          <label>Ime</label>
          <input name='title' type='text' placeholder='Apple Airpods' onChange={handleChange} />
        </div>
        <div className='item'>
          <label>Opis</label>
          <input name='description' type='text' placeholder='O proizvodu ukratko' onChange={handleChange} />
        </div>
        <div className='item'>
          <label>Cijena</label>
          <input name='price' type='number' placeholder='Cijena' onChange={handleChange} />
        </div>
        <div className='item'>
          <label>Kategorije</label>
          <input type='text' placeholder='marame,carsafi' onChange={handleCategories} />
        </div>

        <div className='item'>
          <label>Na Stanju</label>
          <select className='item' name='inStock' id='stock' onChange={handleChange}>
            <option value='true'>Da</option>
            <option value='false'>Ne</option>
          </select>
        </div>

        <button onClick={handleClick} className='addButton'>
          Dodaj
        </button>
      </form>
    </div>
  );
};

export default NewProduct;

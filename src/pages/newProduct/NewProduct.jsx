import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { useHistory } from "react-router";
import "./newProduct.scss";
import { useDispatch } from "react-redux";
import { AddProductWithFirebase } from "../../customActions/AddProductWithFirebase";
import { AddProductWithCloudinary } from "../../customActions/AddProductWithCloudinary";
import { dividerClasses } from "../../../../handmade-app/node_modules/@mui/material";

const NewProduct = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const [files, setFiles] = useState([]);
  const [categories, setCategories] = useState();
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [pickedColor, setPickedColor] = useState("black");

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCategories = (e) => {
    setCategories(e.target.value);
  };
  const handleCheckboxes = (e) => {
    if (e.target.checked) {
      setSize((prev) => {
        return [...prev, e.target.value];
      });
    } else if (!e.target.checked) {
      setSize((prev) => {
        return prev.filter((item) => item !== e.target.value);
      });
    }
  };
  const handleColors = (e) => {
    if (e.target.checked) {
      setColor((prev) => {
        return [...prev, e.target.value];
      });
    } else if (!e.target.checked) {
      setColor((prev) => {
        return prev.filter((item) => item !== e.target.value);
      });
    }
  };

  const handleChangeComplete = (color) => {
    setPickedColor(color.hex);
  };

  const handleColorAdd = (e) => {
    e.preventDefault();
    setColor((prev) => {
      return [...prev, pickedColor];
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    const filesObj = Object.entries(files);

    console.log(filesObj);

    AddProductWithCloudinary(dispatch, filesObj, categories, inputs, size, color);
    history.push("/products");
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
          {/* <input type='text' placeholder='marame,carsafi' onChange={handleCategories} /> */}
          <select onChange={handleCategories}>
            <option value=''>--Izaberi kategoriju--</option>
            <option value='ogrlice'>Ogrlice</option>
            <option value='nausnice'>Nausnice</option>
            <option value='naruknice'>Naruknica</option>
          </select>
        </div>
        <div className='item'>
          <label>Velicine</label>
          <div className='sizes'>
            <div className='sizesContainer'>
              <label>S</label>
              <input onChange={handleCheckboxes} type='checkbox' id='s' name='s' value='s' />
              <label>M</label>
              <input onChange={handleCheckboxes} type='checkbox' id='m' name='m' value='m' />
              <label>L</label> <input onChange={handleCheckboxes} type='checkbox' id='l' name='l' value='l' />
            </div>
          </div>
        </div>
        <div className='item'>
          <label>Boje</label>
          <ChromePicker width='100%' color={pickedColor} onChangeComplete={handleChangeComplete} />
          <div className='pickedColor' style={{ background: `${pickedColor}` }}></div>
          <div className='pickedColors'>
            {color.map((c) => (
              <div className='color' style={{ background: `${c}` }}></div>
            ))}
          </div>
          <button onClick={handleColorAdd} className='addColor'>
            Dodaj boju
          </button>
          {/* <div className='sizes'>
            <div className='sizesContainer'>
              <label>Crvena</label>
              <input onChange={handleColors} type='checkbox' id='red' name='red' value='red' />
              <label>Bijela</label>
              <input onChange={handleColors} type='checkbox' id='white' name='white' value='white' />
              <label>Crna</label> <input onChange={handleColors} type='checkbox' id='black' name='black' value='black' />
              <label>Plava</label> <input onChange={handleColors} type='checkbox' id='blue' name='blue' value='blue' />
              <label>Siva</label> <input onChange={handleColors} type='checkbox' id='gray' name='gray' value='gray' />
            </div>
          </div> */}
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

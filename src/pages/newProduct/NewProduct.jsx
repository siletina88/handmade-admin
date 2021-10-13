import React, { useState } from "react";
import "./newProduct.scss";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

const NewProduct = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
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
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories };
          addProduct(product, dispatch);
        });
      }
    );
  };

  return (
    <div className='newProduct'>
      <h1 className='title'>Novi proizvod</h1>
      <form className='form'>
        <div className='item'>
          <label>Slika</label>
          <input type='file' id='file' onChange={(e) => setFile(e.target.files[0])} />
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
          <select name='inStock' id='stock' onChange={handleChange}>
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

import React from 'react'
import './newProduct.scss'

const NewProduct = () => {
  return (
    <div className="newProduct">
      <h1 className="title">Novi proizvod</h1>
      <form className="form">
        <div className="item">
          <label>Slika</label>
          <input type="file" id="file" />
        </div>
        <div className="item">
          <label>Ime</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="item">
          <label>Opis</label>
          <input type="text" placeholder="O proizvodu..." />
        </div>
        <div className="item">
          <label>Na Stanju</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="item">
          <label>Aktivan</label>
          <select name="active" id="active">
            <option value="yes">Da</option>
            <option value="no">Ne</option>
          </select>
        </div>
        <button className="addButton">Dodaj</button>
      </form>
    </div>
  )
}

export default NewProduct

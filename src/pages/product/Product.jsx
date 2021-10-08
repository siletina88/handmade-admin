import React from 'react'
import { Link } from 'react-router-dom'
import './product.scss'
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummyData'
import { Publish } from '@material-ui/icons/'

const Product = () => {
  return (
    <div className="product">
      <div className="titleContainer">
        <h1 className="title">Artikli</h1>
        <Link to="/newProduct">
          <button className="addButton">Dodaj</button>
        </Link>
      </div>
      <div className="top">
        <div className="topLeft">
          <Chart
            data={productData}
            dataKey="Prodaja"
            title="Statistika prodaje"
          ></Chart>
        </div>
        <div className="topRight">
          <div className="infoTop">
            <img
              src="https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_3.0,f_auto,w_500/5464948_png/tennis-deluxe-bracelet--round--white--rose-gold-tone-plated-swarovski-5464948.png"
              alt=""
              className="infoImg"
            />
            <span className="infoName">Swarovski ogrlica</span>
          </div>
          <div className="infoBottom">
            <div className="infoItem">
              <span className="infoKey">id:</span>
              <span className="infoValue">123</span>
            </div>
            <div className="infoItem">
              <span className="infoKey">prodaja:</span>
              <span className="infoValue">1223</span>
            </div>
            <div className="infoItem">
              <span className="infoKey">aktivan:</span>
              <span className="infoValue">yes</span>
            </div>
            <div className="infoItem">
              <span className="infoKey">na stanju:</span>
              <span className="infoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <form className="form">
          <div className="formLeft">
            <label>Ime proizvoda</label>
            <input type="text" placeholder="Swarowski" />
            <label>Na stanju</label>
            <select name="inStock" id="inStock">
              <option value="yes">Da</option>
              <option value="no">Ne</option>
            </select>
            <label>Aktivan</label>
            <select name="active" id="active">
              <option value="yes">Da</option>
              <option value="no">Ne</option>
            </select>
          </div>
          <div className="formRight">
            <div className="upload">
              <img
                src="https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5512577_png/swarovski-iconic-swan-earrings--swan--blue--rhodium-plated-swarovski-5512577.png"
                alt=""
                className="uploadImg"
              />
              <label for="file">
                <Publish></Publish>
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <button className="updateButton">Azuriraj</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Product

import React from 'react'
import './featureInfo.scss'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

const FeatureInfo = () => {
  return (
    <div className="featured">
      <div className="item">
        <span className="title">Prihodi</span>
        <div className="moneyContainer">
          <span className="money">$1,425.00</span>
          <span className="moneyRate">
            -11.4% <ArrowDownward className="icon negative"></ArrowDownward>
          </span>
        </div>
        <span className="subtitle">U odnosu na prosli mjesec</span>
      </div>
      <div className="item">
        <span className="title">Prodaja</span>
        <div className="moneyContainer">
          <span className="money">$3,425.00</span>
          <span className="moneyRate">
            +7.45% <ArrowUpward className="icon "></ArrowUpward>
          </span>
        </div>
        <span className="subtitle">U odnosu na prosli mjesec</span>
      </div>
      <div className="item">
        <span className="title">Troskovi</span>
        <div className="moneyContainer">
          <span className="money">$2,425.00</span>
          <span className="moneyRate">
            +1.45% <ArrowUpward className="icon "></ArrowUpward>
          </span>
        </div>
        <span className="subtitle">U odnosu na prosli mjesec</span>
      </div>
    </div>
  )
}

export default FeatureInfo

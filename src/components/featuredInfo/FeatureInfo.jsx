import React, { useEffect, useState } from "react";
import "./featureInfo.scss";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { userRequest } from "../../requestMethods";

const FeatureInfo = () => {
  const [income, setIncome] = useState([]);
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPercentage((res.data[1].total * 100) / res.data[0].total - 100);
      } catch (error) {}
    };
    getIncome();
  }, []);

  return (
    <div className='featured'>
      <div className='item'>
        <span className='title'>Prihodi</span>
        <div className='moneyContainer'>
          <span className='money'>$ {income[1]?.total}</span>
          <span className='moneyRate'>
            % {Math.floor(percentage)}
            {percentage < 0 ? <ArrowDownward className='icon negative'></ArrowDownward> : <ArrowUpward className='icon '></ArrowUpward>}
          </span>
        </div>
        <span className='subtitle'>U odnosu na prosli mjesec</span>
      </div>
      <div className='item'>
        <span className='title'>Prodaja</span>
        <div className='moneyContainer'>
          <span className='money'>$3,425.00</span>
          <span className='moneyRate'>
            +7.45% <ArrowUpward className='icon '></ArrowUpward>
          </span>
        </div>
        <span className='subtitle'>U odnosu na prosli mjesec</span>
      </div>
      <div className='item'>
        <span className='title'>Troskovi</span>
        <div className='moneyContainer'>
          <span className='money'>$2,425.00</span>
          <span className='moneyRate'>
            +1.45% <ArrowUpward className='icon '></ArrowUpward>
          </span>
        </div>
        <span className='subtitle'>U odnosu na prosli mjesec</span>
      </div>
    </div>
  );
};

export default FeatureInfo;

import React, { useState, useEffect } from "react";
import Chart from "../../components/chart/Chart";
import FeatureInfo from "../../components/featuredInfo/FeatureInfo";
import "./home.scss";

import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { userRequest } from "../../requestMethods";

const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });

        list.map((item) => setUserStats((prev) => [...prev, { name: MONTHS[item._id - 1], "Novi korisnici": item.total }]));
      } catch (error) {}
    };
    getStats();
  }, []);

  console.log(userStats);

  return (
    <div className='home'>
      <FeatureInfo></FeatureInfo>
      <Chart data={userStats} title='Statistika korisnika' grid dataKey='Novi korisnici'></Chart>
      <div className='widgets'>
        <WidgetSm></WidgetSm>
        <WidgetLg></WidgetLg>
      </div>
    </div>
  );
};

export default Home;

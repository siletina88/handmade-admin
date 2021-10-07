import React from 'react'
import Chart from '../../components/chart/Chart'
import FeatureInfo from '../../components/featuredInfo/FeatureInfo'
import './home.scss'
import { userData } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

const Home = () => {
  return (
    <div className="home">
      <FeatureInfo></FeatureInfo>
      <Chart
        data={userData}
        title="Statistika korisnika"
        grid
        dataKey="Aktivni korisnici"
      ></Chart>
      <div className="widgets">
        <WidgetSm></WidgetSm>
        <WidgetLg></WidgetLg>
      </div>
    </div>
  )
}

export default Home

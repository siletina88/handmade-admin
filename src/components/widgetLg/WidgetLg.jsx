import React from 'react'
import './widgetLg.scss'

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={'button ' + type}>{type}</button>
  }

  return (
    <div className="widgetLg">
      <h3 className="title">Zadnje transakcije</h3>
      <table className="table">
        <tr className="tr">
          <th className="th">Korisnik</th>
          <th className="th">Datum</th>
          <th className="th">Kolicina</th>
          <th className="th">Status</th>
        </tr>
        <tr className="tr">
          <td className="user">
            <img
              src="https://static.remove.bg/remove-bg-web/bc40b822e064ca145e7bee57e394c7bba2280416/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
              alt=""
              className="img"
            />
            <span className="name">Sasa Mehmedagic</span>
          </td>
          <td className="date">2 Jun 2021</td>
          <td className="amount">$188.00</td>
          <td className="status">
            <Button type="Approved"></Button>
          </td>
        </tr>

        <tr className="tr">
          <td className="user">
            <img
              src="https://static.remove.bg/remove-bg-web/bc40b822e064ca145e7bee57e394c7bba2280416/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
              alt=""
              className="img"
            />
            <span className="name">Sasa Mehmedagic</span>
          </td>
          <td className="date">2 Jun 2021</td>
          <td className="amount">$188.00</td>
          <td className="status">
            <Button type="Declined"></Button>
          </td>
        </tr>

        <tr className="tr">
          <td className="user">
            <img
              src="https://static.remove.bg/remove-bg-web/bc40b822e064ca145e7bee57e394c7bba2280416/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
              alt=""
              className="img"
            />
            <span className="name">Sasa Mehmedagic</span>
          </td>
          <td className="date">2 Jun 2021</td>
          <td className="amount">$188.00</td>
          <td className="status">
            <Button type="Pending"></Button>
          </td>
        </tr>

        <tr className="tr">
          <td className="user">
            <img
              src="https://static.remove.bg/remove-bg-web/bc40b822e064ca145e7bee57e394c7bba2280416/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
              alt=""
              className="img"
            />
            <span className="name">Sasa Mehmedagic</span>
          </td>
          <td className="date">2 Jun 2021</td>
          <td className="amount">$188.00</td>
          <td className="status">
            <Button type="Approved"></Button>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg

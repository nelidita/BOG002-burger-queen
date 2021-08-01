import React, { Fragment } from 'react'
import logo from '../img/logo.png'
import "./inicio.css"

function Inicio() {
  return (
    <Fragment>
      <div className="container">
        <img src={logo} />
        <div className="containerBotones">
          <button className="btn btn-dark btn-lg ">Mesero</button>
          <button className="btn btn-dark btn-lg ">Jefe de <br/>Cocina</button>
        </div>
      </div>
    </Fragment>
  )
}
export default Inicio

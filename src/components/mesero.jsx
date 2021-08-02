import React, { Fragment } from 'react'
import logo from '../img/logo.png'
import "./inicio.css"

function Mesero() {
  return (
    <Fragment>
      <div className="container">
        <img src={logo} />
        <div className="containerBotones">
          <button className="btn btn-dark btn-lg ">Nuevo<br/>pedido</button>
          <button className="btn btn-dark btn-lg ">Lista de<br/>pedidos</button>
        </div>
      </div>
    </Fragment>
  )
}
export default Mesero
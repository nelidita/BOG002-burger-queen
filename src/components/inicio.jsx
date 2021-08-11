import React, { Fragment } from 'react'
import logo from '../img/logo.png'
import "./inicio.css"
import Mesero from './mesero';

function Inicio() {

  const vistaMesero = () => {
    <Mesero></Mesero>
  }

  return (
    <Fragment>
      <div className="container">
        <img src={logo} />
        <div className="containerBotones">
          <button onClick= {vistaMesero} className="btnInicio btn-dark btn-lg ">Mesero</button>
          <button className="btnInicio btn-dark btn-lg ">Jefe de<br/>Cocina</button>
        </div>
      </div>
    </Fragment>
  )
}
export default Inicio

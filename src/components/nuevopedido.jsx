import React, { Fragment } from 'react'
import logo from '../img/logo.png'
import "./nuevopedido.css"

function NuevoPedido() {
    return (
        <Fragment>
            <div className="container">
                <img src={logo} />
                <div className="containerBotones">
                    <label htmlFor="name">Nombre del cliente:</label>
                    <input type="text" name="name" />
                    <label htmlFor="name">N° de Mesa:</label>
                    <input type="text" name="mesa" />
                </div>
                <div className="btnMenu">
                    <button className="btnMenu btn-dark btn-lg ">Desayunos</button>
                    <button className="btnMenu btn-dark btn-lg ">Hamburguesas</button>
                </div>
            </div>
        </Fragment>
    )
}
export default NuevoPedido
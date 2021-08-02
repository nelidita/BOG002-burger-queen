import React, { Fragment, useState, useEffect } from 'react'
import logo from '../img/logo.png'
import "./nuevopedido.css"

function NuevoPedido() {

  const [menu, setMenu] = useState([])

  // const obtenerMenu = async() => {
  //   const data = await fetch(".../public/menu.json")
  //   const dataMenu = await data.json()
  //   console.log(dataMenu)
  //   // setMenu(menu)
  // }
  // obtenerMenu()

  useEffect(() => {
    fetch('./menu.json')
      .then(response => response.json())
      .then(data => console.log(data[0]))
  }, [])


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
        <div className="desayunos">
          <label htmlFor="desayunos"></label>
          <input type="text" name="desayunos" />
        </div>
      </div>
    </Fragment>
  )
}
export default NuevoPedido

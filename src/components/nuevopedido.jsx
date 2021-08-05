import React, { Fragment, useState, useEffect } from 'react'
import logo from '../img/logo.png'
import "./nuevopedido.css"

function NuevoPedido() {

  const [menu, setMenu] = useState([])

  useEffect(() => {

    fetch('./menu.json')
      .then(response => response.json())
      .then((data) =>setMenu(data[0]))

  }, [])

  const arrayItemsDesayunos = []
  const itemsDesayunos = item => item.desayuno.map(desayuno => arrayItemsDesayunos.push(desayuno))



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
            {
              Object.keys(menu).map(item => (
                <input key={item} className="btn btn-black" value={ itemsDesayunos } type="submit"/>
              ))
            }
        </div>
      </div>
    </Fragment>
  )
}
export default NuevoPedido

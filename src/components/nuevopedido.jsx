import React, { Fragment, useState, useEffect } from 'react'
import logo from '../img/logo.png'
import "./nuevopedido.css"

function NuevoPedido() {

  const [menu, setMenu] = useState([])

  useEffect(() => {

    fetch('./menu.json')
      .then(response => response.json())
      .then((data) => setMenu(data[0]))

  }, [])

  // const arrayItemsDesayunos = []
  // const itemsDesayunos = item => item.forEach(desayuno => {console.log(desayuno)})

  // const itemsMenu = JSON.stringify(menu.forEach(item => console.log(item)))
  // console.log(itemsMenu)

  const itemsMenu = (object) => {
    for (const property in object) {
      console.log(`${property}: ${object[desayunos]}`);
    }
  }
  itemsMenu(menu)


  // console.log(menu.desayunos)

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
          <form className="form-group">
            {
              // menu.map(item => console.log(item))
              //  (
              // <input key={item} className="form-control m-3" value={itemsDesayunos(item)} type="button"/>
              // ))
            }
          </form>
        </div>
      </div>
    </Fragment>
  )
}
export default NuevoPedido

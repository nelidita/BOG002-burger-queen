import React, { Fragment, useState, useEffect } from 'react'
import logo from '../img/logo.png'
import "./nuevopedido.css"

function NuevoPedido() {

  const [menu, setMenu] = useState([])
  const [typeMenu, setTypeMenu] = useState("desayuno")
  const [product, setProduct] = useState("")
  const [listProducts, setListProducts] = useState([])

  useEffect(() => {
    fetch('./menumodificado.json')
      .then(response => response.json())
      .then(data => setMenu(data))
  }, [])

  const menuFiltrado = menu.filter(object => object.type === typeMenu)

  const tipoProductos = (event) => {
    event.preventDefault()
    const btnMenu = event.target.value
    setTypeMenu(btnMenu)
  }

  const addProducts = (event) => {
    event.preventDefault()
    setProduct(event.target.value)
    setListProducts([...listProducts,product])
  }

  return (
    <Fragment>
      <div className="containerNuevoPedido">
        <img className="logoNuevoPedido" src={logo} />

        <form className="form-group">

          <div className="infoCliente">
            <label htmlFor="name">Nombre del cliente:</label>
            <input className="form-control" type="text" name="name" />
            <label>N° de Mesa:
              <select className="custom-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </label>
          </div>

          <div className="row" id="containerTabla">

            <div className="btn-group">
              <div className="col">
                <button onClick={tipoProductos} className="btnMenu btn-dark btn-lg btn-block m-3" value="desayuno">Desayunos</button>
              </div>
              <div className="col">
                <button onClick={tipoProductos} className="btnMenu btn-dark btn-lg btn-block m-3" value="hamburguesa">Hamburguesas</button>
              </div>
              <div className="col">
                <button onClick={tipoProductos} className="btnMenu btn-dark btn-lg btn-block m-3" value="bebidas">Bebidas</button>
              </div>
              <div className="col">
                <button onClick={tipoProductos} className="btnMenu btn-dark btn-lg btn-block m-3" value="acompañamientos">Acompañamientos</button>
              </div>
            </div>

            <div className="col" id="divProductosMenu">
              <h2>Productos</h2>
              {menuFiltrado.length > 0
                ? menuFiltrado.map(item => (
                  <button
                    onClick={(event) => addProducts(event)}
                    className="btn btn-success btn-block m-1"
                    key={item.id}
                    value={item.name}> {item.name} {item.price + "$"}
                  </button>))
                : []
              }
            </div>

            <div className="col">
              <h2>Pedido</h2>
              <div className="row">
                <h4 className="col">Productos</h4>
                <h4 className="col">Cantidad</h4>
                <h4 className="col">Precio</h4>
              </div>
            </div>

          </div>

        </form>
      </div>
    </Fragment>
  )
}
export default NuevoPedido

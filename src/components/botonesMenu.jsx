import React, { Fragment, useState } from 'react'

function BotonesMenu() {

  const [btnMenu, setBtnMenu] = useState([])

  const valueBtn = () => {
    setBtnMenu()
  }

  return (
    <Fragment>
          <div className="col">
            <button onClick={productos} className="btnMenu btn-dark btn-lg m-3" value={btnMenu}>Desayunos</button>
          </div>
    </Fragment>
  )
}
export default BotonesMenu

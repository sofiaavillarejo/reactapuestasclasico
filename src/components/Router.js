import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import DetalleEquipo from './DetalleEquipo'
import Apuestas from './Apuestas'

export default class Router extends Component {
  render() {

    function DetalleEquipoElement() {
      let {idequipo} = useParams();
      return( <DetalleEquipo id={idequipo}/>)
    }

    return (
      <div>
        <BrowserRouter>
        <Menu/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/detalles/:idequipo" element={<DetalleEquipoElement/>} />
            <Route path="/apuestas" element={<Apuestas/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

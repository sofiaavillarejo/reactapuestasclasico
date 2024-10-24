import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';

export default class DetalleEquipo extends Component {
  state = {
    equipo: null
  }

  detallesEquipo = () =>{
    var request = "api/Equipos/" + this.props.id;
    console.log(this.props.id)
    let url = Global.urlApi + request;
    axios.get(url).then(response => {
      console.log(response.data)
      this.setState({
        equipo: response.data
      })
    })
  }

  componentDidMount = () =>{
    this.detallesEquipo();
  }

  componentDidUpdate = (oldProps) => {
    if (oldProps.id != this.props.id){
      this.detallesEquipo();
    }
  }
  render() {
    return (
      <div>
        <h1>Detalle Equipo</h1>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>IdEquipo</th>
              <th>Nombre</th>
              <th>Imagen</th>
              <th>Champions</th>
              <th>Web</th>
              <th>Finalista</th>
              <th>Descripcion</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.equipo && (
                <tr>
                  <td>{this.props.id}</td>
                  <td>{this.state.equipo.nombre}</td>
                  <td><img style={{width:"150px"}} src={this.state.equipo.imagen}/></td>
                  <td>{this.state.equipo.champions}</td>
                  <td>{this.state.equipo.web}</td>
                  <td>{this.state.equipo.finalista}</td>
                  <td>{this.state.equipo.descripcion}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

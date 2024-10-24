import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';

export default class Apuestas extends Component {
  state = {
    apuestas: [],
    status: false
  }

  cajaId = React.createRef();
  cajaUsuario = React.createRef();
  cajaResultado = React.createRef();
  cajaFecha = React.createRef();

  loadApuestas = () =>{
    var request = "api/Apuestas";
    var url = Global.urlApi + request;
    axios.get(url).then(response => {
      console.log(response.data);
      this.setState({
        apuestas: response.data
      })
    })
  }

  componentDidMount = () =>{
    this.loadApuestas();
  }

  crearApuesta = (e) =>{
    e.preventDefault();
    var request = "api/Apuestas";
    var url = Global.urlApi + request;
    let id = this.cajaId.current.value;
    let usuario = this.cajaUsuario.current.value;
    let resultado = this.cajaResultado.current.value;
    let fecha = this.cajaFecha.current.value;

    let apuesta = {
      idApuesta: id,
      usuario: usuario,
      resultado: resultado,
      fecha: fecha,
    }

    axios.post(url, apuesta).then(response => {
      console.log(response.data);
      console.log("apuesta creada");
      //recargar tabla con apuestas incluyendo la apuesta creada
      this.loadApuestas();
    })
  }
  render() {
    return (
      <div>
        <h1>Apuestas Component</h1>
        <form style={{marginBottom:"20px", width:"20%"}}>
          <label>Id Apuesta</label>
          <input className='form-control' type='text' ref={this.cajaId} /><br/>
          <label>Usuario</label>
          <input className='form-control' type='text' ref={this.cajaUsuario} /><br/>
          <label>Resultado</label>
          <input className='form-control' type='text' ref={this.cajaResultado} /><br/>
          <label>Fecha</label>
          <input className='form-control' type='text' ref={this.cajaFecha} /><br/>
          <hr/>
          <button onClick={this.crearApuesta} className='btn btn-warning'>Crear</button>
        </form>
        <table className='table table-hover table-bordered'>
          <thead>
            <tr>
              <th>Id Apuesta</th>
              <th>Usuario</th>
              <th>Resultado</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.apuestas.map((apuesta, index) => {
                return(
                  <tr key={index}>
                    <td>{apuesta.idApuesta}</td>
                    <td>{apuesta.usuario}</td>
                    <td>{apuesta.resultado}</td>
                    <td>{apuesta.fecha}</td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default class App extends Component {
  render(){
    return(
      <div className="App">
        <br />
        <button className="btn btn-success">Agregar un libro nuevo</button>
        <br />
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>Titulo del libro</th>
              <th>Autor</th>
              <th>Editorial</th>
              <th>Cantidad de páginas</th>
              <th>Género</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    )
  }
}
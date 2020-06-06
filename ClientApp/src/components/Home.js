import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';


export default class Home extends Component {
  static displayName = Home.name;

  render () {
    return(
      <div>
        <Jumbotron>
          <h1 className="display-3">Hola, todo el mundo!</h1>

          <p className="lead">Esto es una simple tarea que nos puso nuestro profesor Amadís Suares, en la asignación: Programación Tres</p>

          <hr className="my-2" />

          <p>Si desea utilizar esta App Web, deben primero instalar todas las dependencias de ClientApp</p>
          <p>Ojo, si aparece cualquier tipo de error a la hora de instalar las dependencias, debes borrar la carpeta llamada <strong>node_modules</strong>, y con la console debes ejecutar <strong>NPM INSTALL o NPM I</strong>  ,y ahí ejecutar el Back-end utilizando VS (Visual Studio) o VS Code (Visual Studio Code)</p>

          <p className="lead">
            <Button tag={Link} to='/Cedula' color="primary">Para Probar la App</Button>
          </p>
          
        </Jumbotron>
      </div>
    );
  }
}

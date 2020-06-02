import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Jumbotron,
  Button,
  FormGroup,
  Form,
  Label,
  Input,
  Table,
} from "reactstrap";

const Cedula = () => {
  const [ cedula, setCedula ] = useState(0);
  const [ email, setEmail ] = useState("");
  const [ tel, setTel ] = useState(0);
  const [ isLogins, setIslogins ] = useState(false);
  const [ isVery, setIsvery ] = useState(null);
  const [ datas, setDatas ] = useState([]);
  const [ datos, setDatos ] = useState([]);

  const handlChange1 = (e) => {
    setCedula(([e.target.name] = e.target.value));
  };

  const handChange2 = (e) => {
    setEmail(([e.target.name] = e.target.value));
  };

  const handChange3 = (e) => {
    setTel(([e.target.name] = e.target.value));
  };

  const handleClick1 = () => {
    axios
      .get(`http://173.249.49.169:88/api/test/consulta/${cedula}`)
      // axios.post('http://localhost:5000/api/DbCedula', {
      //     "Cedula": 6051,
      //     "Nombre": "Victor",
      //     "Apellido": "Rosario",
      //     "FechaNacimiento": "19/07/1999",
      //     "LugarNacimiento": "Santo Domingo"
      // })
      .then((response) => {
        console.log(response.data);
        if (response.data.OK) {
          setDatas(response.data);
          setIsvery(true);
          setIslogins(true);
        }
      })
      .catch((error) => console.log("Error PaPu" + error));
  };

  const handleClick2 = () => {
    const data = {
      Cedula: datas.Cedula,
      Nombre: datas.Nombres,
      Apellido: datas.Apellido1,
      FechaNacimiento: datas.FechaNacimiento,
      LugarNacimiento: datas.LugarNacimiento,
      email: email,
      tel: tel,
    };
    axios.post(`http://localhost:5000/api/DbCedula`, data)
    .then(response => console.log(response))
    .catch(error => console.error(error));
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/api/DbCedula`)
    .then(response => {
      setDatos(response.data);
    })
    .catch(error => console.log(`Error ${error}`));
  }, [datos]);

  return (
    <div>
      <Form>
        <Jumbotron>
          <FormGroup>
            <Label for="cedula">Introducir una Cédula</Label>
            <h1>{cedula}</h1>
            <Input
              type="number"
              name="cedula"
              id="cedula"
              placeholder="Ej: 4084624986101"
              onChange={handlChange1}
            />
          </FormGroup>
          
          {isVery ? (<h3>Genial, ya está verificado</h3>) : (<h3>Nmms, no es válido</h3>)}

          <FormGroup>
            <Button color="success" onClick={handleClick1}>
              Revisar
            </Button>
          </FormGroup>

          <br></br>

          {isLogins ? null : (
            <div>
              <h2>Favor en agregar su Email y Teléfono</h2>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input
                  type="email"
                  name="email"
                  id="email1"
                  placeholder="Ej: victorrosariodeveloper@gmail.com"
                  onChange={handChange2}
                />
              </FormGroup>
              <br></br>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input
                  type="number"
                  name="tel"
                  id="tel1"
                  placeholder="Ej: (829) 431-1465"
                  onChange={handChange3}
                />
              </FormGroup>

              <FormGroup>
                <br></br>
                <Button type="button" color="success" onClick={handleClick2}>
                  Enviar
                </Button>
              </FormGroup>
            </div>
          )}
        </Jumbotron>
      </Form>

      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Cédula</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
            <th>Correo Electrónico</th>
          </tr>
        </thead>
        <tbody>

          {datos.map((e,i) => 
          <tr key={i}>
            <th scope="row">{i + 1}</th>
            <td>{e.cedula}</td>
            <td>{e.nombre}</td>
            <td>{e.apellido}</td>
            <td>{e.tel}</td>
            <td>{e.email}</td>
          </tr>)}
        </tbody>
      </Table>
    </div>
  );
};

export default Cedula;

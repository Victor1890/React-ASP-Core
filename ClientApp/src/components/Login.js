import React, { useState } from 'react';
import axios from 'axios';
import { Col, Button, Form, FormGroup, Label, Input, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export const Login = () =>{
    
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ User, setUser ] = useState(null);

    const handleChange = e => {
        setEmail(e.target.value);
    }

    const handleChange1 = e => {
        setPassword(e.target.value);
    }

    const handleClick = () => {

        axios.get(`http://localhost:5000/api/DbUser`)
        .then(response => {
            response.data.map(e => {
                if(email === e.email && password === e.password){
                    document.location.href = '/Cedula';
                    setUser(e);
                }
            });
        })
        .catch(error => console.log(error));
    }

    return (
        <div>
            <Form>
                <FormGroup row>
                    <Label for="email" sm={2}>Correo</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="email" placeholder="Ej: victorrosariodeveloper@gmail.com" onChange={handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="password" sm={2}>Contraseña</Label>
                    <Col sm={10}>
                        <Input type="password" name="password" id="password" placeholder="Ej: •••••••••" onChange={handleChange1} />
                    </Col>
                </FormGroup>

                <Button type='button' color="success" block onClick={handleClick}>Log In</Button>

                <FormGroup>
                    <NavLink tag={Link} to='/Register' className='text-center'>¿Deseas registrase?</NavLink>
                </FormGroup>
            </Form>
        </div>
    );
}
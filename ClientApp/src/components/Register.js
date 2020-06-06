import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Button, Form, FormGroup, Label, Input, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export const Register = () =>{

    const [ email, setEmail ] = useState('');
    const [ password1, setPassword1 ] = useState('');
    const [ password2, setPassword2 ] = useState('');

    const handleChange = e => {
        setEmail(e.target.value);
    }

    const handleChange1 = e => {
        setPassword1(e.target.value);
    }

    const handleChange2 = e => {
        setPassword2(e.target.value);
    }

    const handleClick = () => {
        if(email !== '' || password1 !== '' || password2 !== ''){
            if(password1 === password2){
                axios.post(`http://localhost:5000/api/DbUser`,{
                    "Email": email,
                    "Password": password1
                })
                .then(() => {
                    document.location.href = '/Login';
                })
                .catch(error => console.log(error));
            }
            else{
                alert(`Las Contraseñas no son iguales`);
            }
        }
        else{
            alert(`Favor en llenar todos los campos`)
        }
    }
    
    return(
        <div>
            <Form>
                <FormGroup row>
                    <Label for="email" sm={2}>Correo</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="email" placeholder="Ej: victorrosariodeveloper@gmail.com" onChange={handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="password1" sm={2}>Contraseña</Label>
                    <Col sm={10}>
                        <Input type="password" name="password1" id="password1" placeholder="Ej: •••••••••" onChange={handleChange1}/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="password2" sm={2}>Repetir Contraseña</Label>
                    <Col sm={10}>
                        <Input type="password" name="password2" id="password2" placeholder="Ej: •••••••••" onChange={handleChange2}/>
                    </Col>
                </FormGroup>

                <Button type='button' color="success" block onClick={handleClick}>Register</Button>

                <FormGroup>
                    <NavLink tag={Link} to='/Login' className='text-center'>Ya tienes una cuenta?</NavLink>
                </FormGroup>
            </Form>
        </div>
    );
}
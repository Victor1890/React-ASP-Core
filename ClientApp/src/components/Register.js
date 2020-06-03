import React, { Component } from 'react';
import axios from 'axios';
import { Col, Button, Form, FormGroup, Label, Input, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Register extends Component{

    constructor(){
        super();
        this.state = {
            email:'',
            password1:'',
            password2:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleClick = () => {
        const { password1, password2, email } = this.state;

        if(email !== '' || password1 !== '' || password2 !== ''){
            if(password1 === password2){
                axios.post(`http://localhost:5000/api/DbUser`,{
                    "Email": email,
                    "Password": password1
                })
                .then(result => {
                    document.location.href = '/Login'
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

    render(){
        return(
            <div>
                <Form>
                    <FormGroup row>
                        <Label for="email" sm={2}>Correo</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="email" placeholder="Ej: victorrosariodeveloper@gmail.com" onChange={this.handleChange}/>
                        </Col>
                    </FormGroup>
    
                    <FormGroup row>
                        <Label for="password1" sm={2}>Contraseña</Label>
                        <Col sm={10}>
                            <Input type="password" name="password1" id="password1" placeholder="Ej: •••••••••" onChange={this.handleChange}/>
                        </Col>
                    </FormGroup>
    
                    <FormGroup row>
                        <Label for="password2" sm={2}>Repetir Contraseña</Label>
                        <Col sm={10}>
                            <Input type="password" name="password2" id="password2" placeholder="Ej: •••••••••" onChange={this.handleChange}/>
                        </Col>
                    </FormGroup>
    
                    <Button type='button' color="success" block onClick={this.handleClick}>Register</Button>
    
                    <FormGroup>
                        <NavLink tag={Link} to='/Login' className='text-center'>Ya tienes una cuenta?</NavLink>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
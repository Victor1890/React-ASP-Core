import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Login extends Component{
    
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
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
        const [ email, password ] = this.state;

        console.log(email, password);
    }

    render(){
        return (
            <div>
                <Form>
                    <FormGroup row>
                        <Label for="email" sm={2}>Correo</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="email" placeholder="Ej: victorrosariodeveloper@gmail.com" onChange={this.handleChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" sm={2}>Contraseña</Label>
                        <Col sm={10}>
                            <Input type="password" name="password" id="password" placeholder="Ej: •••••••••" onChange={this.handleChange} />
                        </Col>
                    </FormGroup>
    
                    <Button type='button' color="success" block onClick={this.handleClick}>Log In</Button>
    
                    <FormGroup>
                        <NavLink tag={Link} to='/Register' className='text-center'>¿Deseas registrase?</NavLink>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
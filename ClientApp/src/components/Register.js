import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export function Register(){
    return(
        <div>
            <Form>
                <FormGroup row>
                    <Label for="email" sm={2}>Correo</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="email" placeholder="Ej: victorrosariodeveloper@gmail.com" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="password1" sm={2}>Contraseña</Label>
                    <Col sm={10}>
                        <Input type="password" name="password" id="password1" placeholder="Ej: •••••••••" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="password2" sm={2}>Repetir Contraseña</Label>
                    <Col sm={10}>
                        <Input type="password" name="password" id="password2" placeholder="Ej: •••••••••" />
                    </Col>
                </FormGroup>

                <Button type='submit' color="success" block>Register</Button>

                <FormGroup>
                    <NavLink tag={Link} to='/Login' className='text-center'>Ya tienes una cuenta?</NavLink>
                </FormGroup>
            </Form>
        </div>
    );
}
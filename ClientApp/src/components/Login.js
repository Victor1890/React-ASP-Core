import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export function Login(){
    return (
        <div>
            <Form>
                <FormGroup row>
                    <Label for="email" sm={2}>Correo</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="email" placeholder="Ej: victorrosariodeveloper@gmail.com" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="password" sm={2}>Contraseña</Label>
                    <Col sm={10}>
                        <Input type="password" name="password" id="password" placeholder="Ej: •••••••••" />
                    </Col>
                </FormGroup>

                <Button type='submit' color="success" block>Log In</Button>

                <FormGroup>
                    <NavLink tag={Link} to='/Register' className='text-center'>¿Deseas registrase?</NavLink>
                </FormGroup>
            </Form>
        </div>
    );
}
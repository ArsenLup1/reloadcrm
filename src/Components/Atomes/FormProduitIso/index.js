import React from 'react';
import Form from 'react-bootstrap/Form'
import LoginFormStc from './loginForm.stc';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
//import 

const LoginForm = () => {

    return ( 
    <Row className="mx-auto h-100 rounded">
        <div className="col-lg-12 text-center my-3 mt-5">
            <h1>Connexion</h1>
        </div>
        <Form className="mb-3">
            <Form.Group className = "mb-3" controlId = "formBasicEmail" >
            <Form.Label > Email address </Form.Label> 
            <Form.Control type = "email" placeholder = "Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remmeber password" />
            </Form.Group>
        </Form>
    </Row>
    )
}

export default LoginForm;
import React from 'react';
import './index.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
    return (
        <div className='loginbox'>
            <Form className='rounded p-4 sm-3'>
                 <Form.Group className="rounded mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="rounded mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                    <Form.Check type='checkbox' label="remember me" />
                </Form.Group>
                <Button variant="primary" type='submit'>login</Button>
                </Form>
        </div>
    );
}

export default Login;
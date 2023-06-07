import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthSystem from '../AuthSystem/AuthSystem';

const Login = () => {

  const {handleEmail,handelPassword,loginBtn } = AuthSystem()
    return (
        <div>
             <div className="">
      <Form className="w-50 mx-auto mt-5 bg-info p-2">
        <h1 className="text-primary text-center">Login Please !</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handelPassword} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button onClick={loginBtn} variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
        </div>
    );
};

export default Login;
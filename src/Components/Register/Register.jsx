import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import AuthSystem from "../AuthSystem/AuthSystem";
import { Link } from "react-router-dom";

const Register = () => {
  const [isDisabled, setIsDisabled] = useState(true)
  const { google, handleEmail, handelPassword, signBtn, github,errorFun, handelName } = AuthSystem();

  return (
    <div className="">
      <Form className="w-75 mx-auto mt-5 bg-info p-2">
        <h1 className="text-primary text-center">Register Please !</h1>
        {errorFun()}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control onBlur={handelName} type="text" placeholder="Name" />
          </Form.Group>

          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmail}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handelPassword}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={()=>setIsDisabled(!isDisabled)} type="checkbox" label="Check me out" />
        </Form.Group>

        <Button disabled={isDisabled} onClick={signBtn} variant="primary" type="submit">
          Sign Up
        </Button>
        <button onClick={google} className="btn btn-primary m-1">
          Google
        </button>
        <button onClick={github} className="btn btn-primary m-1">
          Github
        </button>
        <p>
          Already Have An Account <Link to={"/login"}>Login</Link>{" "}
        </p>
      </Form>
    </div>
  );
};

export default Register;

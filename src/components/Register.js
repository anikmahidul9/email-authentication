import { createUserWithEmailAndPassword, getAuth,sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import app from "../firebase/firebase.init";

const auth = getAuth(app);

function Register() {
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
 
    const form =e.target
    const email = form.email.value;
    const password = form.password.value;
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setPasswordError("Please input two upercase");
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setPasswordError("Please input a special charecter");
      return;
    }
    setPasswordError("");
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        emailVerification();
      })
      .catch((error) => {
        
        console.error("error", error);
        setPasswordError(error.message);
      });
 
      
  };

const emailVerification= ()=>{
      sendEmailVerification(auth.currentUser)
      .then(()=>{
        alert(' PLease verify your mail')
      })
}
  return (
    <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <p className="text-danger">{passwordError}</p>
      {
        success && <p className="text-success">Successfully added</p>
      }
      <Button variant="primary" type="submit">
        Submit
      </Button>
    
    </Form>
  );
}

export default Register;

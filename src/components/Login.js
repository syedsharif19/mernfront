



import React, { useState } from 'react';
import { Form, Button, FormGroup, FormLabel, FormControl, FormText, Container } from 'react-bootstrap';
import './login.css'; // CSS for styling

import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://github.com/syedsharif19/mernfront/api/auth/login", {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();

    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      navigate('/');
      props.showAlert("Successful login", "success");
    } else {
      props.showAlert("Invalid login information", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const myStyle={
    // backgroundImage:"url('https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    height:"100vh",
    // marginTop:"-50px",
    width:"100vw",
    // fontSize:"50px",
    backgroundSize:"cover",
    backgroundRepeat:"np-repeat",
    marginLeft:"-23px",

  };

  return (
    <Container fluid className="glassmorphism-container" style={myStyle}>
      <div className="glassmorphism-form">
        <h2>Login to continue  I-CloudBook</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup controlId="email" className="my-3">
            <FormLabel>Email address</FormLabel>
            <FormControl
              type="email"
              placeholder="Enter email"
              onChange={onChange}
              value={credentials.email}
              name="email"
            />
            <FormText className="text-muted">We'll never share your email with anyone else.</FormText>
          </FormGroup>
          <FormGroup controlId="password" className="my-3">
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              placeholder="Password"
              onChange={onChange}
              value={credentials.password}
              name="password"
            />
            <FormText className="text-muted">End to end Encrypted.</FormText>
          </FormGroup>
          <Button type="submit" className="btn btn-primary">Login</Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;

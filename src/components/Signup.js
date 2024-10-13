
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
// import './signup.css'
import { FormGroup,FormLabel,FormControl,FormText,Button,Container,Form } from 'react-bootstrap';


const Signup = (props) => {

  const [credentials, setcredentials] = useState({name:"", email: "", password: "", cpassword:"" })

  // used to redirect to home page 
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch("https://backend22.netlify.app/api/auth/createuser", {
    const response = await fetch("https://backend-yccy.onrender.com/api/auth/createuser", {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({name:credentials.name ,email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
  
    if(json.success){
      // save the auth token into local storage and redirect
      localStorage.setItem('token', json.authtoken);
      // used to redirect to home page 
      navigate('/');
    props.showAlert("Successful signup","success")

    }

  else{
    props.showAlert("Account with this email already exists","danger")
  }
    }
  
  const onchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const myStyle={
    // // // backgroundImage:"url('https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=600')",
    // height:"100vh",
    // // marginTop:"-45px",
    // width:"100%",
    // // // fontSize:"50px",
    // backgroundSize:"cover",
    // backgroundRepeat:"np-repeat",
    // marginLeft:"-23px",
    // marginLeft:"300px",
    // width:"100%",
    // height:"100%",
    // / backgroundImage:"url('https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    height:"100vh",
    // marginTop:"-50px",
    width:"100vw",
    // fontSize:"50px",
    backgroundSize:"cover",
    backgroundRepeat:"np-repeat",
    marginLeft:"-23px",


  }
  return (
    <div className="maincontainer" >
    <Container fluid className="glassmorphism-container " style={myStyle}>
    <div className="glassmorphism-form">
      <h2>Create an account to use I-CloudBook</h2>
      <Form onSubmit={handleSubmit}>
      <FormGroup controlId="text" className="my-3">
          <FormLabel>Name</FormLabel>
          <FormControl
            type="text"
            placeholder="Name"
            id='name'
            onChange={onchange}
            required
            value={credentials.name}
            name="name"
          />
          <FormText className="text-muted"></FormText>
        </FormGroup>
        <FormGroup controlId="email" className="my-3">
          <FormLabel>Email address</FormLabel>
          <FormControl
            type="email"
            id='email'
            placeholder="Enter email"
            onChange={onchange}
            required
            value={credentials.email}
            name="email"
          />
          <FormText className="text-muted">We'll never share your email with anyone else.</FormText>
        </FormGroup>
        <FormGroup controlId="password" className="my-3">
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            id='exampleInputPassword1'
            placeholder="Password"
            onChange={onchange}
            required minLength={5 }  
            value={credentials.password}
            name="password"
          />
          <FormText className="text-muted">End to end Encrypted.</FormText>
        </FormGroup>
        <FormGroup controlId="password" className="my-3">
          <FormLabel> Confirm Password</FormLabel>
          <FormControl
            type="password"
            id='exampleInputPassword1'
            placeholder=" confirm Password"
            onChange={onchange}
            required minLength={5 }  
            value={credentials.cpassword}
            name="cpassword"
          />
          <FormText className="text-muted">End to end Encrypted.</FormText>
        </FormGroup>
        <Button type="submit" className="btn btn-primary" >Submit</Button>
      </Form>
    </div>
  </Container>
  


  
  </div>
    );
  };
  
  export default Signup;
  


   



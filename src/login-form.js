import React, { useState } from "react";
import { Link } from 'react-router-dom';
import RegisterPage from "./register-form";
import axios from "axios";
import bgImg from './login.jpg';
import './styles/pages/Login.css';
import '../node_modules/react-widgets/styles.css';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [message, setMessage] = useState("");
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
        email,
        password
      };
      axios
        .post("http://localhost:8090/api/v1/users/login", data)
        .then((response) => {
          console.log(response);
          setMessage("Login successful");
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log("server responded");
            setMessage("Invalid email or password");
          } else if (error.request) {
            console.log("network error");
            setMessage("network error");
          } else {
            console.log(error);
            setMessage("eroare");
          }
        });
    };
  
    return (
      <section>
      <div className="login">
          <div className="col-1">
              <h2>Welcome!</h2>
              <span>Log in with your account details</span>
              <br/>
              <br/>
              <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
              <input  type="email"   id="email"  name="email"  value={email}  onChange={handleEmailChange}  required placeholder="Email" />
        
              <input type="password" id="password"name="password" value={password}  onChange={handlePasswordChange} required placeholder="Password" />
              
          <button type="submit" className='btn'>Log In</button>
        </form>
        {message && <p>{message}</p>}
        <input type="checkbox" value="Remember me"/> Remember me
                <form>
                   <br/>
                   
                <button type="submit" className='btn'>Sign Up</button>
           
                </form>
                </div>
      <div className="col-2">
                <div class="container">
                <img src={bgImg} alt="" />
                </div>
                    <h1>The best deals in town</h1>
                    <h3>Glad to have you back! Log in to see the best offers for food delivery around you.</h3>
            </div>
        </div>
    </section>
    );
  };
export default LoginForm;
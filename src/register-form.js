import React, { useState } from 'react';
import axios from 'axios';
import bgImg from './register.jpg';
import './styles/pages/Register.css';
import '../node_modules/react-widgets/styles.css';
const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username,
      firstName,
      lastName,
      email,
      password,
    };
    axios
      .post("http://localhost:8090/api/v1/users/register", data)
      .then((response) => {
        console.log(response);
        setMessage("register successful");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
          setMessage("eroare 401");
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
      <div className="register">
              
        <div className="col-1">

          <h2>Welcome!</h2>
          <span>Let's get you signed up</span>

          <form id='form' onSubmit={handleSubmit} className='flex flex-col' >
            <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} placeholder="Username" required />
            <input type="text" id="firstName" name="firstName" value={firstName} onChange={handleFirstNameChange} placeholder="First Name" required />

            <input type="text" id="lastName" name="lastName" value={lastName} onChange={handleLastNameChange} required placeholder="Last Name" />

            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required placeholder="Email" />

            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required placeholder="Password" />

            <button className='btn' type="submit">Sign Up</button>

          </form>
          {message && <p>{message}</p>}
        </div>
        <div className="col-2">
          <div class="container">
            <img src={bgImg} alt="" />
          </div>
          <h1>Get your food right away</h1>
          <h3>Browse through the best offers each restaurant near you has to offer and pick what's best for you!</h3>
        </div>
      </div>
    </section>

  );
}


export default RegisterPage;

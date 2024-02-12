import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from '../firebaseConfig.js';
import './signup.css'; // Import your CSS file


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // React Router's useNavigate hook

  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password);
      if (user) {
        alert('Log in Successfully');
        // Redirect to a different page after successful login
        navigate('/home'); // Replace '/dashboard' with the desired path
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
      // Handle the error appropriately, e.g., display an error message to the user
    }
  };


  return (
    <form  className="auth-inner mt-5">
    <h3>Sign In</h3>

    <div className="mb-3">
      <label>Email address</label>
      <input
      type="email"
     placeholder="Email"
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     className="form-control" 
     />
    </div>

    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control" 
      />
    </div>

   
    <div className="d-grid">
    <button onClick={submit}  className="btn btn-primary">
        Login
      </button>
    </div>
    <p>
        Create an account <Link to="/">Sign up now</Link>
      </p>
  </form>















  );
};

export default Login;

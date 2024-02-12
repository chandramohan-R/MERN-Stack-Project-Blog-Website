import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from '../firebaseConfig.js';
import './signup.css'; // Import your CSS file

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // React Router's useNavigate hook

  const submit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Ensure that the user object is available and has an updateProfile method
      if (user && user.updateProfile) {
        await user.updateProfile({
          displayName: name, // Set the user's display name
        });

        alert('Account Created Successfully');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error creating account:', error.message);
      // Handle the error appropriately, e.g., display an error message to the user
    }
  };

  return (
    <form className="auth-inner mt-5"> {/* Apply auth-inner class for styling */}
      <h3>Sign Up</h3>

      <div className="mb-3">
        <label>User name</label>
        <input
          type="text"
          placeholder="UserName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control" // Apply form-control class for styling
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control" // Apply form-control class for styling
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control" // Apply form-control class for styling
        />
      </div>

      <button onClick={submit} className="btn btn-primary">
        Sign Up
      </button>

      <p className="text-right"> {/* Apply text-right class for styling */}
        Already have an Account? <Link to="/login">Login now</Link>
      </p>
    </form>
  );
};

export default Signup;

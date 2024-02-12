import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import firebase from '../firebaseConfig.js';
import User from './user';

const Account = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // React Router's useNavigate hook

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe(); // Cleanup subscription when the component unmounts
  }, []);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      navigate('/login'); // Navigate to the login page after logout
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <Container style={containerStyle}>
      <User user={user} />
      {user && (
        <Button variant="outline-danger" onClick={handleLogout} style={{ marginTop: '20px' }}>
          Logout
        </Button>
      )}
    </Container>
  );
};
const containerStyle = {
    maxWidth: '500px',
    margin: '20px auto', // Center the container horizontally with auto margin
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };
  
  // Check window width and adjust styles accordingly
  if (window.innerWidth <= 767) {
    containerStyle.maxWidth = '100%';
    containerStyle.margin = '10px';
  }
export default Account;

import React, { useState } from 'react';
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,Routes
  
} from "react-router-dom";
import Navigationbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/About";
import Cars from "./pages/cars";
import Contact from "./pages/contact";
import Service from "./pages/service";
import Blogs from "./pages/blogs";
import Footer from "./components/footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Account from "./pages/account"
import User from "./pages/user"
import Openposition from "./pages/openposition";
import Applynow from "./pages/Applynow";
import CreatePost from "./pages/createpost";
import DisplayPosts from "./pages/DisplayPost"


const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      
      <Routes>
      

        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<><Navigationbar /><Home /><Footer /></>} />
        <Route path="/about" element={<><Navigationbar /><About /><Footer /></>} />
        <Route path="/contact" element={<><Navigationbar /><Contact /><Footer /></>} />
        <Route path="/cars" element={<><Navigationbar /><Cars /><Footer /></>} />
        <Route path="/service" element={<><Navigationbar /><Service /><Footer /></>} />
        <Route path="/blogs" element={<><Navigationbar /><Blogs /><Footer /></>} />
        <Route path="/user" element={<><Navigationbar /><User /><Footer /></>} />
        <Route path="/openposition" element={<><Navigationbar /><Openposition /><Footer /></>} />
        <Route path="/applynow" element={<><Navigationbar /><Applynow /><Footer /></>} />
        <Route path="/createpost" element={<><Navigationbar /><CreatePost /><Footer /></>} />
        <Route path="/" exact component={() => <User user={user} />} />
        <Route path="/posts" element={<DisplayPosts />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/account" element={<><Navigationbar /><Account /><Footer /></>} />
       
        
      </Routes>
      
      
    </Router>
    
  );
};

export default App;

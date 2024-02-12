import React from 'react';
import {Col, Card } from 'react-bootstrap';
import DIGITAL2 from '../assets/Digital2.mp4';
import service1 from '../assets/service1.png';
import service2 from '../assets/Service2.png';
import servicepage from "../images/servicepage.png"





import { FaObjectUngroup, FaUsers, FaDesktop, FaCloud, FaComments, FaSearchPlus, FaUser, FaEnvelope } from 'react-icons/fa';

const Service = () => {
  return (
  <> 
  <div style={{
      backgroundImage: `url(${servicepage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '400px', // Adjust the height as needed
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff', // Set the text color
      textAlign: 'center',
    }}>
      <h1 className="text-4xl font-bold  bg-dark">Service Page</h1>
    </div>

     <section className="relative h-screen ">
     <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-6xl font-bold text-center mt-5 mb-2">
        Our Services
      </h2>
      <div className="w-full h-screen flex items-center justify-center">
  <video autoPlay loop muted className="w-1/2 h-1/2 object-cover">
    <source src={DIGITAL2} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10">
      {/* Your content goes here */}
    </div>
  </section>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-title mt-5">Services We Provide</h2>
        </div>
        <Col lg={3} sm={6} className="mb-4 mt-5">
          <Card className="border-0 shadow rounded-xs pt-5  hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105">
            <Card.Body>
              <FaObjectUngroup size={30} color="#ff5722" className="icon-lg icon-primary icon-bg-primary icon-bg-circle mb-3" />
              <h4 className="mt-4 mb-3">Networking</h4>
              <p>For what reason would it be advisable for me to think about business content?</p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={6} className="mb-4 mt-5">
          <Card className="border-0 shadow rounded-xs pt-5  hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105">
            <Card.Body>
              <FaUsers size={30} color="#ff5722" className="icon-lg icon-yellow icon-bg-yellow icon-bg-circle mb-3" />
              <h4 className="mt-4 mb-3">Social Activity</h4>
              <p>For what reason would it be advisable for me to think about business content?</p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={6} className="mb-4 mt-5">
          <Card className="border-0 shadow rounded-xs pt-5  hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105">
            <Card.Body>
              <FaDesktop size={30} color="#ff5722" className="icon-lg icon-purple icon-bg-purple icon-bg-circle mb-3" />
              <h4 className="mt-4 mb-3">Web Design</h4>
              <p>For what reason would it be advisable for me to think about business content?</p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={6} className="mb-4 mt-5">
          <Card className="border-0 shadow rounded-xs pt-5  hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105">
            <Card.Body>
              <FaCloud size={30} color="#ff5722" className="icon-lg icon-cyan icon-bg-cyan icon-bg-circle mb-3 " />
              <h4 className="mt-4 mb-3">Cloud Service</h4>
              <p>For what reason would it be advisable for me to think about business content?</p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={6} className="mb-4">
          <Card className="border-0 shadow rounded-xs pt-5  hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105">
            <Card.Body>
              <FaComments size={30} color="#ff5722" className="icon-lg icon-red icon-bg-red icon-bg-circle mb-3" />
              <h4 className="mt-4 mb-3">Consulting</h4>
              <p>For what reason would it be advisable for me to think about business content?</p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={6} className="mb-4">
          <Card className="border-0 shadow rounded-xs pt-5  hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105">
            <Card.Body>
              <FaSearchPlus size={30} color="#ff5722" className="icon-lg icon-green icon-bg-green icon-bg-circle mb-3" />
              <h4 className="mt-4 mb-3">SEO</h4>
              <p>For what reason would it be advisable for me to think about business content?</p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={6} className="mb-4">
          <Card className="border-0 shadow rounded-xs pt-5  hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105">
            <Card.Body>
              <FaUser size={30} color="#ff5722" className="icon-lg icon-orange icon-bg-orange icon-bg-circle mb-3" />
              <h4 className="mt-4 mb-3">Usability Testing</h4>
              <p>For what reason would it be advisable for me to think about business content?</p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={6} className="mb-4">
          <Card className="border-0 shadow rounded-xs pt-5  hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105">
            <Card.Body>
              <FaEnvelope size={30} color="#ff5722" className="icon-lg icon-blue icon-bg-blue icon-bg-circle mb-3" />
              <h4 className="mt-4 mb-3">UX Prototyping</h4>
              <p>For what reason would it be advisable for me to think about business content?</p>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center ">
      {/* Left Side Section */}
      <section className="flex-1 p-8 bg-white">
        <h1 className="text-3xl font-bold mb-4">
        Embedded Technology Solutions
          </h1>
          <p className="text-gray-800 mb-4 subpixel-antialiased text-1xl">
            Certainly! If your startup specializes in embedded technology, you might want to highlight the unique aspects and services related to this field. Here's a sample content for the services page focusing on embedded technology:
            Embedded Technology Solutions
            Custom Embedded System Development
            Unleash the power of custom embedded systems designed specifically for your business needs. Our experts excel in developing reliable and efficient embedded solutions tailored to your specifications, ensuring seamless integration into your products or processes.
          </p>
        <a
          href="#"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </a>
      </section>

      {/* Right Side Section */}
      <section className="flex-1 h-full">
        <img
          src={service1}
          alt="Hero illustration"
          className="w-full max-w-2xl h-auto mx-auto"
        />
      </section>
    </div>
    <div className="flex flex-col md:flex-row items-center">
    <section className="flex-1 h-full">
        <img
          src={service2}
          alt="Hero illustration"
          className="w-full max-w-2xl h-auto mx-auto"
        />
      </section>
      {/* Left Side Section */}
      <section className="flex-1 p-8 bg-white">
        <h1 className="text-3xl font-bold mb-4">
        Software Technology Solutions        </h1>
        <p className="text-gray-800 mb-4 subpixel-antialiased text-1xl">
        <h4>Custom Software Development:</h4>
Empower your business with tailor-made software solutions crafted to meet your unique needs. Our custom software development services encompass everything from conceptualization to deployment, ensuring your software aligns perfectly with your goals.<br></br>

<h4>Web Application Development:</h4>
Enhance your online presence and engage users with our expert web application development services. From intuitive user interfaces to powerful backend systems, we create web applications that deliver seamless experiences for both you and your users.
        </p>
        <a
          href="#"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </a>
      </section>

      {/* Right Side Section */}
     
    </div>
    </>

    
  );
}

export default Service;

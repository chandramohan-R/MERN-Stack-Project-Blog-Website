import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaLaptopCode, FaChartBar, FaPencilRuler, FaMobile } from 'react-icons/fa';
import Newyork from "../images/Newyork.png"
import values from "../images/values.png"
import mission from "../images/mission.png"
import spacecraft from "../images/spacecraft.png"
import missiontick from "../images/missiontick.png"
import vissiontick from "../images/vissiontick.png"
import valuestick from "../images/valuestick.png"


function About() {
  return (
    <>
    <section className="bsb-hero-1 px-3 bsb-overlay bsb-hover-pull"style={{ backgroundColor:'black'}}>
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-12 col-md-11 col-lg-9 col-xl-7 col-xxl-6 text-center text-white">
        <h1 className="display-3 fw-bold mb-3">Art of Design</h1>
        <p className="lead mb-5">
"Art of Design is the silent language that speaks volumes, turning imagination into reality, and transforming the ordinary into the extraordinary. </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn bsb-btn-3xl btn-light gap-3 mb-5">Free Consultation</button>
          <button type="button" className="btn bsb-btn-3xl btn-outline-light mb-5">Buy Credits</button>
        </div>
      </div>
    </div>
  </div>
</section>
      <section>
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg">Welcome to <strong>Stark7</strong>, a cutting-edge startup founded in 2023, where innovation converges with expertise. As a dynamic force in the tech industry, Stark7 is driven by a team of highly skilled software developers and embedded engineers, united by a shared passion for crafting intelligent solutions that redefine the future.</p>
    </div>
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Why Choose Stark7?</h1>
      <p className="text-lg">
     <strong>Innovation at Core:</strong>  We thrive on pushing the boundaries of what's possible, fostering a culture of continuous innovation.<br></br>
     <strong>Collaborative Approach:</strong> Stark7 believes in the power of collaboration, working closely with clients to understand their unique needs and deliver tailored solutions.<br></br>
     <strong>Expert Team:</strong> Our team comprises seasoned professionals with a proven track record in software development and embedded systems engineering.      </p>
    </div>
    </section>
    <section className="flex flex-wrap bg-gray-200	justify-center">
  {/* Left Side Section */}
  <div className="w-full md:w-1/2 p-4">
    <h2 className="text-3xl font-bold mb-4">OUR MISSION</h2>
    <h6 className="text-1xl font-bold mb-4">INFOGRAPHIC</h6>
    <hr className="h-2 w-full border-none bg-gradient-to-r from-red-500 via-blue-500 to-green-500 my-4" />
    <p> An infographic is a visual representation of information that utilizes images, charts, and text to present complex concepts in a clear and concise manner.

 Infographics leverage a combination of icons, illustrations, and well-chosen color schemes to enhance understanding and engage viewers, making information more accessible.
</p>
<p>These dynamic tools find applications across diverse fields and industries, serving as effective communication tools in business reports, educational materials, and various digital platforms.Infographics have a significant impact on audience engagement and information retention, leveraging the human preference for visual content to simplify complex data and encourage widespread sharing.</p>
  </div>

  {/* Right Side Section */}
  <div className="w-full md:w-1/2 p-4">
    <div className="flex items-center mb-4">
      {/* Icon (Replace with your desired icon) */}
      <img className="w-8 h-8 mr-2" src={mission} alt="Mission Icon" />

      {/* Header for the right side */}
      <h2 className="text-3xl font-bold ">Vision</h2>
    </div>

    {/* Image */}
    <img
      className="w-full md:w-80 h-auto"
      src={vissiontick}
      alt="Vision Infographic"
    />

    {/* Paragraph Box */}
    <div className="bg-white p-4 border border-indigo-600 rounded-lg mt-4">
      <p className="text-gray-700 mb-4">
      Pioneering technology, shaping future landscapes.      </p>
      <p className="text-gray-700 mb-4">
      Innovate solutions, transform challenges into opportunities.
      </p>
      <p className="text-gray-700 mb-4">
      Empower lives through cutting-edge advancements.
      </p>
      <p className="text-gray-700">
      Foster positive change, inspire global progress.
      </p>
    </div>
  </div>
</section>

<section className="flex flex-wrap bg-gray-200">
  {/* Left Side Section */}
  <div className="w-full md:w-1/2 p-4">
    <div className="flex items-center mb-4">
      {/* Icon (Replace with your desired icon) */}
      <img className="w-8 h-8 mr-2" src={values} alt="Values Icon" />

      {/* Header for the right side */}
      <h2 className="text-3xl font-bold">Values</h2>
    </div>

    {/* Image */}
    <img
      className="w-full md:w-80 h-auto"
      src={valuestick}
      alt="Values Infographic"
    />

    {/* Paragraph Box */}
    <div className="bg-white p-4 border border-indigo-600 rounded-lg mt-4">
      <p className="text-gray-700 mb-4">
      <span className='text-2xl'>Integrity:</span> Integrity guides our every action, ensuring honesty and ethical excellence.      </p>
      <p className="text-gray-700 mb-4">
      <span className='text-2xl'>Trust:</span> Trust forms the bedrock of our relationships through transparency and reliability.      </p>
      <p className="text-gray-700 mb-4">
      <span className='text-2xl'>Accountability: </span>We take full ownership, ensuring our actions align with our commitments.      </p>
      <p className="text-gray-700">
      <span className='text-2xl'>Innovation:</span> Innovation drives us to shape a boundary-pushing future      </p>
      <p className="text-gray-700">
      <span className='text-2xl'>Diversity:</span> Diversity fuels our collective strength, fostering creativity and inclusivity.      </p>
    </div>

  </div>

  {/* Right Side Section */}
  <div className="w-full md:w-1/2 p-4">
    <div className="flex items-center mb-4">
      {/* Icon (Replace with your desired icon) */}
      <img className="w-8 h-8 mr-2" src={spacecraft} alt="Spacecraft Icon" />

      {/* Header for the right side */}
      <h2 className="text-3xl font-bold">Mission</h2>
    </div>

    {/* Image */}
    <img
      className="w-full md:w-80 h-auto"
      src={missiontick}
      alt="Mission Infographic"
    />

    {/* Paragraph Box */}
    <div className="bg-white p-4 border border-indigo-600 rounded-lg mt-4">
      <p className="text-gray-700 mb-4">
      Enable customers to extract maximum value from our products and services.
</p>
      <p className="text-gray-700 mb-4">
      Evolve into a strategic partner, aligning goals for mutual success.
</p>
      <p className="text-gray-700 mb-4">
      Drive customer business transformations, guided by a solution-centric mindset.
</p>
      <p className="text-gray-700">
      Infuse a culture of continuous innovation, ensuring our solutions evolve with ever-changing needs.      </p>
    </div>
  </div>
</section>













    <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our team</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
      </div> 
      <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Bonnie Green</a>
              </h3>
              <p>CEO/Co-founder</p>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" /></svg>
                      </a> 
                  </li> 
              </ul>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="Helene Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Helene Engels</a>
              </h3>
              <p>CTO/Co-founder</p>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" /></svg>
                      </a> 
                  </li> 
              </ul>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Jese Leos</a>
              </h3>
              <p>SEO & Marketing</p>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" /></svg>
                      </a> 
                  </li> 
              </ul>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
          <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png" alt="Leslie Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Helene Engels</a>
              </h3>
              <p>CTO/Co-founder</p>
              <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                      <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" /></svg>
                      </a> 
                  </li> 
              </ul>
          </div>
         
      </div>  
  </div>
</section>









      <section id="services" className="bg-white-200	 pt-5 pb-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={5}>
              <h2 className="title mt-5">
                What <span>Service</span> We Offer
              </h2>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio velit inventore, expedita quo laboriosam possimus ea consequatur vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore ut velit dignissimos.
              </p>
              <Button className="btn btn-primary my-3" href="#">
                More Info
              </Button>
            </Col>
            <Col lg={7}>
              <Row className="card-items mt-5 mb-5">
                <Col lg={6} md={6} sm={12}>
                  <Card className='mt-5 hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105'>
                    <Card.Body>
                      <FaLaptopCode size={30} color="#ff5722" />
                      <h5 className="card-title">Web Development</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <Card className='mt-5 hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105'>
                    <Card.Body>
                      <FaPencilRuler size={30} color="#ff5722" />
                      <h5 className="card-title">UX/UI Design</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <Card className='mt-3 hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105'>
                    <Card.Body>
                      <FaChartBar size={30} color="#ff5722" />
                      <h5 className="card-title">Digital Marketing</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <Card className='mt-3 hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105'>
                    <Card.Body>
                      <FaMobile size={30} color="#ff5722" />
                      <h5 className="card-title">Mobile App Development</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;

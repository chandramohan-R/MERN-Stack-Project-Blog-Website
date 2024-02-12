import React,{useState,useEffect} from 'react';
import { Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';import './home.css';
import styled from 'styled-components';
import Software_developer from "../images/Software_developer.png"
import ai from "../images/ai.jpg"
import herosession from "../images/herosession.png"
import Emiot from "../images/Emiot.jpg"
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  FigmaLogoIcon,
  FramerLogoIcon,
  SketchLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  VercelLogoIcon,
  NotionLogoIcon,
  DiscordLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

// Move styled components outside the Home function
const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const HeaderStyled = styled.div`
  text-align: center;
  background: linear-gradient(2deg, blue, blue);
  color: white;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InnerHeaderStyled = styled.div`
  height: 65vh;
  width: 100%;
`;

const WavesContainerStyled = styled.div`
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px; /* Fix for safari gap */
  min-height: 100px;
  max-height: 150px;
`;

const WavesStyled = styled.svg`
  width: 100%;
  height: 100%;
`;

const ContentStyled = styled.div`
  height: 20vh;
  text-align: center;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextStyled = styled.p`
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  font-size: 14px;
  color: #333333;
`;


function Home () {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const LOGOS = [
    <FigmaLogoIcon width={24} height={24} className="text-slate-800" />,
    <FramerLogoIcon width={24} height={24} className="text-slate-800" />,
    <SketchLogoIcon width={24} height={24} className=" text-slate-800" />,
    <TwitterLogoIcon width={24} height={24} className="text-slate-800" />,
    <GitHubLogoIcon width={24} height={24} className="text-slate-800" />,
    <VercelLogoIcon width={24} height={24} className="text-slate-800" />,
    <NotionLogoIcon width={24} height={24} className="text-slate-800" />,
    <DiscordLogoIcon width={24} height={24} className="text-slate-800" />,
    <InstagramLogoIcon width={24} height={24} className="text-slate-800" />,
    <LinkedInLogoIcon width={24} height={24} className="text-slate-800" />,
  ];
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
      counter.innerText = "0";
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 200;

        if (count < target) {
          counter.innerText = `${Math.ceil(count + increment)}`;
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });
  }, []);

  return (
    <>
    <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={herosession} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col items-center justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left bg-white-100 shadow-md">
  <h1 className="text-gray-800 font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-relaxed">
    GROW YOUR BUSINESS 
    <span className="text-pink-500"> WITH US!  </span>
  </h1>

  <p className="text-gray-800 max-w-md sm:max-w-xl leading-relaxed mx-auto lg:ml-0 mt-4">
    Our website design is not just about aesthetics; it's a strategic approach to enhance user experience, drive engagement, and convert visitors into customers.
  </p>

  <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition duration-300">Get Started</button>
</div>
  </div>
</section>


<div className="relative m-auto max-w-full overflow-hidden bg-white mb-5">
      <div className="animate-infinite-slider flex">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex items-center justify-center"
            style={{ width: '100%', maxWidth: '250px', margin: '0 auto' }} // Responsive width
            key={index}
          >
            <div
              style={{ width: '100%', height: '100%', maxWidth: '250px' }} // Responsive logo size
            >
              {logo}
            </div>
          </div>
        ))}
      </div>
    </div>


    <Container>

      <h1> blogs</h1>
      <Row>
  {posts.slice(0, 4).map((post) => (
    <Col key={post._id} md={3} className="mb-4">
      <Card style={{ width: '300px', height: '400px' }}>
        <Card.Img
          variant="top"
          src={post.imageUrl}
          alt={post.title}
          onError={(e) => {
            console.error('Error loading image:', e);
          }}
          style={{ objectFit: 'cover', width: '100%', maxHeight: '60%' }}
        />
        <Card.Body>
          <Card.Title>
            <a href="#">{post.title}</a>
          </Card.Title>
          <Card.Text>{post.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

</Container>


      <h1 className=' text-center sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl mb-5'>
  OUR SERVICES
</h1>     
 
    <section>
    <Container className="mt-5 mb-5">
      <Carousel interval={3000} pause={false} wrap={true}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Software_developer}
            alt="First slide"
            style={{ maxHeight: '300px', objectFit: 'cover' }}

          />
          <Carousel.Caption className="text-center">
            <h3>Application Software</h3>
            <p>Stark7 Application Software: Transforming Ideas into Seamless Experiences</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Item elements for additional slides if needed */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ai}
            alt="Second slide"
            style={{ maxHeight: '300px', objectFit: 'cover' }}

          />
          <Carousel.Caption className="text-center">
            <h3>Automotive</h3>
            <p>Stark7 Automotive: Transforming Ideas into Seamless Experiences</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Emiot}
            alt="Third slide"
            style={{ maxHeight: '300px', objectFit: 'cover' }}

          />
          <Carousel.Caption className="text-center">
            <h3>Embedded & IOT</h3>
            <p>Stark7 Embedded & IOT: Transforming Ideas into Seamless Experiences</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
    </section>
    <section className="flex flex-col md:flex-row  justify-center mt-5 mb-5">
  <div className="md:w-1/2 p-4">
    <h1 className="text-4xl text-left md:text-left md:text-5xl lg:text-6xl mb-4 text-dark">
      Front <span className="text-purple-600">End</span>   Developer
    </h1>
    <p className="text-lg text-gray-800">
    Welcome to <span className="font-semibold text-blue-500">Stark7</span>, where cutting-edge technology meets stunning user interfaces. As a front-end developer, I bring creativity and precision to every line of code, transforming visions into seamless, user-centric experiences. With expertise in the latest web technologies and a passion for design, I strive to create visually appealing and highly functional websites that leave a lasting impression. Join us on a journey where innovation and user satisfaction collide, shaping the future of web development.
  </p>
  </div>

  <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono md:w-1/2">
    <div className="flex justify-between items-center">
      <div className="flex space-x-2 text-red-500">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <p className="text-sm">bash</p>
    </div>
    <div className="mt-4">
      <p className="text-green-400">$ npm install next</p>
      <p className="text-white">+ next@10.2.3</p>
      <p className="text-white">added 1 package, and audited 2 packages in 3s</p>
      <p className="text-green-400">$</p>
    </div>
    <p className="text-green-400">$ npm install next</p>
      <p className="text-white">+ next@10.2.3</p>
      <p className="text-white">added 1 package, and audited 2 packages in 3s</p>
      <p className="text-green-400">$</p>
  </aside>
</section>

<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'center', margin: '30px 50px', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', maxWidth: '300px', margin: '15px', minWidth: '200px' }}>
        <i className="fab fa-instagram fa-3x"></i>
        <div className="counter" style={{ fontSize: '60px', marginTop: '10px' }} data-target="12000"></div>
        <span>Instagram Followers</span>
      </div>
      <div style={{ flex: '1', maxWidth: '300px', margin: '15px', minWidth: '200px' }}>
        <i className="fab fa-youtube fa-3x"></i>
        <div className="counter" style={{ fontSize: '60px', marginTop: '10px' }} data-target="5000"></div>
        <span>YouTube Subscribers</span>
      </div>
      <div style={{ flex: '1', maxWidth: '300px', margin: '15px', minWidth: '200px' }}>
        <i className="fab fa-facebook fa-3x"></i>
        <div className="counter" style={{ fontSize: '60px', marginTop: '10px' }} data-target="7500"></div>
        <span>Facebook Fans</span>
      </div>
      <div style={{ flex: '1', maxWidth: '300px', margin: '15px', minWidth: '200px' }}>
        <i className="fab fa-twitter fa-3x"></i>
        <div className="counter" style={{ fontSize: '60px', marginTop: '10px' }} data-target="7500"></div>
        <span>Facebook Fans</span>
      </div>
    </div>
  <div>

  </div>

 

    
    
    
   
    <div className="flex" style={{ display: "flex", flexDirection: "row" }}>
        <div className='left' style={{ flex: "1", marginTop: "50px", marginBottom: "50px" }}>
          <h1>Download the app from diffrent store</h1><br></br><br></br>
          <h2>Get the App </h2>
          <a href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
          <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>

          <div className="container" style={{ marginTop: "80px" }}>
            <center>
              <a href="https://www.kobinet.com.tr/" target="_blank" className="market-btn apple-btn" role="button">
                <span className="market-button-subtitle">Download on the</span>
                <span className="market-button-title">App Store</span>
              </a>

              <a href="https://www.kobinet.com.tr/" target="_blank" className="market-btn google-btn" role="button">
                <span className="market-button-subtitle">Download on the</span>
                <span className="market-button-title">Google Play</span>
              </a>

              <a href="https://www.kobinet.com.tr/" target="_blank" className="market-btn windows-btn" role="button">
                <span className="market-button-subtitle">Download on the</span>
                <span className="market-button-title">Windows Store</span>
              </a>

              <a href="https://www.kobinet.com.tr/" target="_blank" className="market-btn amazon-btn" role="button">
                <span className="market-button-subtitle">Order now at</span>
                <span className="market-button-title">Amazon.com</span>
              </a>
            </center>
          </div>

        </div>
        <div className='right' style={{ flex: 1, marginTop: "50px", marginBottom: "50px" }}>

          <iframe
            id="inlineFrameExample"
            title="Inline Frame Example"
            width="900px"
            height="400px"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
          </iframe>
        </div>
      </div>



    
    </>
  );
}

export default Home;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OpenPosition() {
  const navigate = useNavigate();
  const [selectedPosition, setSelectedPosition] = useState('');

  const handleClick = (position) => {
    setSelectedPosition(position);
    navigate('/applynow', { state: { selectedPosition: position } });
  };

  const renderJobRow = (title, experience, openings, location, description) => (
    <div className="flex justify-center items-center p-4">
      <div className="text-left">
        <h1 className="text-xl md:text-xl lg:text-xl xl:text-xl font-bold mb-2">{title}</h1>
        <p style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Years Of Experience: {experience}</p>
        <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>No Of Openings: {openings}</p>
        {location && <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Location: {location}</p>}
        <p style={{ fontSize: '0.85rem',maxWidth: '40%', marginBottom: '0.5rem', width: '50%' }}>{description}</p>
      </div>
      <div style={{ marginLeft: 'auto', maxWidth: '100%', textAlign: 'center', marginRight: '50px' }}>
        <h2>apply the job!</h2>
  <button
    style={{
      backgroundColor: '#000000',
      color: '#ffffff',
      width: '100%', // Adjust the width as needed
      padding: '0.50rem 0.50rem',
      borderRadius: '0.25rem',
      cursor: 'pointer',
      fontSize: '0.75rem',
      transition: 'background-color 0.3s ease',
    }}
    onClick={() => handleClick(title)}
  >
    Apply
  </button>
</div>
    </div>
  );

  return (
    <>
      <div className="h-auto flex flex-col pt-10 w-full">
        <h2>Opening Position</h2>
        <div className="bg-white rounded-md shadow-md items-center justify-center">
          {renderJobRow(
            'UI / UX',
            '1 To 2 Years',
            10,
            'chennai | Bangalore | Coimbatore',
            'A UI/UX (User Interface/User Experience) role focuses on creating a positive and seamless interaction between users and digital products or services. Here is a general description of the responsibilities and qualifications associated with a UI/UX role'
          )}
          <hr />
          {renderJobRow(
            'Full Stack Developer',
            '1 To 3 Years',
            1,
            'Coimbatore',
            'Develop and maintain Internet-scale applications using technologies such as React, RXJS, node.js, dynamodb, lambda, and mysql within a distributed architecture. Possess a minimum of 2 years of experience with distributed systems design, AWS, Kubernetes, Docker, CI/CD, and demonstrate familiarity with unit testing, Test-Driven Design, and Domain Driven Design.'
          )}
          <hr />
          {renderJobRow(
            'Embedded Project Manager',
            '1 To 2 Years',
            2,
            'Pune | Bangalore | Coimbatore',
            'Minimum 10-15 years Embedded Software Development in Automotive, including 4-6 years Project Management. IPMA/PMP Certification a plus, with comprehensive Software Development understanding. Key skills: C/C++, ARM microprocessors, serial communication (I2C, UART, SPI, CAN), memory interfaces, RTOS, Linux application development, strong managerial abilities. Leadership adaptability highly valued.'
          )}
          <hr />
          {renderJobRow(
            'Embedded Developer Trainee',
            '0 To 1 Years',
            6,
            'Coimbatore',
            'Entry-level role for a fresher in Embedded Systems, focusing on software development and testing for embedded devices. Primarily dedicated to learning and acquiring fundamental skills to become an efficient Embedded Developer.'
          )}
          <hr />
          {renderJobRow(
            'React Js Developer',
            '0 To 1 Years',
            2,
            'Coimbatore',
            'Build and maintain web applications, integrate diverse technologies, ensure software\'s smooth functioning. Embrace learning, tackle challenges, and develop a strong skill foundation.'
          )}
          <hr />
          {renderJobRow(
            'Product Development',
            '2 To 4 Years',
            5,
            'Coimbatore',
           
            null,
            'The role of a Product Development position can vary depending on the industry, company size, and specific product being developed. However, here is a general description of the responsibilities and qualifications associated with a Product Development role'
          )}
        </div>
      </div>
    </>
  );
}

export default OpenPosition;

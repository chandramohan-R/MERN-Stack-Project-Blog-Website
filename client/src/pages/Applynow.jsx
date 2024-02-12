import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function ApplyNow() {
  const location = useLocation();
  const { selectedPosition } = location.state || {};

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    position: selectedPosition || '',
    message: '',
    file_cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'file_cv' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.full_name || !formData.email || !formData.position || !formData.message || !formData.file_cv) {
      alert('All fields are required');
      return;
    }

    // Additional validation logic can be added here

    // Prepare data for sending
    const emailData = {
      full_name: formData.full_name,
      email: formData.email,
      position: formData.position,
      message: formData.message,
      // You might need to convert the file to a different format depending on the email service used
      file_cv: formData.file_cv,
    };

    try {
      // Send the data to your server or email service
      const response = await fetch('http://localhost:3000/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        alert('Application sent successfully');
      } else {
        alert('Failed to send application');
      }
    } catch (error) {
      console.error('Error sending application:', error);
      alert('Failed to send application');
    }
  };

  return (
    <div style={{ background: '#334155', paddingTop: '100px', paddingBottom: '50px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '24px', margin: '0' }}>Apply for job</h2>
          </div>
          <form method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
            <div style={{ marginBottom: '20px' }}>
              <div style={{ marginBottom: '10px' }}>Full name</div>
              <input
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                }}
                type="text"
                name="full_name"
                onChange={handleChange}
                required
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ marginBottom: '10px' }}>Email address</div>
              <div style={{ display: 'flex' }}>
                <input
                  style={{
                    flex: '1',
                    padding: '10px',
                    borderRadius: '5px 0 0 5px',
                    border: '1px solid #ddd',
                    marginRight: '-1px',
                  }}
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ marginBottom: '10px' }}>Position</div>
              <input
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                }}
                type="text"
                name="position"
                value={selectedPosition || ''}
                readOnly
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ marginBottom: '10px' }}>Message</div>
              <textarea
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                  resize: 'none',
                }}
                name="message"
                placeholder="Message sent to the employer"
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ marginBottom: '10px' }}>Upload CV</div>
              <div style={{ position: 'relative' }}>
                <input
                  style={{ display: 'none' }}
                  type="file"
                  name="file_cv"
                  id="file"
                  onChange={handleChange}
                  required
                />
                <label
                  style={{
                    background: '#000000',
                    color: '#fff',
                    padding: '10px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    border: '1px solid #3498db',
                  }}
                  htmlFor="file"
                >
                  Choose file
                </label>
                <span
                  style={{
                    marginLeft: '10px',
                    fontSize: '14px',
                    display: 'inline-block',
                    border: '1px solid #ddd',
                    padding: '10px',
                    borderRadius: '5px',
                  }}
                >
                  {formData.file_cv ? formData.file_cv.name : 'No file chosen'}
                </span>
              </div>
              <div style={{ fontSize: '14px', marginTop: '5px' }}>
                Upload your CV/Resume or any other relevant file. Max file size 1 MB
              </div>
            </div>
            <div>
            <button
            style={{
              background: '#000000',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            type="submit"
          >
            Send Application
          </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ApplyNow;

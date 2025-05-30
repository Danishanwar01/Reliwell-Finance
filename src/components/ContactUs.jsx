// src/Contactus.jsx

import React from 'react';

const Contactus = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
    maxWidth: '500px',
    margin: '100px auto',
    backgroundColor: '#1d1d1d',
    padding: '30px',
    borderRadius: '10px',
    border:'2px solid white'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 500,
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    color: '#000',
  };

  const textareaStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    color: '#000',
    resize: 'vertical',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#f0b90b',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    color: '#fff',
  };

  return (
    <>
    
    <div style={containerStyle}>
        <h4 style={{color:'white', marginTop:'1rem',marginBottom:'1rem'}}>Contact Us</h4>
      <form action="index.php" method="post">
        <label htmlFor="name" style={labelStyle}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          style={inputStyle}
        />

        <label htmlFor="email" style={labelStyle}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          style={inputStyle}
        />

        <label htmlFor="message" style={labelStyle}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          required
          style={textareaStyle}
        />

        <input type="submit" value="Submit" style={buttonStyle} />
      </form>
    </div>
    </>
  );
};

export default Contactus;

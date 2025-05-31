// src/WinMillion.jsx

import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import bgimg from '../assets/images/background.png'
const WinMillion = () => {
  useEffect(() => {
    // Dynamically load the Gleam widget script
    const script = document.createElement('script');
    script.src = 'https://widget.gleamjs.io/e.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Container styles (translating the CSS variables and properties)
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
    maxWidth: '900px',
    margin: '50px auto',
    backgroundColor: '#1d1d1d',
    padding: '30px',
    borderRadius: '10px',
      backgroundImage: `url(${bgimg})`, 
  };

  // Center wrapper style (replacing <center> tag)
  const centerStyle = {
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      {/* Inline <style> to define .glow-on-hover since React does not import external CSS here */}
      <style >
          
        {`
        .glow-on-hover {
          padding: 12px 24px;
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(271.68deg, #e8749e 0%, #f0b90b 100%);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: box-shadow 0.3s ease-in-out, transform 0.2s ease;
        }
        .glow-on-hover:hover {
          box-shadow: 0 0 12px 3px rgba(240, 185, 11, 0.8),
                      0 0 8px 2px rgba(232, 116, 158, 0.8);
          transform: translateY(-2px);
        }
        .terms-container h1 {
          margin-bottom: 16px;
          line-height: 1.2;
        }
        .terms-container p {
          margin-bottom: 24px;
          font-size: 1rem;
          line-height: 1.5;
        }
      `}</style>

      <div className="terms-container">
        <h1>Reliwell Finance $1 Million Giveaway</h1>
        <h1>Reliwell Millionaire</h1>

        <div style={centerStyle}>
          <p>
            Join Reliwell Finance&apos;s $1 Million Giveaway! 20 lucky winners will
            each receive $50,000 worth of RXS. Increase your chances by sharing
            and completing all tasks to earn bonus entries. Don’t miss out—
            participate now!
          </p>

          <p>
            <b>
              <u>Note</u>: A minimum $100 participation in the Reliwell Finance
              Presale is required to be eligible.
            </b>
          </p>

          <a
            href="https://gleam.io/GmQLU/Reliwell-millionaire-giveaway"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="glow-on-hover" type="button">
              Open Competition in New Tab
            </button>
          </a>
        </div>



        {/* Gleam embed widget */}
         <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 4,      
        px: 2,  
          
      }}
    >
      {/* Outer “card” container for the widget */}
      <Box
        sx={{
         
          backgroundColor: '#1d1d1d',
          borderRadius: '12px',
          p: 2,
          width: {
            xs: '100%',   
            md: '60%',  
              backgroundImage: `url(${bgimg})`, 
          },
          // Gleam widget CSS custom properties:
          '--glm-widget-radius': '10px',
          '--glm-widget-header-media-radius': '12px',
          '--glm-widget-header-media-margin': '16px',
          '--glm-widget-action-radius': '8px',
          '--glm-widget-actions-padding': '16px',
          '--glm-widget-actions-gap': '10px',
          '--glm-widget-padding': '16px',
        }}
      >
        <Box
          component="iframe"
          id="GleamEmbedGmQLU"
           src="https://gleam.io/GmQLU/embed?l=https%3A%2F%2FReliwell.com%2FReliwell-millionaire%2F&amp;r=https%3A%2F%2Fdashboard.Reliwell.com%2F"
          allow="storage-access *; attribution-reporting *; autoplay *; fullscreen *"
          title="Competition"
          frameBorder="0"
          data-loaded-widget="true"
          sx={{
            position: 'relative',
            width: '100%',
            minHeight: '1450px',
                   
            borderRadius: '10px', 
            border: 'none',
          }}
        />
      </Box>
    </Box>
      </div>
    </div>
  );
};

export default WinMillion;

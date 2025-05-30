// src/Whitepaper.jsx

import React from 'react';

const Whitepaper = () => {

  const containerStyle = {

    backgroundColor: 'rgb(32, 33, 36)',

  
    position: 'relative',
    top: '0px',

    // Ensure it fills the viewport minus that 41px offset
    width: '100%',
    height: 'calc(100vh - 41px)',
    minHeight: 'calc(100% - 41px)',

    // Prevent any scrollbars on the container itself
    overflow: 'hidden',
  };

  return (
    <div style={containerStyle}>
      {/* 
        Embed the whitepaper PDF directly.
        The `type="application/pdf"` will invoke the browser’s native PDF viewer.
      */}
      <embed
        id="plugin"
        src="https://Rexas.com/Rexas-whitepaper.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
        style={{
          // These styles match the original embed attributes
          position: 'relative',
          zIndex: 1,
          visibility: 'visible',
          transform: 'scale(1)',
        }}
      />
    </div>
  );
};

export default Whitepaper;

// src/components/MarqueeNotice.jsx
import React from 'react';
import '../styles/MarqueeNotice.css';

const MarqueeNotice = () => {

  const noticeText = (
    <>
      <span className="fw-bold">Please Note:&nbsp;</span>
      Reliwell Team will never send you messages on any social networks. 
      Please verify our social links via our website: Rexas.com | 
      Never Share Your Seed Phrase or Private Key with anyone.
    </>
  );

  return (
    <div className="marquee-notice-container   py-2">
      <div className="marquee-content">
       {/* first copy */}
        <div className="marquee-item">
          <p className="mb-0">
            {noticeText}
          </p>
        </div>
        
        {/* 2nd copy for loop */}
        <div className="marquee-item">
          <p className="mb-0">
            {noticeText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarqueeNotice;

// src/components/RXS.jsx
import React from 'react';
import '../styles/RXS.css';

const RXS = () => {
  return (
    <div className="rxs-container">
      {/* NOTE: we moved the heading inside the left‐column (“left‐half”). */}
      <div className="left-half">
        <p className="main-heading">
          <span className="gradient-text">Unlock </span>
          the World of Asset <br />
          Investment with Ease <br />
          and Flexibility
        </p>

        {/* Feature paragraphs */}
        <div className="features-list">
          {[
            [
              'Diverse Asset Range',
              'Seamlessly invest in a wide range of Real World Assets.',
            ],
            [
              'Fractional Ownership',
              'Participate in fractional ownership, making previously inaccessible investment opportunities available to all.',
            ],
            [
              'Democratize Investment',
              'Our platform democratizes access, offering a simple, secure, and transparent way to diversify your portfolio.',
            ],
            [
              'Accessible Real Estate Investment',
              'Invest in real estate without the high entry costs.',
            ],
            [
              'Diverse Opportunities',
              'Own a piece of precious metals or thriving businesses with just a few clicks.',
            ],
            [
              'Global Market Access',
              'Rexas brings the potential of the global market directly to your fingertips.',
            ],
          ].map(([heading, text]) => (
            <p key={heading} className="feature-item">
              <span className="accent-heading">{heading}:</span> {text}
            </p>
          ))}
        </div>
      </div>

      {/* Right column: the image */}
      <div className="right-half">
        <img
          src={require('../assets/images/img3.png')}
          alt="Investment Illustration"
        />
      </div>
    </div>
  );
};

export default RXS;

// src/components/HeroSection.jsx
import React from 'react';
import '../styles/RexasFinance.css';

const RexasFinance = () => {
  return (
    <div className="hero-wrapper">
              {/* 6) Social icons row */}
      <div className="hero-social-row">
        {/* Twitter */}
        <a
          href="https://x.com/Reliwellfinance"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
          >
            <path
              fill="currentColor"
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            ></path>
          </svg>
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/Reliwellfinance"
          target="_blank"
          rel="noreferrer"
          aria-label="Telegram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
          >
            <path
              fill="currentColor"
              d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
            ></path>
          </svg>
        </a>

        {/* Linktree (link icon) */}
        <a
          href="https://linktr.ee/Reliwellfinance"
          target="_blank"
          rel="noreferrer"
          aria-label="Linktree"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 10h16"></path>
            <path d="M6.5 4.5l11 11"></path>
            <path d="M6.5 15.5l11 -11"></path>
            <path d="M12 10v-8"></path>
            <path d="M12 15v7"></path>
          </svg>
        </a>

        {/* Medium */}
        <a
          href="https://medium.com/@Reliwellfinance"
          target="_blank"
          rel="noreferrer"
          aria-label="Medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            height="1em"
            width="1em"
            fill="currentColor"
          >
            <path d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z"></path>
          </svg>
        </a>
      </div>
      {/* 1) Gradient Title */}
      <p className="hero-title">Reliwell Finance</p>

      {/* 2) Subtitle */}
      <p className="hero-subtitle">
        Tokenize Real World Assets Anything, Anywhere
      </p>

      {/* 3) Paragraph */}
      <div className="hero-paragraph-container">
        <p className="hero-paragraph">
          Reliwell Finance is your gateway to the future of asset management. Reliwell
          Finance empowers you to own or tokenize virtually any real-world
          asset, from real estate and art to commodities and intellectual
          property, on a global scale. With Reliwell Finance, you gain access to a
          world where asset liquidity and investment opportunities are
          boundless. Embrace the power of blockchain technology to make
          investing more inclusive, transparent, and efficient.
        </p>
      </div>

      {/* 4) Buttons row */}
      <div className="hero-button-row">
        {/* Whitepaper Button */}
        <a
          href="https://Reliwell.com/Reliwell-whitepaper.pdf"
          target="_blank"
          rel="noreferrer"
          className="cardBox card-whitepaper"
          style={{ marginRight: '20px' }}
        >
          <div className="card-animation">
            <div className="card-content">
              <h2>
                {/* Yellow rocket icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  style={{
                    color: 'rgb(240, 185, 11)',
                    fontSize: '25px',
                    marginRight: '5px',
                  }}
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M461.81 53.81a4.4 4.4 0 0 0-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 0 0-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 0 0 9.8 10.4l81.07-8.9a180.29 180.29 0 0 0 1.1 18.3 18.15 18.15 0 0 0 5.3 11.09l31.39 31.39a18.15 18.15 0 0 0 11.1 5.3 179.91 179.91 0 0 0 18.19 1.1l-8.89 81a9 9 0 0 0 10.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0 0 39.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1 1 60.38 0 42.65 42.65 0 0 1-60.38 0z"
                  ></path>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M109.64 352a45.06 45.06 0 0 0-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 0 0 160 402.32"
                  ></path>
                </svg>
                Whitepaper
              </h2>
            </div>
          </div>
        </a>

        {/* CertiK Audit Button */}
        <a
          href="https://Reliwell.com/audit/"
          target="_blank"
          rel="noreferrer"
          className="cardBox card-audit"
          style={{ marginRight: '20px', width: '150px' }}
        >
          <div className="card-animation" style={{ width: '80%' }}>
            <div className="card-content" style={{ width: '115px' }}>
              <h2>CertiK Audit</h2>
            </div>
          </div>
        </a>
      </div>

      {/* 5) Audited note */}
      <p className="hero-audit-note">
        Audited | 100% Secure &amp; Verified By CertiK
      </p>


    </div>
  );
};

export default RexasFinance;

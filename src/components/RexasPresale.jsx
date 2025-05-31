// src/components/RexasPresale.jsx
import React, { useState } from 'react';
import '../styles/RexasPresale.css';

const RexasPresale = () => {
  // Example local state for the "Amount in ETH" input
  const [ethAmount, setEthAmount] = useState();
  
  // Example function to calculate RXS from ETH (you can replace with actual logic)
  const ethToRxs = (eth) => {
    // Assuming 1 RXS = $0.20, 1 ETH = $2000 for demo
    const ethPrice = 2000;
    const rxsPrice = 0.2;
    const usd = parseFloat(eth) * ethPrice;
    return usd / rxsPrice;
  };

//   const rxsAmount = ethAmount ? ethToRxs(ethAmount).toFixed(2) : '';

  return (
    <div className="presale-grid-item">
      <div className="presale-container">
        {/* 1) Title Section */}
        <div className="presale-header">
          <p className="presale-title">
            <span className="gradient-text">Reliwell </span>
            Presale
            <br />
            Stage <span className="highlight-text">12</span>
          </p>
          <p className="presale-subtitle">1 RXS = $0.200</p>
          <p className="presale-subtitle">Launch Price = $ 0.250</p>
        </div>

        {/* 2) Progress Bar */}
        <div className="progress-wrapper">
          <div
            className="progress-fill"
            style={{ width: '93.28%' }}
          ></div>
          <div className="progress-text">93.28%</div>
        </div>

        {/* 3) Stats (USD Raised, Tokens Sold) */}
        <p className="presale-stats">
          USD Raised: 
          <span className="stat-highlight">$49,280,686 / $56,000,000</span>
        </p>
        <p className="presale-stats">
          Tokens Sold: 
          <span className="stat-highlight">466,401,141 / 50,000,000,000</span>
        </p>

        {/* 4) Payment Method Buttons */}
        <div className="payment-methods">
          <div className="payment-button">
            <img src="/static/media/eth.4a4d551ab1bfedb364bd1a91e0c1f19c.svg" alt="ETH" />
            <span>ETH ERC-20</span>
          </div>
          <div className="payment-button">
            <img src="/static/media/usdt.e1dd3c5e107351ea2c7097bf5ccb20da.svg" alt="USDT" />
            <span>USDT ERC-20</span>
          </div>
          <a
            className="payment-button card-button"
            href="https://Rexas.com/how-to-buy/#Buy-With-Card"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAArCAYAAABl25buAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOLSURBVHgB7ZmNdeIwDIDFvRuADZpOUDa43ARlg+YmaDsB6QSlE9CboNwEYQPoBOQmgE7gky4yEcZxfuiDF6rvPb0ktiU7/pUSAEVRFEVRFEVRFEVRlIG9McaM8DKEEzIYDBaghMGBmZjzMAGlkv8rBztpA8WqyeF0RPaKK+gvKH7ETI7hBGA9kajzChQv3+FCoAGH8szMcTVuoed8g55jivNyjbckS5YNpmUoSUMbb2IlPwTKpYHz01tfQGfXRp5YB7gr5xkLnmLGHe0V8gu9oYw4actCUF5MguVucBU91tgZi6RblCnUk4v7SNR3hfU9tdGhdNR7RL05eBp4TlqfOaY4s9asTzOQZt/QyX8VdTwHbCXCjmVYUdaugrUnbyr044Y6sXiPPT1Z6Jx0GZwZ61KHRoFycruKK8pknD8z5QClFWVDHT0U+g9NdDxtWBsxMXp35nDjE358wa0gDxT/hXLNsvLYiqDYVojfLMQPaAk7IHZbbbtt2203Eu3ppUMwEvfzUEHqMBo8Ft9Zas+anL9WWHuxaRlW8EBH/LhqoUrtXAmdW5veR1d6Nzj8Usdwz9cF21tgJ+dQdPLYpnugLSwRz7Q1260s9x7s9bxD8W6RTbiYOKctpviWGPHji8iirY0+K91B2eEutG3NPOk5yk/4JPq4re22J1PhVTXErprcWYGvfB0GtjZqA7nLclDJFb6uOQNDWMfowyb0ceXQlmFnbQLNYhIfMV+35Kk5edT5NPBVWxudZSndoO4N27rH+9cuXyYcx2TuZp6TLq50xrp1rjQF1WuWsUiPG7aN7Mv46cAtdmylnjY0caUnwkbkZnZhSS/MjSORMcVUpEvJPHa6BqE2plgbzwA5L5w5eTOhm1SIZVzX0aYMeA8mi6mPjZ5FXanvZbuQODbkDKqKsMceO52+SqPeyOxH1zRZ3lg2Tnrk6G587+CUybhMJtKqBkcGoO5EsDqUPxOydNqZum045syZOC99K+6p8nePzh18EnSIYx3kGaVsdwT7MRDt/XRgT+U5wANiJ88iUMUfKL+XDUNnCeVhGaprwuVjz19eGTzLNlK5J99fYfuzzcD5OPpnG69U6RqvqmIgU/6O34biJGHT2tuaMtA80HXK59ZrM/vBqSRnO9WDzgZ6PTiXio1zjo20u0Kz5gMUL3Zw6APhqQcohyJwax0XKIqiKIqiKIqiKIqifB3+AUEPkjFlPcC4AAAAAElFTkSuQmCC"
              alt="Card"
            />
          </a>
        </div>

        {/* 5) Input Section: Amount in ETH */}
        <div className="input-section">
          <div className="input-label">
            Amount in <strong>ETH</strong> You Pay:
          </div>
          <div className="input-wrapper">
            <input
              type="number"
              placeholder="Enter Amount"
              value={ethAmount}
            //   onChange={(e) => setEthAmount(e.target.value)}
            />
            <div className="input-actions">
              <button
                className="max-button"
                // onClick={() => setEthAmount('')}
              >
                Max
              </button>
              <img
                src="/static/media/eth1.fca4c7e82d7ac693785e.png"
                alt="ETH"
              />
            </div>
          </div>
        </div>

        {/* 6) Input Section: Amount in RXS (readonly) */}
        <div className="input-section">
          <div className="input-label">
            Amount in <strong>RXS</strong> You Receive:
          </div>
          <div className="input-wrapper">
            <input
              type="number"
              placeholder="0"
              readOnly
            //   value={rxsAmount}
            />
            <img
              className="rxs-icon"
              src="/static/media/logorx.02a6c9ac9e9396bd835488886bb8a7ae.svg"
              alt="RXS"
            />
          </div>
        </div>

        {/* 7) Connect Wallet Button */}
        <div className="connect-wrapper">
          <button className="connect-wallet-button">Connect Wallet</button>
        </div>

        {/* 8) Bottom Links: How To Buy?>, $1 Million Giveaway */}
        <div className="bottom-links-row">
          <a href="https://Rexas.com/how-to-buy" target="_blank" rel="noreferrer">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="1em"
              width="1em"
              className="link-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            How To Buy?
          </a>
          <a
            href="https://Rexas.com/Rexas-millionaire/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              aria-hidden="true"
              height="1em"
              width="1em"
              className="link-icon"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M461.81 53.81a4.4 4.4 0 0 0-3.3-3.39..."
              ></path>
            </svg>
            $ 1 Million Giveaway
          </a>
        </div>

        {/* 9) Help Link: Getting Error? Click Here */}
        <div className="help-link">
          <a href="https://Rexas.com/help/" target="_blank" rel="noreferrer">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="1em"
              width="1em"
              className="link-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907..."
              />
            </svg>
            Getting Error? Click Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default RexasPresale;

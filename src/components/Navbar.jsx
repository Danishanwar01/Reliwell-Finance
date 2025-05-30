// src/components/Navbar.jsx
import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      {/* ========================= */}
      {/* Main Navbar (Large Screens) */}
      {/* ========================= */}
      <nav className="navbar-custom">
        <div className="container-xl navbar-container">
          {/* ——— Brand/Logo ——— */}
          <Link to="#" className="navbar-logo">
            Reliwell FINANCE
          </Link>

          {/* ——— Navigation Links (Visible on large screens) ——— */}
          <div className="nav-links">
            <Link to="/home">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/tokenomics">Tokenomics</Link>
            <Link to="/whitepaper">Whitepaper</Link>
            <Link to="/win1m">Win $1M</Link>
            <Link to="/howtobuy">How To Buy</Link>
            <Link to="/contactus">Contact Us</Link>
          </div>

          {/* ——— Connect Wallet Button (Visible on large screens) ——— */}
          <div className="connect-btn-wrapper">
            <button className="connect-btn">Connect Wallet</button>
          </div>

          {/* ——— Hamburger Menu Button (Visible on small screens) ——— */}
          <button
            className="hamburger-btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasMenu"
            aria-controls="offcanvasMenu"
            aria-label="Open menu"
          >
            {/* Using Bootstrap’s “list” icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm0-5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm0-5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11z"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* ==================================== */}
      {/* Offcanvas Drawer (Small Screens Only) */}
      {/* ==================================== */}
      <div
        className="offcanvas offcanvas-start offcanvas-custom"
        tabIndex="-1"
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel"
        style={{background:"#1d1d1d"}}
      >
        {/* Offcanvas Header: Brand and Close Button */}
        <div className="offcanvas-header border-bottom border-secondary">
          <h5 className="offcanvas-title" id="offcanvasMenuLabel" style={{color:"#fff"}}>
            Reliwell FINANCE
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        {/* Offcanvas Body: Navigation Links + Connect Button */}
        <div className="offcanvas-body">
          {/* ——— Navigation Links (Stacked vertically) ——— */}
           <Link to="/home">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/tokenomics">Tokenomics</Link>
          <Link to="/whitepaper">Whitepaper</Link>
          <Link to="/win1m">Win $1M</Link>
          <Link to="/howtobuy">How To Buy</Link>
          <Link to="/contactus">Contact Us</Link>

          {/* ——— Connect Wallet Button ——— */}
          <div className="offcanvas-connect">
            <div className="connect-btn-wrapper">
              <button className="connect-btn">Connect Wallet</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

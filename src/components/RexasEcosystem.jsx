// src/components/RexasEcosystem.jsx
import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import '../styles/RexasEcosystem.css';

const RexasEcosystem = () => {
  return (
    <Box className="ecosystem-section">
      <Container maxWidth="xl">
        {/* Hero Section */}
        <Grid container spacing={5} alignItems="center" className="hero-row">
          {/* 3D Cube Image */}
          <Grid item xs={12} md={6} className="hero-image-container">
            <Box
              component="img"
              src={require('../assets/images/img5.png')}
              alt="Rexas Ecosystem Overview"
              className="ecosystem-hero-image"
            />
          </Grid>

          {/* Title + Description */}
          <Grid item xs={12} md={6} className="hero-text-container">
            <Typography variant="h2" className="ecosystem-headline-line1">
              Reliwell
            </Typography>
            <Typography variant="h2" className="ecosystem-headline-line2">
              ECOSYSTEM
            </Typography>
            <Typography variant="body1" className="ecosystem-description">
              Explore the Reliwell ecosystem, designed to streamline your journey into the world of blockchain and digital access. Whether you're looking for investment, real estate, market your assets, or engaging clients in endeavors through NFTs, hexas provides the tools you need. Benefit from a secure platform for trading and token funding while maximizing your investments with advanced yield-optimizing strategies. Our seamless multi-chain technology ensures that your trading is efficient and you'll invest more quickly.
            </Typography>
          </Grid>
        </Grid>

        {/* Features Grid */}
        <Grid container spacing={5} className="features-grid">
          {/* Rexas Token Builder */}
          <Grid item xs={12} sm={6} md={4}>
            <Box className="feature-card">
              <div className="card-icon">
                <img
                  src={require('../assets/images/img13.webp')}
                  alt="Rexas Token Builder"
                  className="main-icon"
                />
              </div>
              <Typography variant="h5" className="card-title">
                Reliwell Token Builder
              </Typography>
              <Typography variant="body2" className="card-text">
                Retain a new and unique venture advantage. Reliwell Token Builder performs extensive and sustainable but also offers training, managing growth in various sectors, as well as its
              </Typography>
            </Box>
          </Grid>

          {/* Rexas Launchpad */}
          <Grid item xs={12} sm={6} md={4}>
            <Box className="feature-card">
              <div className="card-icon">
                <img
                  src={require('../assets/images/img10.webp')}
                  alt="Rexas Launchpad"
                  className="main-icon"
                />
              </div>
              <Typography variant="h5" className="card-title">
                Reliwell Launchpad
              </Typography>
              <Typography variant="body2" className="card-text">
                Managing your tokens, focusing with Reliwell startup goal, this allows innovation to accelerate our business and prosperity. In response to the latest work on multiple blockchain networks
              </Typography>
            </Box>
          </Grid>

          {/* Rexas GenAI */}
          <Grid item xs={12} sm={6} md={4}>
            <Box className="feature-card">
              <div className="card-icon">
                <img
                  src={require('../assets/images/img9.webp')}
                  alt="Rexas GenAI"
                  className="main-icon"
                />
              </div>
              <Typography variant="h5" className="card-title">
                Reliwell GenAI
              </Typography>
              <Typography variant="body2" className="card-text">
                Improve the power of AI with Reliwell 2019/10 operating energy supply, a type of way-edge software that has made all of its services coming to ensure that it's NFT greater.
              </Typography>
            </Box>
          </Grid>

          {/* Rexas DefT */}
          <Grid item xs={12} sm={6} md={4}>
            <Box className="feature-card">
              <div className="card-icon">
                <img
                  src={require('../assets/images/img12.png')}
                  alt="Rexas DefT"
                  className="main-icon"
                />
              </div>
              <Typography variant="h5" className="card-title">
                Reliwell DefT
              </Typography>
              <Typography variant="body2" className="card-text">
                Reliwell DefT offers a green and decentralized solution for implementing pending marketing plans to efficiently manage possible actions making solutions
              </Typography>
            </Box>
          </Grid>

          {/* Rexas Estate */}
          <Grid item xs={12} sm={6} md={4}>
            <Box className="feature-card">
              <div className="card-icon">
                <img
                  src={require('../assets/images/img11.png')}
                  alt="Rexas Estate"
                  className="main-icon"
                />
              </div>
              <Typography variant="h5" className="card-title">
                Reliwell Estate
              </Typography>
              <Typography variant="body2" className="card-text">
                Rezas is an e-built web division for both web and proprietary data and provides the core AI-related service.
              </Typography>
            </Box>
          </Grid>

          {/* Rexas Treasury */}
          <Grid item xs={12} sm={6} md={4}>
            <Box className="feature-card">
              <div className="card-icon">
                <img
                  src={require('../assets/images/img15.png')}
                  alt="Rexas Treasury"
                  className="main-icon"
                />
              </div>
              <Typography variant="h5" className="card-title">
                Reliwell Treasury
              </Typography>
              <Typography variant="body2" className="card-text">
                Multi-chain yield-optimized blockchain can be found alongside branded or share capital deposits.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RexasEcosystem;
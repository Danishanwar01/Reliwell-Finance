import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import bgimg from '../assets/images/background.png'
const Tokenomics = () => {
  return (
    <Container
    
      maxWidth="xl"
      id="tokenomics"
      sx={{
        pt: { xs: 6, md: 10 },
        pb: { xs: 6, md: 10 },
        backgroundColor: '#1d1d1d',
        color: '#ffffff',
        backgroundImage: `url(${bgimg})`,
      }}
    >
      {/* Headline */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            background: 'linear-gradient(91.08deg, rgb(232, 116, 158) 26.22%, rgb(240, 185, 11) 84.23%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
            fontSize: { xs: '2.5rem', md: '4.5rem' },
            textTransform: 'uppercase',
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          TOKENOMICS
        </Typography>
      </Box>

      {/* Name, Symbol, Tokens */}
      <Box
        sx={{
          border: '2px solid yellow',
          borderRadius: '10px',
          px: 2,
          py: 2,
          mb: 4,
          maxWidth: '600px',
          mx: 'auto',
          minHeight: '80px',
        }}
      >
        <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ px: { xs: 2, sm: 4 }, py: 2 }}>
          {[
            { label: 'Name', value: 'Rexas Finance' },
            { label: 'Symbol', value: 'RXS' },
            { label: 'Tokens', value: '1,000,000,000' },
          ].map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box
                sx={{
                  background: 'linear-gradient(145deg, #1e1e1e,rgb(56, 55, 55))',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  p: 3,
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(64, 63, 63, 0.4)',
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: '#F0C808',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    mb: 0.5,
                  }}
                >
                  {item.label}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#E4E7E7',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    wordBreak: 'break-word',
                  }}
                >
                  {item.value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

      </Box>



      {/* Distribution Row 2 */}
      <Box
        sx={{
          border: '2px solid yellow',
          borderRadius: '10px',
          px: 2,
          py: 2,
          mb: 4,
          maxWidth: '800px',
          mx: 'auto',
          minHeight: '80px',
        }}

      >
        <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ px: { xs: 2, sm: 4 }, py: 2 }}>
          {[
            { label: 'Team', value: '3%' },
            { label: 'Giveway', value: '2%' },
            { label: 'Partner', value: '2%' },
            { label: 'Staking Pool', value: '20%' }
          ].map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box
                sx={{
                  background: 'linear-gradient(145deg, #1e1e1e,rgb(56, 55, 55))',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  p: 3,
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(64, 63, 63, 0.4)',
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: '#F0C808',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    mb: 0.5,
                  }}
                >
                  {item.label}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#E4E7E7',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    wordBreak: 'break-word',
                  }}
                >
                  {item.value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

      </Box>
      {/* Distribution Row 1 */}
      <Box
        sx={{
          border: '2px solid yellow',
          borderRadius: '10px',
          px: 2,
          py: 2,
          mb: 4,
          maxWidth: '1000px',
          mx: 'auto',
          minHeight: '80px',
        }}
      >
        <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ px: { xs: 2, sm: 4 }, py: 2 }}>
          {[
            { label: 'Marketing', value: '3%' },
            { label: 'Presale', value: '50%' },
            { label: 'Liquidity', value: '10%' },
            { label: 'Treasury', value: '10%' }
          ].map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box
                sx={{
                  background: 'linear-gradient(145deg, #1e1e1e,rgb(56, 55, 55))',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  p: 3,
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(64, 63, 63, 0.4)',
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: '#F0C808',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    mb: 0.5,
                  }}
                >
                  {item.label}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#E4E7E7',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    wordBreak: 'break-word',
                  }}
                >
                  {item.value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Contract Address */}
      <Box
        sx={{
          border: '2px solid yellow',
          borderRadius: '10px',
          px: 2,
          py: 2,
          mb: 4,
          maxWidth: '1200px',
          mx: 'auto',
          minHeight: '80px',
        }}

      >
        <Typography
          variant="body1"
          sx={{
            background: 'linear-gradient(145deg, #1e1e1e, rgb(56, 55, 55))',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            p: 3,
            mb: 4,
            minHeight: '80px',
            maxWidth: '1200px',
            mx: 'auto',
            boxShadow: '0 4px 20px rgba(64, 63, 63, 0.4)',
            textAlign: 'center'
          }}
        >
          Contract Address:&nbsp;
          <Box component="span" sx={{ fontWeight: 600, wordBreak: 'break-word', color: '#F0C808', }}>
            0x9eAeBd7E73D97E78c77fAB743e6FFA1b550e224c
          </Box>
          <Box component="span" sx={{ ml: 1, cursor: 'pointer', color: '#E4E7E7' }}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="336"
                height="336"
                x="128"
                y="128"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                rx="57"
                ry="57"
              ></rect>
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="m383.5 128 .5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"
              ></path>
            </svg>
          </Box>
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            color: '#CFCFCF',
            fontSize: '0.85rem',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Please do not send any tokens to this address, as doing so may result in the permanent loss of the tokens.
        </Typography>
      </Box>



      {/* Token Graphic */}
      <Box sx={{ textAlign: 'center' }}>
        <Box
          component="img"
          src={require('../assets/images/rexas9.png')}
          alt="Token Graphic"
          sx={{
            width: '100%',
            maxWidth: '1100px',
            borderRadius: '8px',
          }}
        />
      </Box>

    </Container>
  );
};

export default Tokenomics;

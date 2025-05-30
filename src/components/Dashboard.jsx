import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import RexasFinance from './RexasFinance';
import Tokenomics from './Tokenomics';
import FAQS from './FAQS';

const Dashboard = () => {
  return (
    <>
    <RexasFinance/>


    <section
      maxWidth="md"
      sx={{
        mt: 8,
        mb: 8,
        // If you have a global dark background, you can omit this.
        // Otherwise, this ensures the page is dark like your screenshot.
        backgroundColor: '#121212',
        borderRadius: 10,
        py: 6,
        px: 2,
      }}
    >
      {/* ======= Card with Gradient Border ======= */}
      <Box
        sx={{
    border: '3px solid transparent',
    borderRadius: '10px' , 
    borderImage: ' linear-gradient(271.68deg, #f0b90b 0%, #e8749e 100%) 1',
    backgroundColor: '#1f1f1f',
    p: 4,
    textAlign: 'center',
    mx: 'auto',
    maxWidth: 600,
  }}

      >
        {/* “Rexas” in Gradient Text */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            // Reuse the same gradient as the border for the text
            background: 'linear-gradient(271.68deg, #f0b90b 0%, #e8749e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
          }}
        >
          Reliwell
        </Typography>

        {/* Total Tokens User Holds: 0.00 */}
        <Typography
          variant="body1"
          sx={{
            color: '#FFFFFF',
            fontSize: '1rem',
            mb: 1.5,
          }}
        >
          Total Tokens User Holds:{' '}
          <Box
            component="span"
            sx={{
              color: 'yellow',
              fontWeight: 600,
            }}
          >
            0.00
          </Box>
        </Typography>

        {/* Purchase History (in yellow) */}
        <Typography
          variant="h6"
          sx={{
            color: '#f0b90b',
            fontWeight: 600,
            mb: 3,
          }}
        >
          Purchase History
        </Typography>

        {/* Connect Wallet Button */}
        <Button
          variant="contained"
          onClick={() => {
            /* your connect-wallet logic here */
          }}
          sx={{
            borderRadius: '999px',
            px: 4,
            py: 1.5,
            background: 'linear-gradient(271.68deg, #e8749e 0%, #f0b90b 100%)',
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
            color: '#000000',
            fontWeight: 600,
            textTransform: 'none',
            fontSize: '1rem',
            transition: 'opacity 0.2s ease',
            '&:hover': {
              opacity: 0.85,
              background:
                'linear-gradient(271.68deg, #e8749e 0%, #f0b90b 100%)',
            },
          }}
        >
          Connect Wallet
        </Button>
      </Box>

      {/* ======= “Add Rexas Finance (RXS) In Your Wallet” Section ======= */}
      <Box
        sx={{
          mt: 6,
          px: 2,
          color: '#FFFFFF',
          // You can adjust this grid‐like background with CSS if desired.
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            mb: 2,
            mt:10,
            marginLeft:'10%',
          }}
        >
          Add Reliwell Finance (RXS) In Your Wallet
        </Typography>

        <Typography
          variant="body1"
          component="div"
          sx={{
            fontSize: '1rem',
            lineHeight: 1.6,
              marginLeft:'10%',
            '& br': {
              content: "' '",
            
            },
          }}
        >
          To see your RXS tokens in your wallet, add Reliwell Finance (RXS) as a
          custom token by using the following details:
          <br />
          <br />
          <strong>Token Name:</strong> Reliwell Finance
          <br />
          <strong>Symbol:</strong> RXS
          <br />
          <strong>Network/Chain:</strong> Ethereum
          <br />
          <strong>Decimals:</strong> 18
          <br />
          <strong>Contract Address:</strong>{' '}
          0x9eAeBd7E73D97E78c77fAB743e6FFA1b550e224c
        </Typography>
      </Box>
    </section>


    <Tokenomics/>
    <FAQS/>
    </>
  );
};

export default Dashboard;

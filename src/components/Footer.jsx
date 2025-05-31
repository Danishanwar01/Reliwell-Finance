// src/Footer.jsx

import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; 
import GTranslate from "./GTranslate";
import bgimg from '../assets/images/background.png'

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 0,
        backgroundColor: "#1d1d1d",
        color: "#fff",
        px: { xs: 2, md: 3 },
        py: { xs: 4, md: 6 },
        backgroundImage: `url(${bgimg})`
      }}
    >
      <Container maxWidth="xl">
        <Divider
          variant="fullWidth"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.76)",
            mb: 3,
            height: "2px",
          }}
        />

        {/* Social Icons Row */}
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            mb: { xs: 2, md: 0 },
          }}
        >
          <MuiLink
            href="https://x.com/Reliwellfinance"
            target="_blank"
            rel="noreferrer"
            sx={{ display: "inline-flex", alignItems: "center", mx: 1 }}
          >
            <Box
              component="svg"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              sx={{
                color: "rgb(240, 185, 11)",
                fontSize: "20px",
                width: "1em",
                height: "1em",
              }}
            >
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              />
            </Box>
          </MuiLink>

          <MuiLink
            href="https://t.me/Reliwellfinance"
            target="_blank"
            rel="noreferrer"
            sx={{ display: "inline-flex", alignItems: "center", mx: 1 }}
          >
            <Box
              component="svg"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
              sx={{
                color: "rgb(240, 185, 11)",
                fontSize: "20px",
                width: "1em",
                height: "1em",
              }}
            >
              <path
                fill="currentColor"
                d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
              />
            </Box>
          </MuiLink>

          <MuiLink
            href="https://linktr.ee/Reliwellfinance"
            target="_blank"
            rel="noreferrer"
            sx={{ display: "inline-flex", alignItems: "center", mx: 1 }}
          >
            <Box
              component="svg"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              sx={{
                color: "rgb(240, 185, 11)",
                fontSize: "20px",
                width: "1em",
                height: "1em",
              }}
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 10h16"
              />
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.5 4.5l11 11"
              />
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.5 15.5l11 -11"
              />
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10v-8"
              />
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v7"
              />
            </Box>
          </MuiLink>

          <MuiLink
            href="https://medium.com/@Reliwellfinance"
            target="_blank"
            rel="noreferrer"
            sx={{ display: "inline-flex", alignItems: "center", mx: 1 }}
          >
            <Box
              component="svg"
              viewBox="0 0 640 512"
              xmlns="http://www.w3.org/2000/svg"
              sx={{
                color: "rgb(240, 185, 11)",
                fontSize: "20px",
                width: "1em",
                height: "1em",
              }}
            >
              <path
                fill="currentColor"
                d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z"
              />
            </Box>
          </MuiLink>
        </Grid>

        {/* Internal Links Row (using RouterLink) */}
        <Grid container spacing={3} justifyContent="center">
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
            }}
            spacing={2}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                mb: { xs: 2, md: 0 },
              }}
            >
              <Box
                component={RouterLink}
                to="/win1m"
                sx={{
                  color: "#fff",
                  fontSize: "0.875rem",
                  mx: 2,
                  mb: { xs: 1, md: 0 },
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Win $1M
              </Box>

              <Box
                component={RouterLink}
                to="/howtobuy"
                sx={{
                  color: "#fff",
                  fontSize: "0.875rem",
                  mx: 2,
                  mb: { xs: 1, md: 0 },
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                How To Buy
              </Box>

              <Box
                component={RouterLink}
                to="/contactus"
                sx={{
                  color: "#fff",
                  fontSize: "0.875rem",
                  mx: 2,
                  mb: { xs: 1, md: 0 },
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Contact Us
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Box
                component={RouterLink}
                to="/privacypolicy"
                sx={{
                  color: "#fff",
                  fontSize: "0.875rem",
                  mx: 2,
                  mb: { xs: 1, md: 0 },
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Privacy Policy
              </Box>

              <Box
                component={RouterLink}
                to="/terms-and-conditions"
                sx={{
                  color: "#fff",
                  fontSize: "0.875rem",
                  mx: 2,
                  mb: { xs: 1, md: 0 },
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Terms &amp; Conditions
              </Box>

              <Box
                component={RouterLink}
                to="/cookies"
                sx={{
                  color: "#fff",
                  fontSize: "0.875rem",
                  mx: 2,
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Cookies
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Disclaimer & Copyright */}
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography
            variant="body2"
            sx={{ fontSize: "0.875rem", lineHeight: 1.5 }}
          >
            Disclaimer: Cryptocurrency may be unregulated in your jurisdiction.{" "}
            The value of cryptocurrencies may fluctuate. <br />
            Profits may be subject to capital gains or other taxes applicable in
            your jurisdiction.
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "0.875rem", lineHeight: 1.5, mt: 1 }}
          >
            2025© Reliwell Finance | All Rights Reserved
          </Typography>
        </Box>
      </Container>

      {/* Routing For Translator */}
      <GTranslate />
    </Box>
  );
};

export default Footer;

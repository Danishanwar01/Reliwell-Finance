// FAQS.jsx
import React from "react";
import {
  Box,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Link,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const faqsData = [
  {
    question: "What is Reliwell Finance?",
    answer:
      "Reliwell Finance is a blockchain platform designed to facilitate the tokenization of real-world assets. Our ecosystem offers tools to tokenize, invest, and manage assets such as real estate, precious metals, and other valuable commodities, leveraging blockchain technology for transparency and efficiency.",
  },
  {
    question: "What types of assets can I tokenize with Reliwell Finance?",
    answer:
      "Reliwell Finance supports the tokenization of a wide variety of assets, including but not limited to real estate, art, gold, and corporate bonds. Our platform provides the flexibility to bring almost any valuable asset onto the blockchain.",
  },
  {
    question: "How can I start investing with Reliwell Finance?",
    answer: (
      <>
        To begin investing with Reliwell Finance, head over to&nbsp;
        <Link
          href="https://Reliwell.com"
          target="_blank"
          rel="noreferrer"
          underline="none"
          sx={{ color: "#fff", fontWeight: 500 }}
        >
          https://Reliwell.com
        </Link>
        . Click “Connect Wallet” and connect using your DeFi Web3 wallet (we recommend MetaMask or Trust Wallet). Make sure you are on Ethereum Chain (ERC20) and have enough ETH. Select from ETH, USDT, or USDC, input the amount you want to purchase with, and click “Buy Now.” Complete the transaction in your wallet. For a detailed guide on how to buy Reliwell Finance, see&nbsp;
        <Link
          href="https://Reliwell.com/how-to-buy/"
          target="_blank"
          rel="noreferrer"
          underline="none"
          sx={{ color: "#fff", fontWeight: 500 }}
        >
          https://Reliwell.com/how-to-buy/
        </Link>
        .
      </>
    ),
  },
  {
    question: "What is RXS Token?",
    answer:
      "RXS is the symbol of the Reliwell Finance token. It is used for governance of the Reliwell Finance ecosystem.",
  },
  {
    question: "How will I receive RXS Tokens?",
    answer:
      "Reliwell Finance (RXS) tokens are transferred to your wallet in real time. To see your RXS balance, add RXS as a custom token in your wallet.",
  },
  {
    question: "How can I contact Reliwell Finance team?",
    answer: (
      <>
        You can contact us using our Contact Us form:&nbsp;
        <Link
          href="https://Reliwell.com/contact-us/"
          target="_blank"
          rel="noreferrer"
          underline="none"
          sx={{ color: "#fff", fontWeight: 500 }}
        >
          https://Reliwell.com/contact-us/
        </Link>
        &nbsp;or by emailing us at:&nbsp;
        <Link
          href="mailto:support@Reliwell.com"
          target="_blank"
          rel="noreferrer"
          underline="none"
          sx={{ color: "#fff", fontWeight: 500 }}
        >
          support@Reliwell.com
        </Link>
        .
      </>
    ),
  },
  {
    question: "Where can I sell my RXS tokens?",
    answer:
      "Since we are currently on presale, you cannot sell or transfer your tokens. Once Reliwell Finance goes live, users will be able to freely trade on Uniswap.",
  },
  {
    question: "My wallet is hacked. What should I do?",
    answer:
      "Unfortunately, there is nothing we can do on our end in this situation. Never share your seed phrase or private key: under no circumstances should you share them with anyone, as they are extremely sensitive and must be kept secure.",
  },
];

const FAQS = () => {
  return (
    <Box
      id="faqs"
      sx={{
        backgroundColor: "#1d1d1d",
        color: "#fff",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ mb: 4,mt:0 ,textAlign: "center", fontWeight: 600 }}
        >
          FAQs
        </Typography>

        <Box>
          {faqsData.map((item, idx) => (
            <Accordion
              key={idx}
              disableGutters
              sx={{
                background: "transparent",
                borderBottom: "1px solid rgb(189, 189, 203)",
                boxShadow: "none",
                "&:before": { display: "none" },
                mb: 2,
                color:"#fff",
               
              }}
            >
              <AccordionSummary
                expandIcon={<AddIcon sx={{ color: "#fff", fontSize: 30 }} />}
                aria-controls={`panel${idx}-content`}
                id={`panel${idx}-header`}
                sx={{
                  "& .MuiAccordionSummary-content": {
                    margin: 0,
                  },
                }}
              >
                <Typography sx={{ fontWeight: 500 }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 1 }}>
                <Typography sx={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQS;

// src/HowToBuy.jsx

import React from 'react';

const HowToBuy = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '50px auto',
    backgroundColor: '#1d1d1d',
    padding: '30px',
    borderRadius: '10px',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  };

  const centerText = {
    textAlign: 'center',
  };

  const sectionTitleStyle = {
    marginTop: '32px',
  };

  return (
    <div style={containerStyle}>
      <h1>How to Buy Reliwell Finance (RXS)</h1>

      <p>
        <strong>Note:</strong> Reliwell Finance (RXS) is currently in its presale
        phase and is not available on Uniswap, PancakeSwap, or any other
        decentralized exchanges (DEXs). Please be cautious and avoid
        purchasing any fake RXS tokens that may be circulating on DEXs, as they
        are scams.
      </p>

      {/* Section 1: How To Buy */}
      <h2 id="How-To-Buy" style={sectionTitleStyle}>
        How to Buy
      </h2>

      <h3>Step 1: Prepare Your Wallet</h3>
      <p>
        Before participating in the Reliwell presale, ensure you have a wallet
        supported by Wallet Connect. We recommend using MetaMask or Trust
        Wallet, but any decentralized wallet compatible with Wallet Connect
        will work.
      </p>

      <h3>Step 2: Get ETH</h3>
      <p>
        Make sure you have Ethereum (ETH) in your wallet, as it is required for
        gas fees on the Ethereum network, regardless of whether you are
        purchasing with USDT.
      </p>

      <h3>Step 3: Connect to the DApp</h3>
      <p>
        1. Open your preferred web browser and visit{' '}
        <a
          href="https://Reliwell.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#f0b90b' }}
        >
          https://Reliwell.com
        </a>
        .<br />
        2. Click the "Connect Wallet" button.<br />
        3. Ensure you are on the Ethereum Chain (ERC20).
      </p>

      <h3>Step 4: Choose Payment Option</h3>
      <p>
        On the Reliwell dashboard, select your preferred payment option by clicking
        the appropriate button (ETH or USDT).
      </p>

      <h3>Step 5: Enter Purchase Amount</h3>
      <p>
        1. Enter the amount of ETH or USDT you want to invest in the Reliwell
        presale.<br />
        2. The dashboard will display how many RXS tokens you will receive for
        the selected amount.<br />
        3. Confirm your selection and click the "Buy" button to proceed.
      </p>

      <h3>Step 6: Verify and Confirm Transaction</h3>
      <p>
        1. Your wallet (e.g., MetaMask) will display the transaction details.
        <br />
        2. Verify that the transaction details are correct, including the
        amount and recipient address.<br />
        3. Confirm the transaction within your wallet.<br />
        4. Wait for the transaction to be confirmed on the Ethereum network,
        which may take time depending on network congestion.
      </p>

      <p>
        <strong>IMPORTANT TO NOTE:</strong> When purchasing with USDT, users must
        complete two transactions:
        <br />
        1. The first transaction is to approve the USDT contract.
        <br />
        2. The second transaction is for the actual purchase amount.
        <br />
        Ensure both steps are completed to finalize your transaction.
      </p>

      <h3>Step 7: Purchase Successful</h3>
      <p>
        Once the transaction is confirmed, your RXS tokens will be sent to your
        wallet in real-time.
      </p>

      {/* Section 2: Buy With Card */}
      <h2 id="Buy-With-Card" style={sectionTitleStyle}>
        Buy Reliwell Finance (RXS) With Card
      </h2>

      <h3>New to DeFi?</h3>
      <p>
        New users can easily purchase RXS using a credit or debit card without
        needing verification or KYC processes.
      </p>

      <h3>Step 1: Purchase ETH with Card</h3>
      <p>Visit one of the following on-ramp websites:</p>
      <ul>
        <li>
          <a
            href="https://ramp.network"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#f0b90b' }}
          >
            Ramp Network
          </a>
        </li>
        <li>
          <a
            href="https://global.transak.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#f0b90b' }}
          >
            Transak
          </a>
        </li>
        <li>
          <a
            href="https://www.moonpay.com/buy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#f0b90b' }}
          >
            MoonPay
          </a>
        </li>
      </ul>
      <p>
        Buy Ethereum (ETH) and send it directly to your wallet. Follow the
        on-screen instructions provided on the platform.
      </p>
      <p>
        <strong>Tip:</strong> We recommend purchasing a minimum of $50 worth of
        ETH to cover all expenses, including gas fees, for buying RXS.
      </p>

      <h3>Step 2: Buy RXS with Acquired ETH</h3>
      <p>
        Once you&apos;ve acquired ETH in your wallet, you can proceed to
        purchase RXS using the same wallet.
      </p>
      <p>
        Follow the steps outlined earlier in the "How to Buy Reliwell Finance
        (RXS)" section, starting from connecting your wallet to the Reliwell
        website.
      </p>
      <p>
        <strong>Note:</strong> Ensure you have enough ETH in your wallet to
        cover the amount of RXS you wish to purchase, as well as any associated
        gas fees.
      </p>

      {/* Section 3: Add RXS in Your Wallet */}
      <h2 id="Add-RXS-In-Wallet" style={sectionTitleStyle}>
        Add RXS In Your Wallet
      </h2>

      <p>
        To see your RXS tokens in your wallet, add Reliwell Finance (RXS) as a
        custom token by using the following details:
      </p>
      <ul>
        <li>
          <strong>Token Name:</strong> Reliwell Finance
        </li>
        <li>
          <strong>Symbol:</strong> RXS
        </li>
        <li>
          <strong>Network/Chain:</strong> Ethereum
        </li>
        <li>
          <strong>Decimals:</strong> 18
        </li>
        <li>
          <strong>Contract Address:</strong> 0x9eAeBd7E73D97E78c77fAB743e6FFA1b550e224c
        </li>
      </ul>
      <p>
        Once added, users will be able to see their RXS tokens in their
        wallets.
      </p>
    </div>
  );
};

export default HowToBuy;

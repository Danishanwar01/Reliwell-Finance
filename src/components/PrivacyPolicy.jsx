// src/PrivacyPolicy.jsx

import React from 'react';

const PrivacyPolicy = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
    maxWidth: '900px',
    margin: '50px auto',
    backgroundColor: '#1d1d1d',
    padding: '30px',
    borderRadius: '10px',
    lineHeight: 1.6,
  };

  const sectionTitleStyle = {
    marginTop: '32px',
  };

  const linkStyle = {
    color: '#f0b90b',
    textDecoration: 'underline',
  };

  return (
    <div style={containerStyle}>
      <h1>Privacy Policy</h1>

      <p>
        This privacy policy (“Policy”) informs you of your choices and our practices in relation to your Information (as defined below). For the purposes of this Policy, “we”, “us”, and “our” refer to “Reliwell”.
      </p>

      <h2 style={sectionTitleStyle}>Children</h2>
      <p>
        Our services are not available for use by children and are intended for persons over the age of 18 years old, and 21 years old in some jurisdictions. Please refer to your country laws for age-appropriate guidance.
      </p>
      <p>
        To comply with the current ‘UK Data Protection Act’ for Children, specifically the Age Appropriate Design Code (also known as the Children’s Act), risks have been assessed. More information can be found at{' '}
        <a 
          href="https://ico.org.uk/for-organisations/childrens-code-hub"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          ICO Children’s Code Hub
        </a>
        .
      </p>
      <p>
        This policy will explain areas of our app or website that may affect your privacy and personal details, how we process, collect, manage and store those details, and your rights in relation to your data.
      </p>

      <h2 style={sectionTitleStyle}>Personal Information We Collect</h2>
      <p>We may collect and use the following Information about you:</p>
      <ul>
        <li>Information you provide to us, such as your name, mailing address, phone number, email address, and payment information.</li>
        <li>Information you provide via customer support channels, such as when contacting us via email.</li>
        <li>Information collected when you use our app or website, including cookies and location-based data.</li>
        <li>Information from third parties, including social media and analytics services like Google Analytics.</li>
      </ul>

      <h2 style={sectionTitleStyle}>How We Use Your Personal Information</h2>
      <p>We will only use your personal data when the law allows us to. Common reasons include:</p>
      <ul>
        <li>To provide you with our service, including access to our app via a virtual wallet.</li>
        <li>To improve and monitor the use of our services.</li>
        <li>To provide customer support and respond to your queries or complaints.</li>
        <li>To prevent fraud, defend legal claims, and comply with legal obligations.</li>
        <li>To conduct analytics and provide targeted advertising (with your consent).</li>
      </ul>

      <h2 style={sectionTitleStyle}>Your Choices About How Information is Used</h2>
      <p>You have the following choices regarding how we use your information:</p>
      <ul>
        <li>Marketing Emails: You can opt-out of receiving promotional emails by using the “unsubscribe” feature in our marketing emails.</li>
        <li>Financial Incentives: We may run promotions that ask you to share personal information. Participation is voluntary.</li>
      </ul>

      <h2 style={sectionTitleStyle}>Who We Share Your Personal Information With</h2>
      <p>We may share your information with the following entities:</p>
      <ul>
        <li>Vendors and service providers (e.g., cloud services like AWS).</li>
        <li>Analytics providers (e.g., Google, Apple, AWS).</li>
        <li>Advertising partners (for ad-supported services).</li>
        <li>Law enforcement agencies or public authorities if required by law.</li>
        <li>Entities involved in mergers, acquisitions, or corporate reorganizations.</li>
      </ul>

      <h2 style={sectionTitleStyle}>Security</h2>
      <p>
        We have security measures in place to protect your information, but transmission over the internet is not completely secure. We recommend using appropriate security measures when using our services.
      </p>

      <h2 style={sectionTitleStyle}>Where We Process Your Information</h2>
      <p>
        Your information will be processed by our employees and service providers (Apple, Google, AWS, Mailchimp). If necessary, we ensure that your data is transferred to countries that provide adequate protection for personal data.
      </p>

      <h2 style={sectionTitleStyle}>How Long We Store Your Information</h2>
      <p>
        We store your information for up to 6 years. When deleting information, we take measures to make it irrecoverable or irreproducible.
      </p>

      <h2 style={sectionTitleStyle}>Your Rights</h2>
      <p>You have the following rights under data protection laws:</p>
      <ul>
        <li>The right to request access to your personal data.</li>
        <li>The right to request correction of your personal data.</li>
        <li>The right to request erasure of your personal data.</li>
        <li>The right to object to processing of your personal data.</li>
        <li>The right to request restriction of processing of your personal data.</li>
        <li>The right to request transfer of your personal data.</li>
        <li>The right to withdraw consent at any time.</li>
      </ul>

      <h2 style={sectionTitleStyle}>California Privacy Rights (Addendum 1)</h2>
      <p>
        The terms of this addendum apply to residents of California under the California Consumer Privacy Act (CCPA). For the purposes of this addendum, Personal Information means information that identifies or is linked to a particular consumer or household.
      </p>

      <h2 style={sectionTitleStyle}>Brazil Privacy Rights (Addendum 2)</h2>
      <p>
        The terms of this addendum apply to residents of Brazil under the Lei Geral de Proteção de Dados (LGPD). You have the right to ask whether we hold your personal information and request its deletion, restriction, or correction.
      </p>

      <h2 style={sectionTitleStyle}>Contact &amp; Complaints</h2>
      <p>
        If you have any questions or complaints regarding this policy, please contact us at{' '}
        <a href="mailto:admin@Reliwell.com" style={linkStyle}>
          admin@Reliwell.com
        </a>.
      </p>
      <p>If you wish to make a complaint about how we process your information, we will aim to respond within 30 days.</p>

      <h2 style={sectionTitleStyle}>Changes to this Policy</h2>
      <p>Any updates or changes to this policy will be published here.</p>
    </div>
  );
};

export default PrivacyPolicy;

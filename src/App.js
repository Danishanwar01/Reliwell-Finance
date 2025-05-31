import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './components/Home';
import MarqueeNotice from './components/MarqueeNotice';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Tokenomics from './components/Tokenomics';
import WinMillion from './components/WinMillion';
import HowToBuy from './components/HowToBuy';
import Contactus from './components/ContactUs';
import Whitepaper from './components/Whitepaper';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndCondition';
import CookiePolicy from './components/CookiesPolicy';





const App = () => {
  return (
    <Router>
       <MarqueeNotice/>
   <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/tokenomics' element={<Tokenomics/>}/>
        <Route path='/win1m' element={<WinMillion/>}/>
        <Route path='/howtobuy' element={<HowToBuy/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/whitepaper' element={<Whitepaper/>}/>
        <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
        <Route path='/terms-and-conditions' element={<TermsAndConditions/>}/>
        <Route path='/cookies' element={<CookiePolicy/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

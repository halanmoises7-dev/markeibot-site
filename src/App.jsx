import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import CardsSection from './components/Cards';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import InstallPage from './components/InstallPage';
import Roleta from './components/Roleta';
import './index.css';

const Home = () => (
  <>
    <Header />
    <Main />
    <About />
    <CardsSection />
    <Pricing />
    <Contact />
  </>
);

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Ele vê que você saiu da Home e foi para /instalar

  useEffect(() => {
    window.scrollTo(0, 0); // O comando que zera o scroll
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politica" element={<PrivacyPolicy />} />
          <Route path="/instalar" element={<InstallPage />} />
          <Route path="/roleta" element={<Roleta />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
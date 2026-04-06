import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import CardsSection from './components/Cards';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
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

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politica" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
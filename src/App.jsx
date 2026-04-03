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

// Componente da Home com todas as seções
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
          {/* Rota Principal */}
          <Route path="/" element={<Home />} />
          
          {/* Rota da Política de Privacidade (usando o seu componente importado) */}
          <Route path="/politica" element={<PrivacyPolicy />} />
        </Routes>
        
        {/* O Footer aparece em todas as páginas */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import { useState } from 'react';
import './styles.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <h1>
            <a href="#" style={{ textDecoration: 'none', color: '#ffffff' }}>
              AGENDA<span>BOT</span>
            </a>
          </h1>
        </div>
        
        {/* Botão Hambúrguer */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Menu de Navegação */}
        <nav className={`nav-container ${menuOpen ? 'nav-active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a></li>
            <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Conheça o Chatbot</a></li>
            <li><a href="#recursos" onClick={() => setMenuOpen(false)}>Recursos</a></li>
            <li><a href="#planos" onClick={() => setMenuOpen(false)}>Planos</a></li>
            <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
            <li>
              <a 
                href="https://agendabot-web.vercel.app/" 
                className="client-area"
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => setMenuOpen(false)}
              >
                Área do Cliente
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
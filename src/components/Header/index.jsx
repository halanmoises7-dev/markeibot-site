import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para fechar o menu ao clicar em um link
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <h1>
            <a href="#inicio">
              AGENDA<span>BOT</span>
            </a>
          </h1>
        </div>
        
        {/* Botão Hambúrguer com animação controlada pela classe 'open' */}
        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav-container ${menuOpen ? 'nav-active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#inicio" onClick={closeMenu}>Início</a></li>
            <li><a href="#sobre" onClick={closeMenu}>Conheça o Chatbot</a></li>
            <li><a href="#recursos" onClick={closeMenu}>Recursos</a></li>
            <li><a href="#planos" onClick={closeMenu}>Planos</a></li>
            <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
            <li>
              <a 
                href="https://agendabot-web.vercel.app/" 
                className="client-area"
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={closeMenu}
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
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>MARKEI<span>BOT</span></h2>
            <p className="footer-slogan">"Tá agendado, tá resolvido."</p>
            <p>Sua agenda inteligente no WhatsApp, funcionando 24h por dia para o seu negócio.</p>
          </div>

          <div className="footer-links">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#recursos">Recursos</a></li>
              {/* NOVO LINK PARA A ROLETA */}
              <li><Link to="/roleta" className="link-roleta">Roleta de Prêmios</Link></li>
              <li><Link to="/politica">Política de Privacidade</Link></li>
              <li><Link to="/instalar" style={{ fontWeight: 'bold', color: '#2563eb' }}>Instalar App</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contato</h4>
            <p>markeibot.br@gmail.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Halan Moisés Mídia & Web. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
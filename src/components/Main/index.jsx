import './Main.css';

const Main = () => {
  return (
    <section id="inicio" className="main-hero">
      <h1 className="main-title">
        <span className="main-title-highlight">Simplifique</span> sua agenda agora.
      </h1>
      
      <p className="main-description">
        O assistente inteligente que organiza seus horários no WhatsApp 24h por dia, 
        para você focar no que realmente importa: <strong>seus clientes.</strong>
      </p>

      <a href="#planos" className="cta-button">
        Começar Agora
      </a>
    </section>
  );
};

export default Main;
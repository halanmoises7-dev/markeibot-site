import './Main.css';

const Main = () => {
  return (
    <section id="inicio" className="main-hero">
      <div className="hero-container">
        
        {/* LADO ESQUERDO: DIRETO AO PONTO */}
        <div className="hero-text-content">
          <h1 className="main-title">
            Recupere seu tempo. <br />
            <span className="main-title-highlight">Automatize sua agenda.</span>
          </h1>
          
          <p className="main-description">
            Pare de perder horas respondendo mensagens no WhatsApp. 
            Transforme seu número em uma <strong>máquina de agendamentos</strong> que funciona 24h por dia.
          </p>

          <div className="hero-actions">
            <a href="#planos" className="cta-button-main">
              Começar Agora
            </a>
            <a href="#planos" className="secondary-button-main">
              Ver Planos
            </a>
          </div>

          <p className="hero-subtext">
            🚀 Automação completa para o seu negócio.
          </p>
        </div>

        {/* LADO DIREITO: CARDS DE IMPACTO COMPACTOS */}
        <div className="hero-visual">
          <div className="hero-badge-container">
            <div className="stats-card">
              <span className="stats-number">+100h</span>
              <span className="stats-label">Poupadas /mês</span>
            </div>
            <div className="stats-card">
              <span className="stats-number">100%</span>
              <span className="stats-label">Automático</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Main;
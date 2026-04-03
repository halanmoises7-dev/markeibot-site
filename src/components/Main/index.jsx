import './Main.css';

const Main = () => {
  return (
    <section id="inicio" className="main-hero">
      <div className="hero-container">
        
        {/* LADO ESQUERDO: HIERARQUIA VISUAL CORRETA */}
        <div className="hero-text-content">
          {/* Título Principal (H1) apenas com o nome da marca */}
          <h1 className="main-title">
            Markei<span className="main-title-highlight">Bot</span>
          </h1>

          {/* Slogan (H2) agindo como subtítulo de apoio */}
          <h2 className="main-slogan">
            Tá agendado, tá resolvido.
          </h2>
          
          <p className="main-description">
            Pare de perder horas respondendo mensagens no WhatsApp. 
            Transforme seu número em uma <strong>máquina de agendamentos</strong> que funciona 24h por dia para o seu negócio.
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
            🚀 Automação inteligente. Zero estresse.
          </p>
        </div>

        {/* LADO DIREITO: CARDS DE IMPACTO (AGORA COM 4) */}
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

            <div className="stats-card border-highlight">
              <span className="stats-number">24h/7</span>
              <span className="stats-label">Sempre Ativo</span>
            </div>

            <div className="stats-card">
              <span className="stats-number">Zero</span>
              <span className="stats-label">Mensagens Perdidas</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Main;
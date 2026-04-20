import './Main.css';

const Main = () => {
  return (
    <section id="inicio" className="main-hero">
      <div className="hero-container">
        
        {/* LADO ESQUERDO */}
        <div className="hero-text-content">
          
          <div className="hero-logo-wrapper">
            <img 
              src="/MarkeiBot-Logo.png" 
              alt="MarkeiBot - Tá agendado, tá resolvido" 
              className="main-hero-logo"
            />
          </div>

          {/* SELO DISCRETO DE TESTE */}
          <div className="trial-badge animate-bounce-slow">
            <span>✨ 15 Dias de Teste Grátis</span>
          </div>

          <p className="main-description">
            Pare de perder horas respondendo mensagens no WhatsApp. 
            Transforme seu número em uma <strong>máquina de agendamentos</strong> que funciona 24h por dia para o seu negócio.
          </p>

          <div className="hero-actions">
            <a href="#planos" className="cta-button-main">
              Começar Teste Agora
            </a>
            <a href="#planos" className="secondary-button-main">
              Ver Planos
            </a>
          </div>

          <p className="hero-subtext">
            🚀 <strong>TESTE SEM COMPROMISSO:</strong> Use todas as funções por 15 dias sem pagar nada.
          </p>
        </div>

        {/* LADO DIREITO: CARDS VOLTANDO AO NORMAL */}
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
import './Pricing.css';

const Pricing = () => {
  const commonBenefits = [
    'Atendimento 24h no WhatsApp',
    'App mobile para gestão',
    'Suporte prioritário',
    'Link próprio para bio',
    'Reagendamento prático'
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-header" id="planos">
        <h2 className="pricing-title">
          PLANOS <span style={{ color: '#007bff' }}>MARKEIBOT</span>
        </h2>
        <p className="pricing-subtitle">
          Escolha seu plano e comece seu <strong>teste de 15 dias grátis</strong> hoje.
        </p>
      </div>

      <div className="pricing-container">
        
        {/* PLANO 69 */}
        <div className="pricing-card">
          <span className="pricing-badge trial-highlight">15 DIAS GRÁTIS</span>

          <div className="price-container">
            <span className="currency">R$</span>
            <span className="price-value">69</span>
            <span className="price-period">/mês</span>
            <p className="after-trial-text">Para 1 unidade individual</p>
          </div>

          <ul className="benefits-list">
            <li className="benefit-item">
              <span className="check-icon">✓</span> <strong>1 Bot de Agenda</strong>
            </li>
            <li className="benefit-item">
              <span className="check-icon">✓</span> Agendamentos ilimitados
            </li>
            {commonBenefits.map((item, index) => (
              <li key={index} className="benefit-item">
                <span className="check-icon">✓</span> {item}
              </li>
            ))}
          </ul>

          <a 
            href="https://wa.me/5521965870535?text=Olá! Quero iniciar meu teste de 15 dias no Plano Individual (R$69)."
            target="_blank"
            rel="noopener noreferrer"
            className="pricing-button"
          >
            Iniciar Teste Grátis
          </a>
        </div>

        {/* PLANO 120 - FOCO EM ACESSOS INDEPENDENTES */}
        <div className="pricing-card">
          <span className="pricing-badge trial-highlight">15 DIAS GRÁTIS</span>

          <div className="price-container">
            <span className="currency">R$</span>
            <span className="price-value">120</span>
            <span className="price-period">/mês</span>
            <p className="after-trial-text">Ideal para 2 negócios ou sócios</p>
          </div>

          <ul className="benefits-list">
            <li className="benefit-item">
              <span className="check-icon">✓</span> <strong>2 Bots (Acessos Independentes)</strong>
            </li>
            <li className="benefit-item" style={{ color: '#007bff' }}>
              <span className="check-icon">✓</span> <strong>Agendas 100% Distintas</strong>
            </li>
            <li className="benefit-item">
              <span className="check-icon">✓</span> <strong>Sem misturar seus clientes</strong>
            </li>
            {commonBenefits.map((item, index) => (
              <li key={index} className="benefit-item">
                <span className="check-icon">✓</span> {item}
              </li>
            ))}
          </ul>

          <a 
            href="https://wa.me/5521965870535?text=Olá! Quero iniciar meu teste de 15 dias no Plano para 2 Negócios (R$120) com acessos independentes."
            target="_blank"
            rel="noopener noreferrer"
            className="pricing-button"
          >
            Iniciar Teste Grátis
          </a>
        </div>

      </div>
      <p className="trial-footer-note">⚠️ Cancele quando quiser. Sem taxas de ativação.</p>
    </section>
  );
};

export default Pricing;
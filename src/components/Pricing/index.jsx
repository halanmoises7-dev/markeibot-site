import './Pricing.css';

const Pricing = () => {
  const commonBenefits = [
    'Atendimento 24h',
    'Painel de controle',
    'Suporte prioritário'
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-header" id="planos">
        <h2 className="pricing-title">
          PLANOS <span style={{ color: '#2563eb' }}>MARKEIBOT</span>
        </h2>
        <p className="pricing-subtitle">
          Escolha a solução ideal para sua demanda.
        </p>
      </div>

      <div className="pricing-container">
        
        {/* PLANO 97 */}
        <div className="pricing-card">
          <span className="pricing-badge">OPÇÃO 01</span>

          <div className="price-container">
            <span className="currency">R$</span>
            <span className="price-value">97</span>
            <span className="price-period">/mês</span>
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
            href="https://wa.me/5521965870535?text=Olá!%20Quero%20assinar%20o%20Plano%20Individual%20do%20MarkeiBot."
            target="_blank"
            rel="noopener noreferrer"
            className="pricing-button"
          >
            Assinar Agora
          </a>
        </div>

        {/* PLANO 147 */}
        <div className="pricing-card">
          <span className="pricing-badge">OPÇÃO 02</span>

          <div className="price-container">
            <span className="currency">R$</span>
            <span className="price-value">147</span>
            <span className="price-period">/mês</span>
          </div>

          <ul className="benefits-list">
            <li className="benefit-item">
              <span className="check-icon">✓</span> <strong>2 Bots de Agenda</strong>
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
            href="https://wa.me/5521965870535?text=Olá!%20Quero%20assinar%20o%20Plano%20Duplo%20do%20MarkeiBot."
            target="_blank"
            rel="noopener noreferrer"
            className="pricing-button"
          >
            Assinar Agora
          </a>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
import React from 'react';
import './Pricing.css'; // Importante: verifica se o caminho está correto!

const Pricing = () => {
  return (
    <section id="planos" className="pricing-section">
      <div className="pricing-header">
        <h2 className="pricing-title">
          Plano <span style={{ color: '#2563eb' }}>Único</span>
        </h2>
        <p className="pricing-subtitle">
          Tudo liberado para o seu negócio automatizar hoje.
        </p>
      </div>

      <div className="pricing-card">
        <span className="pricing-badge">O MAIS COMPLETO</span>

        <div className="price-container">
          <span className="currency">R$</span>
          <span className="price-value">97</span>
          <span className="price-period">/mês</span>
        </div>

        <ul className="benefits-list">
          {['Agendamentos ilimitados', 'Atendimento 24h', 'Lembretes automáticos', 'Painel de controle', 'Suporte prioritário'].map((item, index) => (
            <li key={index} className="benefit-item">
              <span className="check-icon">✓</span> {item}
            </li>
          ))}
        </ul>

        <a 
          href="https://wa.me/5521965870535?text=Olá!%20Quero%20assinar%20o%20Plano%20do%20AgendaBot."
          target="_blank"
          rel="noopener noreferrer"
          className="pricing-button"
        >
          Assinar Agora
        </a>
      </div>
    </section>
  );
};

export default Pricing;
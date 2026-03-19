import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-container">
      <header className="privacy-header">
        <h1>Política de Privacidade</h1>
        <p>Atualizado em 18 de Março de 2026</p>
      </header>
      
      <section className="privacy-content">
        <h2>1. Introdução</h2>
        <p>O <strong>AgendaBot</strong>, operado por Halan Moisés Mídia & Web, valoriza a sua privacidade. Esta política explica como tratamos seus dados.</p>

        <h2>2. Coleta de Dados</h2>
        <p>Coletamos informações básicas de contato (nome e e-mail) e dados necessários para a integração com o WhatsApp para fins de agendamento automático.</p>

        <h2>3. Uso das Informações</h2>
        <p>Os dados são utilizados exclusivamente para a prestação do serviço de automação e suporte técnico ao cliente.</p>

        <h2>4. Seus Direitos (LGPD)</h2>
        <p>Você tem o direito de acessar, corrigir ou excluir seus dados a qualquer momento entrando em contato com nosso suporte.</p>
        
        <Link to="/" className="back-link">Voltar para o Início</Link>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
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
        <p>Atualizado em 24 de Março de 2026</p>
      </header>
      
      <section className="privacy-content text-left">
        <h2>1. Introdução</h2>
        <p>O <strong>AgendaBot</strong>, operado por Halan Moisés Mídia & Web, valoriza a sua privacidade. Esta política explica como tratamos os dados da sua conta e, principalmente, como protegemos a privacidade dos seus clientes.</p>

        <h2>2. Coleta de Dados do Usuário</h2>
        <p>Coletamos informações básicas de contato do <strong>Lojista/Parceiro</strong> (nome, e-mail e WhatsApp) apenas para fins de gestão de conta, suporte técnico e cobrança.</p>

        {/* SEÇÃO ADICIONADA: O SEU DIFERENCIAL */}
        <h2>3. Proteção de Dados de Terceiros (Seus Clientes)</h2>
        <p>
          O <strong>AgendaBot</strong> atua exclusivamente como uma ponte tecnológica de automação. 
          <strong> Não armazenamos, retemos ou utilizamos para fins próprios quaisquer informações dos clientes finais</strong> que realizam agendamentos através da sua vitrine.
        </p>
        <p>
          Os dados dos agendamentos (nome e telefone do seu cliente) são processados em tempo real para disparar a confirmação no seu WhatsApp e, após a conclusão do ciclo de agendamento, pertencem única e exclusivamente a você, o usuário da plataforma.
        </p>

        <h2>4. Uso das Informações</h2>
        <p>Os seus dados de lojista são utilizados exclusivamente para a prestação do serviço de automação, melhorias no sistema e comunicações oficiais do suporte.</p>

        <h2>5. Segurança e LGPD</h2>
        <p>Seguimos as diretrizes da Lei Geral de Proteção de Dados (LGPD). Você tem o direito de acessar, corrigir ou solicitar a exclusão total dos seus dados de conta a qualquer momento entrando em contato com nosso suporte oficial.</p>
        
        <div style={{ marginTop: '40px' }}>
          <Link to="/" className="back-link">Voltar para o Início</Link>
        </div>
      </section>

      <footer style={{ marginTop: '60px', textAlign: 'center', opacity: '0.5' }}>
         <p style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
           Halan Moisés Mídia & Web © 2026
         </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
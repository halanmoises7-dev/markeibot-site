import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './InstallPage.css';

const InstallPage = () => {
  const [device, setDevice] = useState('android');

  useEffect(() => {
    window.scrollTo(0, 0);
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
      setDevice('ios');
    } else if (/android/i.test(ua)) {
      setDevice('android');
    } else {
      setDevice('desktop');
    }
  }, []);

  return (
    <div className="install-wrapper">
      <div className="install-card">
        <header className="install-header">
          <div className="brand-logo">MARKEI<span>BOT</span></div>
          <h1>Passo a passo de Instalação</h1>
          <p>Siga as instruções para ter o MarkeiBot no seu celular.</p>
        </header>

        <main className="install-steps">
          {/* PASSO 1 */}
          <div className="step-item">
            <div className="step-number">1</div>
            <div className="step-text">
              <p>Ao acessar a página de login clique no balão <strong>Instalar MarkeiBot</strong>, irá abrir uma notificação solicitando para Instalar, aceite e o App será instalado no seu aparelho.</p>
            </div>
          </div>

          {/* PASSO 2 */}
          <div className="step-item">
            <div className="step-number">2</div>
            <div className="step-text">
              {device === 'ios' ? (
                <p>Se ao clicar e aparecer a mensagem para instalar manualmente, siga: toque no ícone de <strong>Compartilhar</strong> (quadrado com seta) no Safari.</p>
              ) : (
                <p>Se ao clicar e aparecer a mensagem para clicar nos 3 pontinhos, siga: toque nos <strong>três pontos (⋮)</strong> no canto superior do navegador.</p>
              )}
            </div>
          </div>

          {/* PASSO 3 */}
          <div className="step-item">
            <div className="step-number">3</div>
            <div className="step-text">
              <p>Toque em <strong>"Instalar aplicativo"</strong> ou <strong>"Adicionar à tela inicial"</strong>.</p>
            </div>
          </div>

          {/* PASSO 4 */}
          <div className="step-item">
            <div className="step-number">4</div>
            <div className="step-text">
              <p>Feito isso, verifique na página inicial do seu celular se apareceu o ícone do aplicativo.</p>
            </div>
          </div>

          {/* PASSO 5 */}
          <div className="step-item">
            <div className="step-number">5</div>
            <div className="step-text">
              <p><strong>Instalação efetuada!</strong> Agora é só acessar e começar a usar.</p>
            </div>
          </div>

          {/* BOTÃO DE AÇÃO PRINCIPAL */}
          <div className="action-area">
            <p className="cta-instruction-text">CLIQUE NO BOTÃO ABAIXO E VOCÊ IRÁ SER LEVADO A PÁGINA DE INSTALAÇÃO.</p>
            <a href="https://app.markeibot.com.br/login" className="pill-button-link">
              <div className="pill-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </div>
              <span>INSTALAR MARKEIBOT</span>
            </a>
          </div>
        </main>

        <footer className="install-footer">
          <Link to="/" className="back-link-blue">← VOLTAR PARA O SITE</Link>
          <p className="copyright-text">HALAN MOISÉS MÍDIA & WEB © 2026</p>
        </footer>
      </div>
    </div>
  );
};

export default InstallPage;
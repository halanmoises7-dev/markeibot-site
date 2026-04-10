import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './InstallPage.css';

const InstallPage = () => {
  const [device, setDevice] = useState({ platform: 'unknown', isInApp: false });
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const isAndroid = /android/i.test(ua);
    const isIos = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
    const isInApp = /FBAN|FBAV|Instagram|WhatsApp/i.test(ua);

    setDevice({ platform: isAndroid ? 'android' : isIos ? 'ios' : 'desktop', isInApp });

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') setDeferredPrompt(null);
    } else {
      alert("Para instalar, toque nos 3 pontos (⋮) do navegador e selecione 'Instalar aplicativo'.");
    }
  };

  return (
    <div className="install-wrapper">
      <div className="install-content">
        <div className="install-header">
          <div className="install-logo">MARKEI<span>BOT</span></div>
          <h1>Instalar Aplicativo</h1>
          <p>Siga as instruções abaixo para ter o MarkeiBot na sua tela inicial.</p>
        </div>

        {device.isInApp ? (
          <div className="step-card warning">
            <h3>⚠️ Atenção: Saia do WhatsApp</h3>
            <p>O navegador do WhatsApp não permite instalações.</p>
            <ol>
              <li>Toque nos <strong>três pontos (⋮)</strong> no topo da tela.</li>
              <li>Selecione <strong>"Abrir no Chrome"</strong> ou <strong>"Abrir no Safari"</strong>.</li>
            </ol>
          </div>
        ) : (
          <div className="step-card">
            {device.platform === 'android' && (
              <div className="android-flow">
                <h3>Passo Único:</h3>
                <p>Clique no botão abaixo para fixar o app no seu Android.</p>
                <button className="pill-button" onClick={handleInstall}>
                  <div className="pill-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  </div>
                  <span>INSTALAR MARKEIBOT</span>
                </button>
              </div>
            )}

            {device.platform === 'ios' && (
              <div className="ios-flow">
                <h3>Passo a Passo (iPhone):</h3>
                <ol>
                  <li>Toque no ícone de <strong>Compartilhar</strong> (o quadrado com uma seta para cima).</li>
                  <li>Role a lista e toque em <strong>"Adicionar à Tela de Início"</strong>.</li>
                  <li>Toque em <strong>"Adicionar"</strong> no canto superior direito.</li>
                </ol>
              </div>
            )}

            {device.platform === 'desktop' && (
              <div className="desktop-flow">
                <h3>Instalação no Celular:</h3>
                <p>Aponte a câmera do seu smartphone para o código abaixo para instalar instantaneamente:</p>
                <div className="qr-box">
                  <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${window.location.origin}`} alt="QR Code" />
                </div>
              </div>
            )}
          </div>
        )}

        <div className="install-footer">
          <Link to="/" className="back-link">← VOLTAR PARA O SITE</Link>
          <p>HALAN MOISÉS MÍDIA & WEB © 2026</p>
        </div>
      </div>
    </div>
  );
};

export default InstallPage;
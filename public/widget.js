// Arquivo: public/widget.js
// Este é o verdadeiro "motor" do widget que o HTML está chamando.

(function() {
  // 1. Procura a tag script que chamou esse arquivo para pegar o ID da loja
  var scriptTag = document.currentScript || document.querySelector('script[src*="widget.js"]');
  var botId = scriptTag ? scriptTag.getAttribute('data-bot-id') : null;

  if (!botId) {
    console.error('AgendaBot: ID do lojista não encontrado. O widget precisa do atributo data-bot-id.');
    return;
  }

  // 2. Define de onde o Iframe vai puxar a agenda
  // Usa a URL atual se estiver no site oficial, ou a porta 5173 se estiver testando no computador
  var baseUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? 'http://localhost:5173' 
    : 'https://agendabot-web.vercel.app';

  // 3. Cria a bolinha flutuante (O Botão)
  var button = document.createElement('div');
  button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
  `;
  button.style.cssText = 'position: fixed; bottom: 24px; right: 24px; width: 64px; height: 64px; background-color: #0f172a; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 8px 24px rgba(0,0,0,0.2); z-index: 999999; transition: transform 0.2s ease, background-color 0.2s;';
  
  // Efeito de hover do botão
  button.onmouseover = function() { 
    button.style.transform = 'scale(1.05)'; 
    button.style.backgroundColor = '#000000';
  };
  button.onmouseout = function() { 
    button.style.transform = 'scale(1)'; 
    button.style.backgroundColor = '#0f172a';
  };

  // 4. Cria a janela do Chat (O Iframe) que começa invisível
  var chatContainer = document.createElement('div');
  chatContainer.style.cssText = 'position: fixed; bottom: 100px; right: 24px; width: 400px; height: 650px; max-height: calc(100vh - 120px); max-width: calc(100vw - 48px); background-color: white; border-radius: 24px; box-shadow: 0 12px 40px rgba(0,0,0,0.15); z-index: 999999; display: none; overflow: hidden; border: 1px solid #e2e8f0; transition: opacity 0.3s ease; opacity: 0;';
  
  var iframe = document.createElement('iframe');
  // Aqui ele monta a URL exata do agendamento daquele lojista
  iframe.src = baseUrl + '/agendar/' + botId + '?mode=widget';
  iframe.style.cssText = 'width: 100%; height: 100%; border: none; background-color: #f8fafc;';
  
  chatContainer.appendChild(iframe);
  document.body.appendChild(button);
  document.body.appendChild(chatContainer);

  // 5. A lógica de clique: Abre e Fecha a janela
  var isOpen = false;
  button.onclick = function() {
    isOpen = !isOpen;
    
    if (isOpen) {
      chatContainer.style.display = 'block';
      // Pequeno delay para a animação de opacidade funcionar suave
      setTimeout(function() { chatContainer.style.opacity = '1'; }, 10);
      
      // Muda o ícone para um "X"
      button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
    } else {
      chatContainer.style.opacity = '0';
      // Espera a animação acabar para dar display none
      setTimeout(function() { chatContainer.style.display = 'none'; }, 300);
      
      // Volta pro ícone de mensagem
      button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>';
    }
  };
})();
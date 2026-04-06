import { useState } from 'react';
import './AiAssistant.css';

const VirtualAssistant = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const askAi = async () => {
    if (!question) return;

    setLoading(true);
    setError(null);
    setResponse(''); // Limpa a resposta anterior ao perguntar de novo

    try {
      // Simulação ou chamada real da API
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer SUA_CHAVE_AQUI` 
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "system", content: "Você é o Assistente Virtual do MarkeiBot. Responda de forma profissional e direta." },
                     { role: "user", content: `Dúvida do cliente: ${question}` }]
        })
      });

      if (!res.ok) throw new Error('Falha na conexão com a IA');

      const data = await res.json();
      setResponse(data.choices[0].message.content);
    } catch (err) {
      setError("Ops! Não consegui processar sua dúvida agora. Tente novamente em instantes.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-container">
      <h3>Assistente Virtual MarkeiBot</h3>
      <p>Nossa IA explica como o MarkeiBot funciona para você.</p>
      
      <div className="input-group">
        <input 
          type="text" 
          value={question} 
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ex: Como o robô agenda pelo WhatsApp?"
        />
        <button onClick={askAi} disabled={loading}>
          {loading ? 'Consultando...' : 'Perguntar'}
        </button>
      </div>

      {/* Requisito: Gestão de Estado (Loading e Error Handling) */}
      {loading && <div className="loader">O assistente está digitando...</div>}
      {error && <p className="error-msg">{error}</p>}
      
      {response && !loading && (
        <div className="ai-response">
          <strong>Resposta do Assistente:</strong>
          <p>{response}</p>
        </div>
      )}
      <div className="ai-footer" style={{ marginTop: '15px', fontSize: '0.75rem', color: '#888', textAlign: 'right' }}>
      Powered by <strong>Llama 3</strong> via GroqCloud
    </div>
    </div>
  );
};

export default VirtualAssistant;
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Monta a mensagem estruturada para o WhatsApp
    const text = `Olá! Tenho interesse/dúvida sobre o AgendaBot.%0A%0A*Nome:* ${formData.name}%0A*Negócio:* ${formData.business}%0A*Mensagem:* ${formData.message}`;
    
    // Abre o WhatsApp com a mensagem pronta no seu número
    window.open(`https://wa.me/5521965870535?text=${text}`, '_blank');
  };

  return (
    <section id="contato" style={{ 
      padding: '60px 20px',
      backgroundColor: '#f8fafc', 
      textAlign: 'center',
      borderTop: '1px solid #e2e8f0'
    }}>
      <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ 
            fontSize: '1.5rem',
            color: '#1e293b', 
            marginBottom: '8px',
            fontWeight: '700' 
          }}>
            Quer o AgendaBot no seu negócio?
          </h2>
          <p style={{ 
            color: '#64748b', 
            fontSize: '0.95rem', 
            lineHeight: '1.4' 
          }}>
            Preencha os dados abaixo e fale diretamente com nosso suporte.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ 
          backgroundColor: '#ffffff', 
          padding: '24px', 
          borderRadius: '16px', 
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
          border: '1px solid #e2e8f0'
        }}>
          
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: '#475569', marginBottom: '8px' }}>
              Seu Nome
            </label>
            <input 
              type="text" 
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Ex: Halan Moisés"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                fontSize: '0.95rem',
                color: '#1e293b',
                boxSizing: 'border-box',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: '#475569', marginBottom: '8px' }}>
              Nome do seu Negócio
            </label>
            <input 
              type="text" 
              name="business"
              required
              value={formData.business}
              onChange={handleChange}
              placeholder="Ex: Barbearia do Centro"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                fontSize: '0.95rem',
                color: '#1e293b',
                boxSizing: 'border-box',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: '#475569', marginBottom: '8px' }}>
              Como podemos ajudar?
            </label>
            <textarea 
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Digite sua dúvida ou necessidade..."
              rows="4"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                fontSize: '0.95rem',
                color: '#1e293b',
                boxSizing: 'border-box',
                outline: 'none',
                resize: 'vertical'
              }}
            />
          </div>

          <button 
            type="submit"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              width: '100%',
              padding: '16px',
              backgroundColor: '#475569', 
              color: '#fff', 
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '1rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.2s'
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>💬</span> Enviar para o WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
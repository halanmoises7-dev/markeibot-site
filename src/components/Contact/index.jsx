import React, { useState } from 'react';
import './Contact.css'; // Importação do arquivo de estilos

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
    <section id="contato" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            Quer o AgendaBot no seu negócio?
          </h2>
          <p className="contact-subtitle">
            Preencha os dados abaixo e fale diretamente com nosso suporte.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          
          <div className="form-group">
            <label className="form-label">
              Seu Nome
            </label>
            <input 
              type="text" 
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Ex: Halan Moisés"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Nome do seu Negócio
            </label>
            <input 
              type="text" 
              name="business"
              required
              value={formData.business}
              onChange={handleChange}
              placeholder="Ex: Barbearia do Centro"
              className="form-input"
            />
          </div>

          <div className="form-group-last">
            <label className="form-label">
              Como podemos ajudar?
            </label>
            <textarea 
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Digite sua dúvida ou necessidade..."
              rows="4"
              className="form-input form-textarea"
            />
          </div>

          <button type="submit" className="submit-button">
            <span className="button-icon">💬</span> Enviar para o WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    message: '',
    sendMethod: 'whatsapp'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, business, message, sendMethod } = formData;
    const subject = "Dúvida sobre o AgendaBot";
    const bodyText = `Olá! Tenho uma dúvida sobre o AgendaBot.\n\n*Nome:* ${name}\n*Negócio:* ${business}\n*Mensagem:* ${message}`;

    if (sendMethod === 'whatsapp') {
      const encodedText = window.encodeURIComponent(bodyText);
    
      window.open(`https://wa.me/5521965870535?text=${encodedText}`, '_blank');
    } else {
      
      const mailtoLink = `mailto:agendabot.br@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <section id="contato" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Dúvidas?</h2>
          <p className="contact-subtitle">
            Preencha os campos abaixo e escolha o canal de atendimento que preferir.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label className="form-label">Seu Nome</label>
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
            <label className="form-label">Nome do seu Negócio</label>
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

          <div className="form-group">
            <label className="form-label">Como prefere falar conosco?</label>
            <select 
              name="sendMethod" 
              value={formData.sendMethod} 
              onChange={handleChange}
              className="form-input form-select"
            >
              <option value="whatsapp">WhatsApp</option>
              <option value="email">E-mail</option>
            </select>
          </div>

          <div className="form-group-last">
            <label className="form-label">Sua Mensagem</label>
            <textarea 
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Como podemos te ajudar hoje?"
              rows="4"
              className="form-input form-textarea"
            />
          </div>

          <button 
            type="submit" 
            className={`submit-button ${formData.sendMethod === 'whatsapp' ? 'btn-whatsapp' : 'btn-email'}`}
          >
            <span className="button-icon">
              {formData.sendMethod === 'whatsapp' ? '💬' : '✉️'}
            </span> 
            Enviar via {formData.sendMethod === 'whatsapp' ? 'WhatsApp' : 'E-mail'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
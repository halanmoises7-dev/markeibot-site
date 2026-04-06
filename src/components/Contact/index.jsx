import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    message: '',
    sendMethod: 'whatsapp'
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, business, message, sendMethod } = formData;
    const subject = "Contato via Site - MarkeiBot";
    const bodyText = `Olá! Gostaria de falar sobre o MarkeiBot.\n\n*Nome:* ${name}\n*Negócio:* ${business}\n*Mensagem:* ${message}`;

    if (sendMethod === 'whatsapp') {
      const encodedText = window.encodeURIComponent(bodyText);
      window.open(`https://wa.me/5521965870535?text=${encodedText}`, '_blank');
    } else {
      const mailtoLink = `mailto:markeibot.br@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
      window.location.href = mailtoLink;
    }

    setShowSuccess(true);
    setFormData({ name: '', business: '', message: '', sendMethod: 'whatsapp' });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <section id="contato" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Entre em Contato</h2>
          <p className="contact-subtitle">
            Ainda tem dúvidas? Fale com a gente agora e veja como o MarkeiBot pode automatizar o seu negócio.
          </p>
        </div>

        {showSuccess && (
          <div className="success-message" style={{
            backgroundColor: '#d4edda',
            color: '#155724',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '20px',
            textAlign: 'center',
            border: '1px solid #c3e6cb',
            fontWeight: 'bold'
          }}>
            ✅ Mensagem enviada! Redirecionando para o {formData.sendMethod === 'whatsapp' ? 'WhatsApp' : 'E-mail'}...
          </div>
        )}

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
            <label className="form-label">Canal de Atendimento</label>
            <select 
              name="sendMethod" 
              value={formData.sendMethod} 
              onChange={handleChange}
              className="form-input form-select"
            >
              <option value="whatsapp">Falar via WhatsApp</option>
              <option value="email">Falar via E-mail</option>
            </select>
          </div>

          <div className="form-group-last">
            <label className="form-label">Como podemos ajudar?</label>
            <textarea 
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Conte-nos um pouco sobre sua necessidade..."
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
            Iniciar Contato por {formData.sendMethod === 'whatsapp' ? 'WhatsApp' : 'E-mail'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
import './About.css';

const About = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <div className="image-placeholder" style={{ 
            width: '100%', 
            height: '100%', 
            borderRadius: '20px', 
            overflow: 'hidden',
            border: 'none',
            background: 'transparent'
          }}>
            <img 
              src="/MarkeiBot_Mockup.png" 
              alt="Mockup do MarkeiBot - Interface de agendamento" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '20px'
              }}
            />
          </div>
        </div>
        
        <div className="about-text">
          <span className="subtitle">Conheça o Chatbot</span>
          <h2>Atendimento inteligente que <span>trabalha por você.</span></h2>
          <p>
            O <strong>MarkeiBot</strong> não é apenas um chat automático. Ele entende a necessidade do seu cliente, 
            consulta sua disponibilidade em tempo real e finaliza o agendamento em segundos. 
            É a tecnologia que garante: tá agendado, tá resolvido.
          </p>
          
          <div className="about-footer-wrapper">
            <ul className="about-list">
              <li>✅ Chatbot personalizável com agendamento automático</li>
              <li>✅ App para gerenciar, reagendar e bloquear horários</li>
              <li>✅ Link próprio e avisos de agendamento no seu Zap</li>
            </ul>

            <a href="#planos" className="btn-ver-preco">
              Ver Planos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
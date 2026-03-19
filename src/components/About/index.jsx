import './styles.css';

const About = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-image">
          {/* AJUSTE DA IMAGEM MOCKUP*/}
          <div className="image-placeholder" style={{ 
            width: '100%', 
            height: '100%', 
            borderRadius: '20px', 
            overflow: 'hidden',
            border: 'none',
            background: 'transparent'
          }}>
            <img 
              src="/AgendaBot_Mockup.png" 
              alt="Mockup do AgendaBot" 
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
            O AgendarBot não é apenas um chat automático. Ele entende a necessidade do seu cliente, 
            consulta sua disponibilidade em tempo real e finaliza o agendamento sem que você 
            precise parar o que está fazendo.
          </p>
          
          <div className="about-footer-wrapper">
            <ul className="about-list">
              <li>✅ Integração direta com WhatsApp</li>
              <li>✅ Sem necessidade de instalação para o cliente</li>
              <li>✅ Painel de controle simples e intuitivo</li>
            </ul>

            <a href="#planos" className="btn-ver-preco">
              Ver Plano Único
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
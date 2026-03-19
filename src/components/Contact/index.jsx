const Contact = () => {
  return (
    <section id="contato" style={{ 
      padding: '40px 20px',
      backgroundColor: '#f8fafc', 
      textAlign: 'center',
      borderTop: '1px solid #e2e8f0'
    }}>
      <div style={{ maxWidth: '100%', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '1.25rem',
          color: '#1e293b', 
          marginBottom: '8px',
          fontWeight: '700' 
        }}>
          Ainda tem dúvidas?
        </h2>
        
        <p style={{ 
          color: '#64748b', 
          fontSize: '0.95rem', 
          marginBottom: '20px',
          lineHeight: '1.4' 
        }}>
          Chame nosso suporte técnico agora.
        </p>

        <a 
          href="https://wa.me/5521965870535?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20o%20AgendaBot."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            width: '100%',
            maxWidth: '300px', 
            padding: '16px',
            backgroundColor: '#475569', 
            color: '#fff', 
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
        >
          <span style={{ fontSize: '1.3rem' }}>💬</span> Falar com Suporte
        </a>
      </div>
    </section>
  );
};

export default Contact;
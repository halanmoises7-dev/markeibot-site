const Main = () => {
  return (
    <section id="inicio" style={{ 
  padding: '80px 20px', 
  textAlign: 'center', 
  backgroundColor: '#f0f4f8',
  minHeight: 'calc(100vh - 80px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'}}>
      <h1 style={{ fontSize: '3rem', color: '#0f172a', marginBottom: '20px' }}>
        <span style={{ color: '#2563eb' }}>Simplifique</span> sua agenda agora.
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#4b5563', maxWidth: '700px', margin: '0 auto 30px' }}>
        O assistente inteligente que organiza seus horários no WhatsApp 24h por dia, para você focar no que realmente importa: <strong style={{ color: '#0f172a' }}>seus clientes.</strong>
      </p>
        <a 
  href="#planos" 
  style={{ 
    textDecoration: 'none',
    display: 'inline-block',
    padding: '15px 35px', 
    backgroundColor: '#2563eb', 
    color: '#fff', 
    border: 'none', 
    borderRadius: '8px', 
    fontSize: '1.1rem', 
    fontWeight: 'bold', 
    cursor: 'pointer',
    boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)',
    transition: '0.3s'
  }}
  onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
>
  Começar Agora
        </a>
    </section>
  );
};

export default Main;
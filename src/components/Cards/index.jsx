import FeatureCard from './FeatureCard';
import './Cards.css';

const CardsSection = () => {
  const cardData = [
    {
      title: "Agendamento Online",
      description: "Seu cliente escolhe o melhor horário diretamente pelo bot. Sem esperas, sem complicação.",
      image: "/AgendamentoOnline.png" 
    },
    {
      title: "Gestão de Horários",
      description: "Controle total da sua agenda em um só lugar. O MarkeiBot evita marcações duplicadas automaticamente.",
      image: "/GestaodeHorarios.png"
    },
    {
      title: "Atendimento 24/7",
      description: "Sempre ativo. Realize agendamentos e tire dúvidas em tempo real, mesmo fora do horário comercial.",
      image: "/Atendimento.png"
    }
  ];

  return (
    <section id="recursos" className="cards-container">
      <div className="content-limit">
        {/* Título atualizado para a nova marca */}
        <h2 className="title-section">Recursos do MarkeiBot</h2>
        
        <div className="cards-grid">
          {cardData.map((card, index) => (
            <FeatureCard 
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
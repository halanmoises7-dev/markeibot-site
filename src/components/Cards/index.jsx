import FeatureCard from './FeatureCard';
import './Cards.css';

const CardsSection = () => {
  const cardData = [
    {
      title: "Agendamento Online",
      description: "Seu cliente escolhe o melhor horário diretamente pelo bot, sem complicação.",
      image: "/AgendamentoOnline.png" 
    },
    {
      title: "Gestão de Horários",
      description: "Controle total da sua agenda em um só lugar, evitando marcações duplicadas.",
      image: "/GestaodeHorarios.png"
    },
    {
      title: "Atendimento 24/7",
      description: "Responda dúvidas e realize agendamentos em tempo real, mesmo fora do seu horário comercial.",
      image: "/Atendimento.png"
    }
  ];

  return (
    <section id="recursos" className="cards-container">
      <div className="content-limit">
        <h2 className="title-section">Recursos do AgendaBot</h2>
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
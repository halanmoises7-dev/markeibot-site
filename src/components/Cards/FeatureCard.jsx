import './styles.css';

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="feature-card">
      <div className="icon-wrapper">
        {/* Renderiza a imagem passando o caminho que vem do CardsSection */}
        <img 
          src={image} 
          alt={`Ilustração para ${title}`} 
          className="feature-image" 
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
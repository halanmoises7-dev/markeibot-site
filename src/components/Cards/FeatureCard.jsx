import './Cards.css';

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="feature-card">
      <div className="icon-wrapper">
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
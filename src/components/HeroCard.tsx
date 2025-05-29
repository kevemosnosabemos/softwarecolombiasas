import '../styles/heroCard.css'

interface HeroCardProps {
  id: number;
  name: string;
  image: string;
  onClick: () => void;
}

function HeroCard({ name, image, onClick }: HeroCardProps): React.JSX.Element {
    return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}

export default HeroCard;
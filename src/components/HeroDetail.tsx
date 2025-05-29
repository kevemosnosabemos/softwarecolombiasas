import { HeroDetails } from '../types/hero';
import '../styles/heroDetail.css'

interface HeroDetailProps {
  hero: HeroDetails | null;
  onClose: () => void;
}

function HeroDetail({ hero, onClose }:HeroDetailProps): React.JSX.Element {
    if (!hero) return <></>;

    return (
        <div className="overlay" onClick={onClose}>
        <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={onClose}>X</button>
            <h2>{hero.name}</h2>
            <img src={hero.images.lg} alt={hero.name} className="hero-image" />
            <p><strong>Full Name:</strong> {hero.biography.fullName || 'N/A'}</p>
            <p><strong>Publisher:</strong> {hero.biography.publisher || 'N/A'}</p>
            <p><strong>Occupation:</strong> {hero.work.occupation || 'N/A'}</p>
            <p><strong>Power Stats:</strong></p>
            <ul className="powerstats-list">
            {Object.entries(hero.powerstats).map(([stat, value]) => (
                <li key={stat}><strong>{stat}:</strong> {value}</li>
            ))}
            </ul>
        </div>
        </div>
    );
};

export default HeroDetail;
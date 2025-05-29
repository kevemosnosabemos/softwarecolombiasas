import React, { useEffect, useState } from 'react';
import HeroCard from './components/HeroCard';
import HeroDetail from './components/HeroDetail';
import { getHeroes, getHeroById } from './lib/api';
import { Hero, HeroDetails } from './types/hero';
import './App.css'

function SuperheroApp():React.JSX.Element {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [selectedHero, setSelectedHero] = useState<HeroDetails | null>(null);

  useEffect(() => {
    getHeroes(page).then(data => {
      setHeroes(data.items);
      setTotalPages(data.lastPage);
    });
  }, [page]);

  const openHeroDetails = (id: number) => {
    getHeroById(id).then(setSelectedHero);
  };

  return (
    <div className="container">
      <h1 className="title">Superheroes</h1>

      <div className="hero-list">
        {heroes.map(hero => (
          <HeroCard
            key={hero.id}
            id={hero.id}
            name={hero.name}
            image={hero.images.sm}
            onClick={() => openHeroDetails(hero.id)}
          />
        ))}
      </div>

      <div className="pagination">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>Next</button>
      </div>
      
      <HeroDetail hero={selectedHero} onClose={() => setSelectedHero(null)} />
    </div>
  );
};

export default SuperheroApp;

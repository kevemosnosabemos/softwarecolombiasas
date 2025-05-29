import axios from 'axios';
import { Hero, HeroDetails } from '../types/hero';

const BASE_URL = 'https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api';

export async function getHeroes(page: number, size = 10): Promise<{ items: Hero[], lastPage: number }> {
  const res = await axios.get(`${BASE_URL}/heroes?size=${size}&page=${page}`);
  return { items: res.data.items, lastPage: res.data.lastPage };
};

export async function getHeroById(id: number): Promise<HeroDetails> {
  const res = await axios.get(`${BASE_URL}/hero?id=${id}`);
  return res.data;
};
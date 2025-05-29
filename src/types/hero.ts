export interface Hero {
  id: number;
  name: string;
  images: {
    sm: string;
    md: string;
    lg: string;
  };
}

export interface HeroDetails extends Hero {
  slug: string;
  powerstats: Record<string, any>;
  appearance: Record<string, any>;
  biography: Record<string, any>;
  work: Record<string, any>;
  connections: Record<string, any>;
}

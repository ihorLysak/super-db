import React from "react";
import { MinimalSuperheroDto } from "../../../../types/types";

interface Properties {
  hero: MinimalSuperheroDto;
}

const HeroCard: React.FC<Properties> = ({ hero }: Properties) => {
  return (
    <div>
      <img
        src="https://via.assets.so/img.jpg?w=400&h=150&tc=blue&bg=#"
        alt={`${hero.nickname}'s message`}
      />
      <span>{hero.nickname}</span>
    </div>
  );
};

export { HeroCard };

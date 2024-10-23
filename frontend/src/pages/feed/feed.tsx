import React from "react";
import { HeroCard } from "./components/components";
import styles from "./styles.module.css";

const dummyHero = {
  id: 1,
  nickname: "flash",
};

const Feed: React.FC = () => {
  return (
    <div className={`page ${styles.container}`}>
      <HeroCard hero={dummyHero} />
    </div>
  );
};

export { Feed };

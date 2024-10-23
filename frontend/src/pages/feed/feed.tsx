import React from "react";
import { HeroCard } from "./components/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

const dummyHero = {
  id: 1,
  nickname: "flash",
};

const Feed: React.FC = () => {
  return (
    <div className={`page ${styles.container}`}>
      <div className={styles["title-wrapper"]}>
        <h2>Heroes list</h2>
        <div className={styles["add-hero-btn-wrapper"]}>
          <span>new hero</span>
          <button className={styles["button"]}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <section className={styles["heroes-container"]}>
        <HeroCard hero={dummyHero} />
      </section>
    </div>
  );
};

export { Feed };

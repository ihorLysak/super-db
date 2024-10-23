import React from "react";
import { MinimalSuperheroDto } from "../../../../libs/types/types";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";

interface Properties {
  hero: MinimalSuperheroDto;
}

const HeroCard: React.FC<Properties> = ({ hero }: Properties) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["hero-details"]}>
        <img
          src="https://via.assets.so/img.jpg?w=400&h=150&tc=blue&bg=#"
          alt={`${hero.nickname}'s message`}
          className={styles["main-image"]}
        />
        <span className={styles["nickname"]}>{hero.nickname}</span>
      </div>
      <div className={styles["btns-container"]}>
        <button className={styles["button"]}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles["icon"]}
          />
        </button>
        <button className={styles["button"]}>
          <FontAwesomeIcon icon={faTrash} className={styles["icon"]} />
        </button>
      </div>
    </div>
  );
};

export { HeroCard };

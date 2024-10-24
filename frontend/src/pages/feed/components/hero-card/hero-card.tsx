import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../../../store/hooks/hooks";
import { MinimalSuperheroDto } from "../../../../libs/types/types";
import { actions as feedActions } from "../../../../store/slices/feed/feed";
import { AppRoute } from "../../../../libs/enums/app-route.enum";

import styles from "./styles.module.css";

interface Properties {
  hero: MinimalSuperheroDto;
}

const HeroCard: React.FC<Properties> = ({ hero }: Properties) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDeleteHero = () => {
    dispatch(feedActions.deleteHero(hero.id));
  };

  const handleOpenDetails = () => {
    navigate(`${AppRoute.DETAILS}/${hero.id}`);
  };

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
        <button className={styles["button"]} onClick={handleOpenDetails}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles["icon"]}
          />
        </button>
        <button className={styles["button"]} onClick={handleDeleteHero}>
          <FontAwesomeIcon icon={faTrash} className={styles["icon"]} />
        </button>
      </div>
    </div>
  );
};

export { HeroCard };

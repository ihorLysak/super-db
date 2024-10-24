import React, { useState, useEffect, useCallback } from "react";
import { HeroModal } from "../../libs/components/components";
import { HeroCard } from "./components/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { actions as feedActions } from "../../store/slices/feed/feed";
import { CreateSuperheroDto } from "../../libs/types/create-hero-dto.type";

import styles from "./styles.module.css";

const Feed: React.FC = () => {
  const heroes = useAppSelector((state) => state.feed.heroes);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(feedActions.getAllHeroes());
  });

  const handleModalToggle = useCallback(() => {
    setIsModalOpen((prevState) => !prevState);
  }, []);

  const handleCreateHero = useCallback(
    (payload: CreateSuperheroDto) => {
      dispatch(feedActions.createHero(payload));
      handleModalToggle();
    },
    [dispatch, handleModalToggle]
  );

  return (
    <div className={styles["container"]}>
      {isModalOpen && (
        <HeroModal
          type="Create"
          onClose={handleModalToggle}
          onSubmit={handleCreateHero}
        />
      )}
      <div className={styles["title-wrapper"]}>
        <h2>Heroes list</h2>
        <div className={styles["btn-wrapper"]}>
          <span>new hero</span>
          <button className={styles["button"]} onClick={handleModalToggle}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <section className={styles["heroes-container"]}>
        {heroes.map((hero) => {
          return <HeroCard hero={hero} />;
        })}
      </section>
    </div>
  );
};

export { Feed };

import React, { useState, useEffect, useCallback } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { HeroCard, Pagination } from "./components/components";
import { getEntriesForPage } from "./helpers/get-entries-for-page.helper";
import { HeroModal, RoundButton } from "../../libs/components/components";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { actions as feedActions } from "../../store/slices/feed/feed";

import styles from "./styles.module.css";

const Feed: React.FC = () => {
  const { heroes, pageIndex } = useAppSelector((state) => ({
    heroes: state.feed.heroes,
    pageIndex: state.feed.pageIndex,
  }));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroesToDisplay = getEntriesForPage(pageIndex, heroes);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(feedActions.getAllHeroes());
  }, [dispatch]);

  const handleModalToggle = useCallback(() => {
    setIsModalOpen((prevState) => !prevState);
  }, []);

  const handleCreateHero = useCallback(
    (payload: FormData) => {
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
          <RoundButton icon={faPlus} onClick={handleModalToggle} />
        </div>
      </div>
      <section className={styles["heroes-container"]}>
        {heroesToDisplay.map((hero) => {
          return <HeroCard hero={hero} key={hero.id} />;
        })}
      </section>
      <Pagination
        pageIndex={pageIndex}
        displayedEntriesAmount={heroesToDisplay.length}
      />
    </div>
  );
};

export { Feed };

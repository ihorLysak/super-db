import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import {
  FullHeroForm,
  HeroModal,
  RoundButton,
} from "../../libs/components/components";
import { FullSuperheroDto } from "../../libs/types/types";
import { actions as detailsActions } from "../../store/slices/details/details";

import styles from "./styles.module.css";

const Details: React.FC = () => {
  const heroDetails = useAppSelector((state) => state.details.heroDetails);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(detailsActions.getHeroDetails(Number(params.id)));
  }, [dispatch, params.id]);

  const handleModalToggle = useCallback(() => {
    setIsModalOpen((prevState) => !prevState);
  }, []);

  const handleChangeHero = useCallback(
    (payload: FormData) => {
      dispatch(
        detailsActions.changeHero({
          dataToChange: payload,
          id: Number(params.id),
        })
      );

      handleModalToggle();
    },
    [dispatch, handleModalToggle, params.id]
  );

  return (
    <div className={styles["container"]}>
      {isModalOpen && (
        <HeroModal
          type="Edit"
          heroDetails={heroDetails as FullSuperheroDto}
          onClose={handleModalToggle}
          onSubmit={handleChangeHero}
        />
      )}
      <div className={styles["title-wrapper"]}>
        <h2>Details</h2>
        <div className={styles["btn-wrapper"]}>
          <span>edit hero</span>
          <RoundButton icon={faPencil} onClick={handleModalToggle} />
        </div>
      </div>
      <div className={styles["form-wrapper"]}>
        <FullHeroForm
          type="View"
          fullHeroDetails={heroDetails as FullSuperheroDto}
        />
      </div>
    </div>
  );
};

export { Details };

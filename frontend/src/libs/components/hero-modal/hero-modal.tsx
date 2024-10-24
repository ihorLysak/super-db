import React from "react";
import { FullSuperheroDto, CreateSuperheroDto } from "../../types/types";
import { FullHeroForm } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.css";

interface Properties {
  type: "Create" | "Edit";
  heroDetails?: FullSuperheroDto;
  onClose: () => void;
  onSubmit: (payload: CreateSuperheroDto, id?: number) => void;
}

const HeroModal: React.FC<Properties> = ({
  type,
  heroDetails,
  onClose,
  onSubmit,
}: Properties) => {
  return (
    <div className={styles["background"]}>
      <div className={styles["form-container"]}>
        <div className={styles["form-header"]}>
          <h2>{type} Hero</h2>
          <button className={styles["button"]} onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <FullHeroForm
          type={type}
          fullHeroDetails={heroDetails}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export { HeroModal };

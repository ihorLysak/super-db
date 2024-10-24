import React from "react";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "../../enums/app-route.enum";

import styles from "./styles.module.css";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate(AppRoute.ROOT);
  };

  return (
    <header className={styles["container"]}>
      <h1 className={styles["title"]} onClick={handleTitleClick}>
        SUPER-DB
      </h1>
    </header>
  );
};

export { Header };

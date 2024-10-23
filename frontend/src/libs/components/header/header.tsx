import React from "react";
import styles from "./styles.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles["container"]}>
      <h1 className={styles["title"]}>SUPER-DB</h1>
    </header>
  );
};

export { Header };

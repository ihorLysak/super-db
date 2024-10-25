import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import styles from "./styles.module.css";

interface Properties {
  isHidden?: boolean;
  icon: IconProp;
  onClick: () => void;
}

const RoundButton: React.FC<Properties> = ({
  isHidden = false,
  icon,
  onClick,
}: Properties) => {
  return (
    <button
      className={`${styles["button"]} ${isHidden && styles["hidden"]}`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export { RoundButton };

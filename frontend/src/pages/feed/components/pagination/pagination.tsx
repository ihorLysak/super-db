import React from "react";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { RoundButton } from "../../../../libs/components/components";
import { useAppDispatch } from "../../../../store/hooks/hooks";
import { actions as feedActions } from "../../../../store/slices/feed/feed";
import { DISPLAYED_ENTITIES_AMOUNT } from "../../../../libs/constants/displayed-entities-amount.constant";

import styles from "./styles.module.css";

interface Properties {
  pageIndex: number;
  displayedEntriesAmount: number;
}

const Pagination: React.FC<Properties> = ({
  pageIndex,
  displayedEntriesAmount,
}: Properties) => {
  const dispatch = useAppDispatch();

  const handleSetPreviousPage = () => {
    dispatch(feedActions.setPageIndex(pageIndex - 1));
  };

  const handleSetNextPage = () => {
    dispatch(feedActions.setPageIndex(pageIndex + 1));
  };

  return (
    <div className={styles["pagination-container"]}>
      <RoundButton
        isHidden={pageIndex === 1}
        icon={faAngleLeft}
        onClick={handleSetPreviousPage}
      />
      <div className={styles["page-index"]}>{pageIndex}</div>
      <RoundButton
        isHidden={displayedEntriesAmount < DISPLAYED_ENTITIES_AMOUNT}
        icon={faAngleRight}
        onClick={handleSetNextPage}
      />
    </div>
  );
};

export { Pagination };

import React from "react";
import cls from "classnames";

import Button from "../Button";

import styles from "./NomineeCard.module.css";

export type NomineeCardProps = {
  nominee: Item;
  selected: boolean;
  onSelect: (nominee: Item) => void;
};

const NomineeCard: React.FC<NomineeCardProps> = ({
  nominee,
  selected,
  onSelect,
}) => {
  return (
    <div
      className={cls(styles.card, selected && styles["selected"])}
      aria-labelledby={nominee.id}
    >
      <div className={styles["card-header"]}>
        <h4 id={nominee.id}>{nominee.title}</h4>
      </div>
      <div className={styles["card-content"]}>
        <img src={nominee.photoUrL} alt="Photo" />
      </div>
      <div className={styles["card-footer"]}>
        <Button onClick={() => onSelect(nominee)}>Select Button</Button>
      </div>
    </div>
  );
};

export default NomineeCard;

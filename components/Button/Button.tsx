import React from "react";
import cls from "classnames";

import styles from "./Button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "submit"; // default primary. you can add more predefined color types.
  size?: "medium" | "large"; // default medium.
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  color = "primary",
  size = "medium",
  ...props
}) => {
  return (
    <button
      className={cls(
        className,
        styles.btn,
        color === "primary" && styles["btn-primary"],
        color === "submit" && styles["btn-submit"],
        size === "medium" && styles["btn-medium"],
        size === "large" && styles["btn-large"]
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

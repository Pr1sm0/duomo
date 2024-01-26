import {ReactElement} from "react";
import styles from "./index.module.css";

type Props = {
  children: string;
  onClick: () => void;
  disabled?: boolean;
};

export const Button = ({children, onClick, disabled = false}: Props): ReactElement => {
  return (
    <button className={`${styles.root} ${disabled ? styles.rootDisabled : ''}`} disabled={disabled}
            onClick={onClick}>{children}</button>
  );
};

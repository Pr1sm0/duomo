import {ReactElement} from "react";
import styles from "./index.module.css";

type Props = {
  onChange: (email: string) => void;
};

export const Input = ({onChange}: Props): ReactElement => {
  return (
    <div className={styles.root}><label htmlFor="email" className={styles.label}>Email</label><input
      className={styles.input} onChange={(e) => onChange(e.target.value)} type="email" id="email"
      pattern=".+@example\.com" size={30} required/></div>
  );
};

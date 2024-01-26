import {ReactElement} from "react";
import styles from "./index.module.css";

type Props = {
  children: string;
};

export const Title = ({children}: Props): ReactElement => {
  return (
    <h2 className={styles.root}>{children}</h2>
  );
};

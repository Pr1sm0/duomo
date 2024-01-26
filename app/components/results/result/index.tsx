import {ReactElement} from "react";
import styles from "./index.module.css";

export interface IResult {
  id: number;
  percentage: number;
  description: string;
}

type Props = {
  result: IResult;
};

export const Result = ({result}: Props): ReactElement => {
  return (
    <div className={styles.root}>
      <p className={styles.percentage}>{result.percentage}%</p>
      <p className={styles.description}>{result.description}</p>
    </div>
  );
};

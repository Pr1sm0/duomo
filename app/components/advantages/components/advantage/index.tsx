import {ReactElement} from "react";
import styles from "./index.module.css";
import Image from "next/image";

export interface IAdvantage {
  id: number;
  description: string;
}

type Props = {
  advantage: IAdvantage;
};

export const Advantage = ({advantage}: Props): ReactElement => {
  return (
    <div className={styles.root}>
      <Image
        className={styles.buttonImage}
        src="/check.svg"
        alt="Check"
        width={24}
        height={24}
        priority
      />
      <p className={styles.description}>{advantage.description}</p>
    </div>
  );
};

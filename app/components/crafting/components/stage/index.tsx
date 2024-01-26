import {ReactElement} from "react";
import styles from "./index.module.css";
import Image from "next/image";

export interface IStage {
  id: number;
  description: string;
  isCompleted: boolean;
}

type Props = {
  stage: IStage;
};

export const Stage = ({stage}: Props): ReactElement => {
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
      <p className={styles.description}>{stage.description}</p>
    </div>
  );
};

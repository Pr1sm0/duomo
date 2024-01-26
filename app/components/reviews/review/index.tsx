import {ReactElement} from "react";
import styles from "./index.module.css";
import Image from "next/image";

export interface IReview {
  id: number;
  name: string;
  date: string;
  text: string;
  stars: number;
}

type Props = {
  review: IReview;
};

export const Review = ({review}: Props): ReactElement => {
  return (
    <div className={styles.root}>
      <div className={styles.infoWrapper}>
        <div className={styles.nameDateWrapper}><p className={styles.name}>{review.name}</p>
          <p className={styles.date}>{review.date}</p></div>
        <Image
          src="/rating.svg"
          alt="Rating"
          width={60}
          height={20}
        />
      </div>
      <p className={styles.text}>{review.text}</p>
    </div>
  );
};

import {ReactElement} from "react";
import styles from "./index.module.css";
import {IReview, Review} from "@/app/components/reviews/review";
import {Title} from "@/app/components/title";

const reviews: IReview[] = [
  {
    id: 1,
    name: "Guadalupe Hudson",
    date: '2 January 2024',
    text: '️All I want to know if you are working on another agent A game or chapters. Loved this game!',
    stars: 5,
  },
  {
    id: 2,
    name: "Bobby Wintheiser",
    date: '27 December 2023',
    text: '️I’ve played this over and over and I love it!',
    stars: 5,
  },
  {
    id: 3,
    name: "Colleen Beahan",
    date: '19 December 2023',
    text: '️Soooo fun I recommend. Easy and fun I thought it was a little challenging but if it wasn’t it would not be fun I recommend',
    stars: 5,
  },
];

export const Reviews = (): ReactElement => {
  return (
    <section className={styles.root}>
      <Title>Users love App!</Title>
      <div className={styles.reviewsWrapper}>
        {reviews.map((review) => (
          <Review key={review.id} review={review}/>
        ))}
      </div>
    </section>
  );
};

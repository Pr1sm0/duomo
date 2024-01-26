import {ReactElement} from "react";
import styles from "./index.module.css";
import {Advantage, IAdvantage} from "@/app/components/advantages/components/advantage";
import {Title} from "@/app/components/title";

const advantages: IAdvantage[] = [
  {
    id: 1,
    description: '️️You wake up feeling motivated and energized',
  },
  {
    id: 2,
    description: 'You start your day in harmony with prayer',
  },
  {
    id: 3,
    description: 'Your relationships are stronger than ever',
  },
  {
    id: 4,
    description: 'You’re committed to spiritual growth and self-improvement',
  },
  {
    id: 5,
    description: 'You grow closer to God through everyday Bible reading',
  },
];

export const Advantages = (): ReactElement => {
  return (
    <section className={styles.root}>
      <Title>What you get</Title>
      <div className={styles.advantagesWrapper}>
        {advantages.map((advantage) => (
          <Advantage key={advantage.id} advantage={advantage}/>
        ))}
      </div>
    </section>
  );
};

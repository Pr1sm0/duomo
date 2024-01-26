import {ReactElement} from "react";
import styles from "./index.module.css";
import {IResult, Result} from "@/app/components/results/result";
import {Title} from "@/app/components/title";

const results: IResult[] = [
  {
    id: 1,
    percentage: 71,
    description: '️of users were able to feel the power of prayer after just 6 weeks',
  },
  {
    id: 2,
    percentage: 65,
    description: 'of users started to have a meaningful daily routine and peaceful mind',
  },
  {
    id: 3,
    percentage: 47,
    description: 'of users struggled with finding time for daily praying',
  },
];

export const Results = (): ReactElement => {
  return (
    <section className={styles.root}>
      <Title>People just like you achieved great results with App!</Title>
      <div className={styles.resultsWrapper}>
        {results.map((result) => (
          <Result key={result.id} result={result}/>
        ))}
      </div>
    </section>
  );
};

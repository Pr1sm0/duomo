import styles from "./page.module.css";
import {PlanSelect} from "@/app/components/planSelect";
import {Advantages} from "@/app/components/advantages";
import {Results} from "@/app/components/results";
import {Reviews} from "@/app/components/reviews";

export default function Home() {
  return (
    <main className={styles.main}>
      <PlanSelect id="top"/>
      <Advantages/>
      <Results/>
      <Reviews/>
      <PlanSelect id="bottom"/>
    </main>
  );
}

import styles from "./page.module.css";
import {Crafting} from "@/app/components/crafting";

export default function CraftingPage() {
  return (
    <main className={styles.main}>
      <Crafting/>
    </main>
  );
}

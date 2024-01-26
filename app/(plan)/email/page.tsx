import styles from "./page.module.css";
import {Email} from "@/app/components/email";

export default function EmailPage() {
  return (
    <main className={styles.main}>
      <Email/>
    </main>
  );
}

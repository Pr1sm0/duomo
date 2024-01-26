"use client"
import {ReactElement} from "react";
import {useRouter} from "next/navigation";
import styles from "./index.module.css";
import Image from "next/image";

export const Navbar = (): ReactElement => {
  const router = useRouter()
  return (
    <header className={styles.root}>
      <button
        type="button"
        className={styles.button}
        onClick={() => router.back()}
      >
        <Image
          className={styles.buttonImage}
          src="/back.svg"
          alt="Back"
          width={24}
          height={24}
          priority
        />
      </button>
      <h3 className={styles.appName}>App</h3>
      <button
        type="button"
        className={styles.button}
        onClick={() => router.back()}
      >
        <Image
          className={styles.buttonImage}
          src="/menu.svg"
          alt="Menu"
          width={24}
          height={24}
          priority
        />
      </button>
    </header>
  );
};

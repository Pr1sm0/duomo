"use client"
import {ReactElement} from "react";
import styles from "./index.module.css";
import {useRouter} from "next/navigation";
import {Button} from "@/app/components/button";
import Image from "next/image";
import {Title} from "@/app/components/title";

export const Growth = (): ReactElement => {
  const router = useRouter();

  const handleContinueClick = async () => {
    const email = sessionStorage.getItem("email") || '';
    await fetch("/api", {
      method: "POST",
      body: JSON.stringify(email),
    });
    router.push('/');
  }

  return (
    <section className={styles.root}>
      <div className={styles.wrapper}><Title>See your Spiritual Growth progress by Sep 17, 2024</Title>
        <Image
          src="/growth.svg"
          alt="Loader"
          width={342}
          height={354}
          priority
        />
      </div>

      <Button onClick={handleContinueClick}>Continue</Button>
    </section>
  );
};

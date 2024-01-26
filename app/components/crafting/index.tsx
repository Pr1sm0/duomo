"use client"
import {ReactElement, useEffect} from "react";
import styles from "./index.module.css";
import {IStage, Stage} from "@/app/components/crafting/components/stage";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {Title} from "@/app/components/title";

const stages: IStage[] = [
  {
    id: 1,
    description: '️️Aligning with your goals',
    isCompleted: false,
  },
  {
    id: 2,
    description: 'Reviewing your answers',
    isCompleted: false,
  },
  {
    id: 3,
    description: 'Picking Bible verses and prayers for you',
    isCompleted: false,
  },
  {
    id: 4,
    description: 'Finalizing your personalized plan',
    isCompleted: false,
  },
];

export const Crafting = (): ReactElement => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push('/email'), 2000)
  }, [router]);

  return (
    <section className={styles.root}>
      <Title>We are crafting your spiritual growth plan</Title>
      <Image
        src="/loader.svg"
        alt="Loader"
        width={200}
        height={200}
        priority
      />
      <div className={styles.stagesWrapper}>
        {stages.map((stage) => (
          <Stage key={stage.id} stage={stage}/>
        ))}
      </div>
    </section>
  );
};

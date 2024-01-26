"use client"
import {ReactElement, useCallback, useState} from "react";
import {useRouter} from "next/navigation";
import styles from "./index.module.css";
import {IOption, PlanOption} from "@/app/components/planSelect/components/planOption";
import Link from "next/link";
import {Button} from "@/app/components/button";
import {Title} from "@/app/components/title";

const options: IOption[] = [
  {
    id: 1,
    months: 1,
    price: 10,
    isMostPopular: false,
  },
  {
    id: 2,
    months: 3,
    price: 30,
    isMostPopular: true,
  },
  {
    id: 3,
    months: 6,
    price: 60,
    isMostPopular: false,
  },
];

type Props = {
  id: string
};

export const PlanSelect = ({id}: Props): ReactElement => {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleSelect = useCallback((id: number) => {
    setSelectedId(id);
  }, [])

  return (
    <section className={styles.root}>
      <Title>Choose your plan</Title>
      <div className={styles.optionsWrapper}>{options.map((option) => (
        <PlanOption key={`${option.id}${id}`} id={id} option={option} isSelected={selectedId === option.id}
                    handleSelect={handleSelect}/>
      ))}</div>
      <Button disabled={!selectedId} onClick={() => router.push('/crafting')}>Get my plan</Button>
      <p className={styles.explanation}>You are enrolling in a 3-monthly subscription to
        <Link className={styles.link}
              href="https://awesomeapp.com/subscription"> https://awesomeapp.com/subscription </Link> with the discount
        price $29.99.You agree that the plan you selected will automatically be extended at the full price for
        successive renewal periods and you will be charged $99.99 every 3 months until you cancel the subscription.
        Payments will be charged from the card you specified here. You can cancel your subscription by contacting our
        customer support team via email at support@awesomeapp.com Subscription Policy. The charge will appear on your
        bill as &quot;awesomeapp&quot;</p>
    </section>
  );
};

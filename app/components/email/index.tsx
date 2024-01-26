"use client"
import {ReactElement, useState} from "react";
import styles from "./index.module.css";
import {useRouter} from "next/navigation";
import {Button} from "@/app/components/button";
import {Input} from "@/app/components/input";
import {Title} from "@/app/components/title";

export const Email = (): ReactElement => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');

  const handleContinueClick = () => {
    sessionStorage.setItem("email", email);
    router.push('/growth')
  };
  const handleInputChange = (email: string) => setEmail(email);

  return (
    <section className={styles.root}>
      <div className={styles.wrapper}><Title>Enter your email to get your personalised Spiritual Growth Plan</Title>
        <Input onChange={handleInputChange}/>
      </div>

      <Button onClick={handleContinueClick}>Continue</Button>
    </section>
  );
};

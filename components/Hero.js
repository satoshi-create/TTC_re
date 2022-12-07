import React from "react";
import styles from "../styles/Hero.module.css";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={`parts-grid ${styles.bcg}`}>
        <h1 className={styles.catch}>
          半導体と液晶パネルを製造する装置のプロフェッショナル
        </h1>

        <Button value={{ path: "/", name: "装置一覧を見る" }} />
        <figure>
          <Image
            src="/hero.png"
            width={250}
            height={200}
            className={styles.heroImg}
            alt="hero-image"
          />
        </figure>
    </section>
  );
};

export default Hero;

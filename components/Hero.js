import React from "react";
import styles from "../styles/Hero.module.css";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={`parts-grid ${styles.bcg}`}>
      <div className={styles.box}>
        <h1 className={styles.catch}>
          半導体と液晶パネルを
          <br />
          製造する装置の
          <br />
          プロフェッショナル
        </h1>

        <Button value={{ path: "/", name: "装置一覧を見る" }} />
      </div>
      <figure className={styles.figure}>
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

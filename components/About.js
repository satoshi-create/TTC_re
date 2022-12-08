import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <section className="parts-grid ">
      <p className={styles.about}>
        TTCグループは、半導体と液
        晶パネルを製造する装置の売買を主な業務としています。
        <br />
        販売・レンタル・買取事業とと
        もに種々の情報・サービス・ソリューションも同時に提供 しています
      </p>
    </section>
  );
};

export default About;

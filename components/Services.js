import React from "react";
import Title from "./Title";
import { ShoppingCart } from "react-feather";
import Link from "next/link";
import styles from "../styles/Services.module.css";
import services from "../libs/Services";

const Services = () => {
  return (
    <section className="parts-grid section-padding">
      <Title title={"Services"} />
      <div className={styles.boxs}>
        {services.map((item, i) => {
          const { name, icon, desc, path } = item;
          return (
            <div className={styles.box} key={i}>
              <i className={styles.icon}>{icon}</i>
    
                <h3 className={styles.title}>{name}</h3>
                <p className={styles.desc}>{desc}</p>
                <Link href={path} className={styles.link}>
                  取り扱い商品一覧はコチラ
                </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

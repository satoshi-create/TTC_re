import React from "react";
import Title from "./Title";
import { ShoppingCart } from "react-feather";
import Link from "next/link";
import styles from "../styles/Services.module.css";
const Services = () => {
  return (
    <section className="parts-grid section-padding">
      <Title title={"Services"} />
      <div className={styles.boxs}>
        <div className={styles.box}>
          <h3>販売</h3>
          <ShoppingCart />
          <p className={styles.desc}>
            各種製造・分析装置の販売を行なっています。お気軽にご相談ください。
          </p>
          <Link href={"/"} className={styles.link}>
            取り扱い商品一覧はコチラ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

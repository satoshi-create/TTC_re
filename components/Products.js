import React from "react";
import styles from "../styles/Products.module.css";
import Title from "./Title";
import { ShoppingCart, ShoppingBag, Truck } from "react-feather";
import Image from "next/image";
import Link from "next/link";
const Products = () => {
  return (
    <section className="parts-grid section-padding">
      <Title title={"Products"} />
      <section className={styles.sale}>
        <div className={styles.productsTitle}>
          <i>
            <ShoppingCart />
          </i>
          <h3>販売製品情報</h3>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <Link href={"/"}>
              <figure>
                <Image
                  src="/products_thumb.png"
                  width={266}
                  height={204}
                  className={styles.heroImg}
                  alt="hero-image"
                />
              </figure>
              <p className={styles.name}>ケース洗浄装置</p>
              <p className={styles.id}>3CLEatc-ult-Q9932</p>
              <p className={styles.merker}>ACTOR</p>
              <p className={styles.number}>1台</p>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Products;

import React from "react";
import styles from "../styles/Products.module.css";
import Title from "./Title";
import { ShoppingCart, ShoppingBag, Truck } from "react-feather";
import Image from "next/image";
import Link from "next/link";
import products from "../libs/products";
import Button from "./Button";
const Products = () => {
  return (
    <section className="parts-grid section-padding">
      <Title title={"Products"} />
      <section className={styles.sale}>
        {products.map((item, i) => {
          const { name, icon, productItems } = item;
          return (
            <div className={styles.cardsBox} key={i}>
              <div className={styles.productsTitle}>
                <i className={styles.productItemsIcon}>{icon}</i>
                <h3>{name}</h3>
              </div>
              <div className={styles.cards}>
                {productItems.map((item, i) => {
                  const { src, name, path, id, merker, number } = item;
                  return (
                    <div className={styles.card} key={i}>
                      <Link href={path}>
                        <figure>
                          <Image
                            src={src}
                            width={266}
                            height={204}
                            sizes="100vw"
                            className={styles.heroImg}
                            style={{
                              width: "100%",
                              height: "auto",
                            }}
                            alt={name}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmF/vAwADMQFs4YXxygAAAABJRU5ErkJggg=="
                          />
                        </figure>
                        <div className={styles.info}>
                          <div className={styles.left}>
                            <p className={styles.name}>{name}</p>
                            <p className={styles.id}>{id}</p>
                            <p className={styles.merker}>{merker}</p>
                          </div>
                          <p className={styles.number}>{number}</p>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className={styles.btn}>
                <Button
                  value={{
                    name: `${name}一覧を見る`,
                    path: "/",
                    section: "products",
                  }}
                />
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Products;

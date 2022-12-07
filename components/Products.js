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
            <React.Fragment key={i}>
              <div className={styles.productsTitle}>
                <i>{icon}</i>
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
                            className={styles.heroImg}
                            alt="hero-image"
                          />
                        </figure>
                        <p className={styles.name}>{name}</p>
                        <p className={styles.id}>{id}</p>
                        <p className={styles.merker}>{merker}</p>
                        <p className={styles.number}>{number}</p>
                      </Link>
                    </div>
                  );
                })}
                <Button
                  value={{
                    name: `${name}を見る`,
                    path: "/",
                    section: "products",
                  }}
                />
              </div>
            </React.Fragment>
          );
        })}
      </section>
    </section>
  );
};

export default Products;

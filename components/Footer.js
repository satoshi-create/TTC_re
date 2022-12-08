import React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Meta from "../libs/SiteMeta";
import Image from "next/image";
import { footerLinks } from "../libs/links";
const Footer = () => {
  return (
    <section className={`parts-grid  ${styles.bcg}`}>
      <nav className={styles.nav}>
        {footerLinks.map((item, i) => {
          const { name, subItem, box } = item;
          return (
            <div className={`${styles.box} ${styles[box]}`} key={i}>
              <h4 className={styles.navtitle}>{name}</h4>
              <ul>
                {subItem.map((item, i) => {
                  const { name, path } = item;
                  return (
                    <li key={i} className={styles.navList}>
                      <Link href={path} className={styles.navname}>
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>
      <div className={styles.siteInfo}>
        <Link href="/">
          <div className={styles.titleBox}>
            <Image
              src={Meta.siteIcon}
              width={22}
              height={22}
              className={styles.favicon}
              alt={"favicon"}
            />
            <p className={styles.siteTitle}>{Meta.siteTitle}</p>
          </div>
        </Link>
        <p className={styles.address}>
          〒160-0023
          <br /> 東京都新宿区西新宿 6-12-1 <br />
          パークウエスト13F
        </p>
      </div>
      <small className={styles.copyright}>
        ©Copyright 2005-2022 (TTC Group) Trust Technology Co, LTD All rights
        reserved.
      </small>
      <figure className={styles.figure}>
        <Image
          src="/footer.png"
          width={362}
          height={243}
          className={styles.heroImg}
          alt="footer-image"
        />
      </figure>
    </section>
  );
};

export default Footer;

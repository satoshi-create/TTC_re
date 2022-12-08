import React from "react";
import styles from "../styles/Header.module.css";
import { Globe, Mail, Phone, Menu } from "react-feather";
import Link from "next/link";
import Meta from "../libs/SiteMeta";
import Image from "next/image";
import NavLinks from "./NavLinks";
import { contact } from "../libs/links";

const Header = () => {
  return (
    <section className={`parts-grid ${styles.header}`}>
      <div className={styles.boxUpper}>
        <i>
          <Globe />
        </i>
        {contact.map((item, i) => {
          const { path, icon } = item;
          return (
            <Link href={path} key={i}>
              <i>{icon}</i>
            </Link>
          );
        })}
      </div>
      <div className={styles.boxUnder}>
        <div className={styles.titleBox}>
          <Image
            src={Meta.siteIcon}
            width={22}
            height={22}
            className={styles.favicon}
            alt={"favicon"}
          />
          <Link href="/" className={styles.siteTitle}>
            {Meta.siteTitle}
          </Link>
        </div>
        <nav className={styles.nav}>
          <div className={styles.navSp}>
            <button className="btn">
              <Menu className={styles.menuIcon} />
            </button>
          </div>
        <NavLinks />
        </nav>
      </div>
    </section>
  );
};

export default Header;

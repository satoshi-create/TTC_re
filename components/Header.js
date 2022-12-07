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
    <section className="parts-grid">
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
          <Link href="/">
            <Image
              src={Meta.siteIcon}
              width={22}
              height={22}
              className={styles.favicon}
              alt={"favicon"}
            />
            <p className={styles.siteTitle}>{Meta.siteTitle}</p>
          </Link>
        </div>
        <nav className={styles.nav}>
          <div className={styles.navSp}>
            <button className="btn">
              <Menu className={styles.menuIcon} />
            </button>
          </div>
        </nav>
        <NavLinks />
      </div>
    </section>
  );
};

export default Header;

import React, { useState,useEffect } from "react";
import styles from "../styles/Header.module.css";
import { Globe, Menu } from "react-feather";
import Link from "next/link";
import Meta from "../libs/SiteMeta";
import Image from "next/image";
import NavLinks from "./NavLinks";
import { contact } from "../libs/links";

const Header = () => {
  const [stickyClass, setStickyClass] = useState("");
  console.log(stickyClass);

  const stickNavbar = () => {
    let windowHeight = window.scrollY;
    windowHeight > 80 ? setStickyClass("header-fixed") : setStickyClass("");
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);

  return (
    <section className={`parts-grid ${styles.header} ${styles[stickyClass]}`}>
      <div className={styles.boxUpper}>
        <i className={styles.language}>
          <Globe />
        </i>
        {contact.map((item, i) => {
          const { path, icon } = item;
          return (
            <Link href={path} key={i} className={styles.contactLink}>
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

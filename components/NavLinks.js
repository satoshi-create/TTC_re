import React from "react";
import Link from "next/link";
import styles from "../styles/NavLinks.module.css";
import { links } from "../libs/links";

const NavLinks = () => {
  return (
    <ul className={styles.navPc}>
      {links.map((item, i) => {
        const { path, name } = item;
        return (
          <li key={i}>
            <Link href={path} className={styles.name}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;

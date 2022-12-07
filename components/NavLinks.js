import React from "react";
import Link from "next/link";
import styles from "../styles/Links.module.css";
import { links } from "../libs/links";

const NavLinks = () => {
  return (
    <ul className={styles.navPc}>
      {links.map((item, i) => {
        const { path, name } = item;
        return (
          <li key={i}>
            <Link href={path}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;

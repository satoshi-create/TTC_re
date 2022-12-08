import Link from "next/link";
import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ value }) => {
  const { name, path, section } = value;
  return (
    <Link href={path} className={`${styles[section]}`}>
      <button className={`btn ${styles.btn}`}>{name}</button>
    </Link>
  );
};

export default Button;

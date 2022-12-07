import Link from "next/link";
import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ value }) => {
  const { name, path } = value;
  return (
    <Link href={path}>
      <button className={`btn ${styles.herobtn}`}>{name}</button>
    </Link>
  );
};

export default Button;

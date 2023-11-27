import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/">home</Link>
    </footer>
  );
};

export default Footer;

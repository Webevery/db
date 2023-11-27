import React from "react";
import HeaderLinks from "../HeaderLinks/HeaderLinks";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderLinks />
    </header>
  );
};

export default Header;

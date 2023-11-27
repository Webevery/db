"use client";

import React from "react";
import styles from "./HeaderLinks.module.scss";
import { headerLinks } from "@/data/headerLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderLinks = () => {
  const pathname = usePathname();
  return (
    <ul className={styles.headerLinks}>
      {headerLinks.map(({ id, title, href }) => {
        const isActive = pathname === href;
        return (
          <li key={id}>
            <Link href={href} className={isActive ? styles.activeLink : ""}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderLinks;

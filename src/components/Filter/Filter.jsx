"use client";

import { SiteContext } from "@/context/SiteContext";
import React, { useContext, useMemo } from "react";
import styles from "./Filter.module.scss";

import { IoMdCloseCircle } from "react-icons/io";

const Filter = () => {
  const { filter, setFilter, dataArr } = useContext(SiteContext);
  // console.log(dataArr.lenght);

  return (
    <>
      <div className={styles.inputWrapper}>
        <input
          className={styles.filter}
          type="text"
          placeholder="Find by Company Name"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />

        <IoMdCloseCircle
          className={styles.close}
          onClick={() => {
            setFilter("");
          }}
        />
      </div>
      {/* <h4>{dataArr.lenght}</h4> */}
    </>
  );
};

export default Filter;

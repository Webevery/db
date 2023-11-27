"use client";

import React, { useContext } from "react";
import { SiteContext } from "@/context/SiteContext";
import { FetchClientData } from "@/fetch/clientFetch";
import SendingListItem from "@/components/SendingListItem/SendingListItem";
import styles from "./page.module.scss";

const OnTheLine = () => {
  const { emptyNotes, setemptyNotes } = useContext(SiteContext);

  console.log(emptyNotes);

  const { data, mutate, error, isLoading } = FetchClientData();
  // console.log(data);

  const filteredData = data?.filter((item) => item.notes === "");
  console.log(filteredData);

  return (
    <div className={styles.wrapper}>
      {isLoading ? <p>Loading</p> : <SendingListItem data={filteredData} />}
    </div>
  );
};

export default OnTheLine;

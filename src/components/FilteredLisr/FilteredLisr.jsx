"use client";

import { SiteContext } from "@/context/SiteContext";
import React, { useContext, useMemo } from "react";
import styles from "./FilteredLisr.module.scss";
import { FetchClientData } from "@/fetch/clientFetch";
import SendingListItem from "../SendingListItem/SendingListItem";

const FilteredLisr = () => {
  const { filter, setDataLength, setemptyNotes } = useContext(SiteContext);

  const { data, mutate, error, isLoading } = FetchClientData();
  // console.log(data);

  const emptyNotesData = data?.filter((item) => item.notes === "");
  // console.log(emptyNotesData);

  if (data) {
    // console.log(isNaN(data.length));
    setTimeout(() => {
      setDataLength(data.length);
      setemptyNotes(emptyNotesData.length);
    }, 10);
  }

  const filteredData = useMemo(() => {
    if (!filter) return [];
    return data?.filter(({ companyName }) =>
      companyName.toLowerCase().includes(filter.toLowerCase())
    );
  }, [data, filter]);

  return (
    <>
      <SendingListItem data={filteredData} className={styles.filterList} />
    </>
  );
};

export default FilteredLisr;

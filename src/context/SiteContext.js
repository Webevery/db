"use client";

import React, { useState, createContext } from "react";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [filter, setFilter] = useState("");
  const [dataLength, setDataLength] = useState(null);
  const [emptyNotes, setemptyNotes] = useState(null);

  // console.log(filter);
  // console.log(dataLength);
  // console.log(emptyNotes);

  return (
    <SiteContext.Provider
      value={{
        filter,
        setFilter,
        dataLength,
        setDataLength,
        emptyNotes,
        setemptyNotes,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

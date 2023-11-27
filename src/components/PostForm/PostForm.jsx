"use client";

import React, { useContext, useState } from "react";
import styles from "./PostForm.module.scss";
import { useRouter } from "next/navigation";
import Filter from "../Filter/Filter";
import { SiteContext } from "@/context/SiteContext";
import Link from "next/link";

const PostForm = () => {
  const { dataLength, emptyNotes } = useContext(SiteContext);
  const router = useRouter();
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [social, setSocial] = useState("");

  const [userName, setUserName] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("submited: ", companyName, email, phone, userName, notes);

    try {
      await fetch("/api/sendings", {
        method: "POST",
        body: JSON.stringify({
          companyName,
          email,
          phone,
          social,
          userName,
          notes,
        }),
      });
      setCompanyName("");
      setEmail("");
      setPhone("");
      setSocial("");
      setUserName("");
      setNotes("");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => {
            setCompanyName(e.target.value);
            // console.log(companyName);
          }}
        />
        <input
          type="email"
          placeholder="Company Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="tel"
          placeholder="Company Phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Social link"
          value={social}
          onChange={(e) => {
            setSocial(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />

        <textarea
          cols="30"
          rows="10"
          placeholder="notes"
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        ></textarea>

        <button type="submit">add</button>
      </form>

      <Filter />
      <p style={{ color: "green", marginTop: 12, fontSize: 12 }}>
        Total sendings:
        <span style={{ fontSize: 20, fontWeight: "bold" }}> {dataLength}</span>
      </p>

      <Link
        href={`/in-line`}
        style={{ color: "#ff000078", marginTop: 12, fontSize: 12 }}
      >
        OnTheLine:
        <span style={{ fontSize: 20, fontWeight: "bold" }}> {emptyNotes}</span>
      </Link>
    </div>
  );
};

export default PostForm;

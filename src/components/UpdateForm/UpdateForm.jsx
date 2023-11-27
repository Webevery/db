"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./UpdateForm.module.scss";

const UpdateForm = ({ id, sending }) => {
  // console.log("sending", sending);

  const { companyName, email, phone, social, userName, notes } = sending;

  //   console.log(id);
  const [newCompanyName, setNewCompanyName] = useState(companyName);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhone, setNewPhone] = useState(phone);
  const [newSocial, setNewSocial] = useState(social);

  const [newUserName, setNewUserName] = useState(userName);
  const [newNotes, setNewNotes] = useState(notes);
  // const [newCreatedAt, setNewCreatedAt] = useState(createdAt);
  // const [newUpdatedAt, setNewUpdatedAt] = useState(updatedAt);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("newCompanyName", _id);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_DB_URL}/api/sendings/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            companyName: newCompanyName,
            email: newEmail,
            phone: newPhone,
            social: newSocial,

            userName: newUserName,
            notes: newNotes,
            // createdAt: newCreatedAt,
            // updatedAt: newUpdatedAt,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to update sendings");
      }

      router.refresh();
      router.push("/sendings");
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
          value={newCompanyName}
          onChange={(e) => {
            setNewCompanyName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Company Email"
          value={newEmail}
          onChange={(e) => {
            setNewEmail(e.target.value);
          }}
        />
        <input
          type="tel"
          placeholder="Company Phone"
          value={newPhone}
          onChange={(e) => {
            setNewPhone(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Social link"
          value={newSocial}
          onChange={(e) => {
            setNewSocial(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="newUserName"
          value={newUserName}
          onChange={(e) => {
            setNewUserName(e.target.value);
          }}
        />

        {/* <input
          type="text"
          placeholder="newUpdatedAt"
          value={newUpdatedAt}
          onChange={(e) => {
            setNewUpdatedAt(e.target.value);
          }}
        /> */}

        {/* <input
          type="text"
          placeholder="newCreatedAt"
          value={newCreatedAt}
          onChange={(e) => {
            setNewCreatedAt(e.target.value);
          }}
        /> */}

        <textarea
          cols="30"
          rows="10"
          placeholder="notes"
          value={newNotes}
          onChange={(e) => {
            setNewNotes(e.target.value);
          }}
        ></textarea>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;

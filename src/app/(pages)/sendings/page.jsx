import PostForm from "@/components/PostForm/PostForm";
import SendingList from "@/components/SendingList/SendingList";
import React from "react";
import styles from "./page.module.scss";

const Emails = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <PostForm />
        <SendingList />
      </div>
    </>
  );
};

export default Emails;

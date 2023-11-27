import UpdateForm from "@/components/UpdateForm/UpdateForm";
// import React, { useState } from "react";
import { getById } from "@/fetch/fetchSendings";
import styles from "./page.module.scss";

const EditSending = async ({ params }) => {
  const { id } = params;

  const sending = await getById(id);
  // console.log("EditSending sending: ", sending);

  return (
    <>
      <UpdateForm id={id} sending={sending} />
    </>
  );
};

export default EditSending;

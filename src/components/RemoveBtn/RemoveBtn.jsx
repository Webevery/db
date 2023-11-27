"use client";

import { deleteSending } from "@/fetch/fetchSendings";
import { useRouter } from "next/navigation";
import React from "react";

import { RiDeleteBin6Line } from "react-icons/ri";

const RemoveBtn = ({ id }) => {
  const router = useRouter();

  const removeSending = async () => {
    const confirmed = confirm("Are U sure?");
    if (confirmed) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_DB_URL}/api/sendings?id=${id}`,
          {
            method: "DELETE",
          }
        );

        if (res.ok) {
          router.refresh();
        } else {
          // Handle the error response here
          console.error(`Failed to delete item with id ${id}`);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  };

  return (
    <>
      <RiDeleteBin6Line onClick={removeSending} />
    </>
  );
};

export default RemoveBtn;

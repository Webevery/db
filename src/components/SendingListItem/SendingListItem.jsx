"use client";

import styles from "./SendingListItem.module.scss";
import Link from "next/link";
import RemoveBtn from "../RemoveBtn/RemoveBtn";

import { FaEdit } from "react-icons/fa";

const SendingListItem = ({ data, className }) => {
  return (
    <ul className={`${styles.list} ${className}`}>
      {data?.map(
        ({
          _id,
          companyName,
          email,
          phone,
          social,
          userName,
          notes,
          updatedAt,
          createdAt,
        }) => {
          const parts = createdAt.slice(0, 10).split("-");
          const formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;

          const updateParts = updatedAt.slice(0, 10).split("-");
          const formattedUpdate = `${updateParts[2]}.${updateParts[1]}.${updateParts[0]}`;

          return (
            <li key={_id}>
              <h2>{companyName}</h2>
              <p>
                email: <br />
                <span>{email}</span>
              </p>
              <p>
                phone: <br />
                <span>{phone}</span>
              </p>

              <p>
                social: <br />
                <span>{social}</span>
              </p>

              <p>
                userName: <br />
                <span>{userName}</span>
              </p>
              <p>
                notes:
                <br /> <span>{notes}</span>
              </p>
              <p>
                Updated at:
                <br />
                <span>{`${formattedUpdate}, ${updatedAt.slice(11, 16)}`}</span>
              </p>
              <p>
                Created at:
                <br />
                <span>{`${formattedDate}, ${createdAt.slice(11, 16)}`}</span>
              </p>
              <div className={styles.actions}>
                <Link href={`/sendings/${_id}`}>
                  <FaEdit />
                </Link>
                <RemoveBtn id={_id} />
              </div>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default SendingListItem;

"use client";

import useSWR from "swr";

export const FetchClientData = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  return useSWR(`${process.env.NEXT_PUBLIC_DB_URL}/api/sendings`, fetcher);
};

// it was on FilteredLisr earlier
// const fetcher = (...args) => fetch(...args).then((res) => res.json());
// const { data, mutate, error, isLoading } = useSWR(
//   `${process.env.NEXT_PUBLIC_DB_URL}/api/sendings`,
//   fetcher
// );

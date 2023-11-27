export const getData = async () => {
  const res = await fetch(`${process.env.DB_URL}/api/sendings`, {
    cache: "no-store",
  });
  // console.log("getData", res);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getById = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/api/sendings/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

import styles from "./SendingList.module.scss";
import { getData } from "@/fetch/fetchSendings";
import FilteredLisr from "../FilteredLisr/FilteredLisr";
import SendingListItem from "../SendingListItem/SendingListItem";

const SendingList = async () => {
  const data = await getData();

  return (
    <div className={styles.wrapper}>
      <FilteredLisr />
      <SendingListItem data={data} />
    </div>
  );
};

export default SendingList;

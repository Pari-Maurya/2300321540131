import { useEffect, useState } from "react";
import FilterBar from "../components/FilterBar";
import NotificationList from "../components/NotificationList";
import { getNotifications } from "../services/notificationService";

function AllNotifications() {
  const [notifications, setNotifications] =
    useState([]);

  const [type, setType] =
    useState("");

  useEffect(() => {
    loadData();
  }, [type]);

  async function loadData() {
    const data =
      await getNotifications(1, 20, type);
      console.log("Fetched notifications:", data);

    setNotifications(data);
  }

  return (
    <>
      <FilterBar
        type={type}
        setType={setType}
      />

      <NotificationList
        notifications={notifications}
      />
    </>
  );
}

export default AllNotifications;
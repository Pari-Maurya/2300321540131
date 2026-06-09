import { useEffect, useState } from "react";
import NotificationList from "../components/NotificationList";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import { getNotifications }
from "../services/notificationService";

import { getPriorityNotifications }
from "../utils/priorityUtils";

function PriorityNotifications() {
  const [topN, setTopN] =
    useState(10);

  const [notifications,
    setNotifications] =
    useState([]);

  useEffect(() => {
    loadData();
  }, [topN]);

  async function loadData() {
    const data =
      await getNotifications();

    setNotifications(
      getPriorityNotifications(
        data,
        topN
      )
    );
  }

  return (
    <>
      <FormControl
        sx={{ minWidth: 200, mb: 3 }}
      >
        <InputLabel>Top N</InputLabel>

        <Select
          value={topN}
          label="Top N"
          onChange={(e) =>
            setTopN(Number(e.target.value))
          }
        >
          <MenuItem value={10}>
            Top 10
          </MenuItem>

          <MenuItem value={15}>
            Top 15
          </MenuItem>

          <MenuItem value={20}>
            Top 20
          </MenuItem>
        </Select>
      </FormControl>

      <NotificationList
        notifications={notifications}
      />
    </>
  );
}

export default PriorityNotifications;
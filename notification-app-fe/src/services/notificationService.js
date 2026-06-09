import axios from "axios";

const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export async function getNotifications(
  page = 1,
  limit = 20,
  type = ""
) {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    let notifications = response.data.notifications;
    console.log("Fetched notifications:", notifications);

    if (type) {
      notifications = notifications.filter(
        (n) => n.Type === type
      );
    }

    return notifications;
  } catch (error) {
    console.error(error);
    return [];
  }
}
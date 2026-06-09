import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.ACCESS_TOKEN.slice(0,20));
console.log("Authorization:", `Bearer ${process.env.ACCESS_TOKEN}`.slice(0, 35));
const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

export async function fetchNotifications() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    return response.data.notifications || [];
  } catch (error) {
    console.error(
      "Failed to fetch notifications:",
      error.response?.data || error.message
    );

    return [];
  }
}
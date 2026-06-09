import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

import {
  STACKS,
  LEVELS,
  BACKEND_PACKAGES,
  FRONTEND_PACKAGES,
  COMMON_PACKAGES
} from './constant.js';

const LOG_API =
  "http://4.224.186.213/evaluation-service/logs";
const TOKEN = process.env.ACCESS_TOKEN;

export async function Log(
  stack,
  level,
  packageName,
  message
) {
  try {
    const response = await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data;
  } catch (error) {
    console.log("Status:", error.response?.status);
  console.log("Data:", error.response?.data);
  }
}
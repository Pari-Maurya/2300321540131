import {axios} from 'axios';
import {
  STACKS,
  LEVELS,
  BACKEND_PACKAGES,
  FRONTEND_PACKAGES,
  COMMON_PACKAGES
} from './constant.js';

const LOG_API =
  "http://4.224.186.213/evaluation-service/logs";

export async function Log(
  stack,
  level,
  packageName,
  message
) {
  try {

    if (!STACKS.includes(stack)) {
      throw new Error("Invalid stack");
    }

    if (!LEVELS.includes(level)) {
      throw new Error("Invalid level");
    }

    let allowedPackages =
      stack === "backend"
        ? [...BACKEND_PACKAGES, ...COMMON_PACKAGES]
        : [...FRONTEND_PACKAGES, ...COMMON_PACKAGES];

    if (!allowedPackages.includes(packageName)) {
      throw new Error("Invalid package");
    }

    const response = await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: packageName,
        message
      }
    );

    return response.data;

  } catch (error) {

    console.error(
      "Logging failed:",
      error.message
    );

    return null;
  }
}
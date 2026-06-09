import { fetchNotifications } from "./services/notificationService.js";

async function main() {
  const notifications = await fetchNotifications();

  console.log(
    `Fetched ${notifications.length} notifications`
  );

  console.log(notifications);
}

main();
import { fetchNotifications }
from "./services/notificationService.js";

import { calculateScore }
from "./utils/priorityUtils.js";

async function main() {

  const notifications =
    await fetchNotifications();

  const sortedNotifications =
    notifications.sort(
      (a, b) =>
        calculateScore(b) -
        calculateScore(a)
    );

  const top10 =
    sortedNotifications.slice(0, 10);

  console.log("\nTOP 10 NOTIFICATIONS\n");

  top10.forEach((n, index) => {
    console.log(
      `${index + 1}. ${n.Type} | ${n.Message} | ${n.Timestamp}`
    );
  });
}

main();
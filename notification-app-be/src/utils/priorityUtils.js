const weights = {
  Placement: 3,
  Result: 2,
  Event: 1
};

export function calculateScore(notification) {
  const priority = weights[notification.Type] || 0;

  const timestamp = new Date(
    notification.Timestamp
  ).getTime();

  return priority * 1000000000000 + timestamp;
}
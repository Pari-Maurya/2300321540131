const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export function getPriorityNotifications(
  notifications,
  n
) {
  return [...notifications]
    .sort((a, b) => {
      const scoreA =
        weights[a.Type] * 1000000000000 +
        new Date(a.Timestamp).getTime();

      const scoreB =
        weights[b.Type] * 1000000000000 +
        new Date(b.Timestamp).getTime();

      return scoreB - scoreA;
    })
    .slice(0, n);
}
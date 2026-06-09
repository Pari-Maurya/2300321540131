import NotificationCard from "./NotificationCard";

function NotificationList({ notifications }) {
  if (!notifications.length) {
    return (
      <h3>
        No notifications found
      </h3>
    );
  }

  return (
    <>
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}
    </>
  );
}

export default NotificationList;
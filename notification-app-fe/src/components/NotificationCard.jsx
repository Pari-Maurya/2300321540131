import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

function NotificationCard({ notification }) {
  const viewed =
    localStorage.getItem(notification.ID);

  const markViewed = () => {
    localStorage.setItem(
      notification.ID,
      "viewed"
    );
  };

  return (
    <Card
      onClick={markViewed}
      sx={{
        mb: 2,
        backgroundColor: viewed
          ? "#f5f5f5"
          : "#e3f2fd",
      }}
    >
      <CardContent>
        <Typography variant="h6">
          {notification.Type}
        </Typography>

        <Typography>
          {notification.Message}
        </Typography>

        <Typography variant="caption">
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;
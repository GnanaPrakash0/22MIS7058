import {
    Card,
    CardContent,
    Typography,
    Chip
} from "@mui/material";

function NotificationCard({ notification }) {

    const getColor = (type) => {
        switch (type) {
            case "Placement":
                return "success";
            case "Result":
                return "primary";
            case "Event":
                return "warning";
            default:
                return "default";
        }
    };

    return (
        <Card sx={{ marginBottom: 2 }}>
            <CardContent>

                <Chip
                    label={notification.Type}
                    color={getColor(notification.Type)}
                    sx={{ marginBottom: 1 }}
                />

                <Typography variant="h6">
                    {notification.Message}
                </Typography>

                <Typography color="text.secondary">
                    {notification.Timestamp}
                </Typography>

            </CardContent>
        </Card>
    );
}

export default NotificationCard;
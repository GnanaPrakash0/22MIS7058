import { useEffect, useState } from "react";
import {
    Container,
    Typography
} from "@mui/material";

import API from "../services/api";
import NotificationList from "../components/NotificationList";

function PriorityNotifications() {

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {

        try {

            const response = await API.get(
                "/top-notifications?limit=5"
            );

            setNotifications(response.data.notifications);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container sx={{ marginTop: 4 }}>

            <Typography
                variant="h4"
                gutterBottom
            >
                Priority Notifications
            </Typography>

            <NotificationList
                notifications={notifications}
            />

        </Container>
    );
}

export default PriorityNotifications;
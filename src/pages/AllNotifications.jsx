import { useEffect, useState } from "react";
import {
    Container,
    Typography
} from "@mui/material";

import API from "../services/api";
import NotificationList from "../components/NotificationList";
import FilterBar from "../components/FilterBar";

function AllNotifications() {

    const [notifications, setNotifications] = useState([]);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {

        try {

            const response = await API.get(
                "/top-notifications"
            );

            setNotifications(response.data.notifications);

        } catch (error) {
            console.log(error);
        }
    };

    const filteredNotifications =
        filter === "All"
            ? notifications
            : notifications.filter(
                  (notification) =>
                      notification.Type === filter
              );

    return (
        <Container sx={{ marginTop: 4 }}>

            <Typography
                variant="h4"
                gutterBottom
            >
                All Notifications
            </Typography>

            <FilterBar
                filter={filter}
                setFilter={setFilter}
            />

            <NotificationList
                notifications={filteredNotifications}
            />

        </Container>
    );
}

export default AllNotifications;
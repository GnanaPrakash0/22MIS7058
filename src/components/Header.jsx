import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    Campus Notifications System
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
import React from "react";
import { Paper, Grid, ListItem, ListItemText, Typography } from "@mui/material";

const Message = ({ message, type, time }) => {
    const justifyContent = type === "sent" ? "flex-end" : "flex-start";
    const align = type === "sent" ? "right" : "left";
    return (
        <ListItem key="2">
            <Grid container justifyContent={justifyContent}>
                <Grid item>
                    <Paper
                        sx={{
                            maxWidth: "40vw",
                            borderRadius: "15px",
                            padding: 1.5,
                            background: type === "sent" ? "#5B51D8" : "#405DE6",
                            borderBottomLeftRadius: type === "sent" ? "15px" : 0,
                            borderBottomRightRadius: type === "sent" ? 0 : "15px",
                        }}
                        elevation={3}
                    >
                        <ListItemText style={{ wordBreak: "break-word" }} align="left" primary={message}></ListItemText>
                        <Typography
                            align={align}
                            variant="caption"
                            display="block"
                            sx={{ fontWeight: 400, color: "lightgrey" }}
                        >
                            {time}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </ListItem >
    );
};

export default Message;

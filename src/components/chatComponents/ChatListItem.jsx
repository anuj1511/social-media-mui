import React from 'react'
import { ListItem, ListItemIcon, Avatar, ListItemText } from '@mui/material';

const ChatListItem = () => {
    return (
        <ListItem button key="RemySharp">
            <ListItemIcon>
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            </ListItemIcon>
            <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
            <ListItemText secondary="online" align="right"></ListItemText>
        </ListItem>
    )
}

export default ChatListItem
import React from 'react'
import { List, ListItem, ListItemIcon, Avatar, ListItemText } from '@mui/material';

const UserProfile = () => {
    return (
        <>
            <List>
                <ListItem button key="RemySharp">
                    <ListItemIcon>
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    </ListItemIcon>
                    <ListItemText primary="John Wick"></ListItemText>
                </ListItem>
            </List>
        </>
    )
}

export default UserProfile
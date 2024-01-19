import React from 'react'
import { List, Divider } from '@mui/material';
import ChatListItem from './ChatListItem';

const ChatList = () => {
    return (
        <List sx={{
            // height: '70vh',
            overflowY: 'auto'
        }}>
            <ChatListItem />
            <Divider />
            <ChatListItem />
            <Divider />
            <ChatListItem />
            <Divider />
            <ChatListItem />
            <Divider />
        </List>
    )
}

export default ChatList
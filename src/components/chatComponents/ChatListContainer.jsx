import { Divider } from '@mui/material'
import React from 'react'

import UserProfile from './UserProfile'
import SearchTextField from './SearchTextField'
import ChatList from './ChatList'
const ChatListContainer = () => {
    return (
        <>
            <UserProfile />
            <Divider />
            <SearchTextField />
            <Divider />
            <ChatList />
        </>
    )
}

export default ChatListContainer;
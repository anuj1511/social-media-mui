import React from 'react';
import { Paper, Grid, Box, Stack } from '@mui/material';

import ChatListContainer from './components/chatComponents/ChatListContainer';
import ChatHeader from './components/chatComponents/ChatHeader';
import MessageArea from './components/chatComponents/MessageArea';

/* 
<Stack direction="row" spacing={2} justifyContent="space-between">
<Sidebar setMode={setMode} mode={mode} />
<Feed />
<Rightbar />
</Stack>
*/

const Chat = () => {
    return (
        <>
            {/* <ChatHeader /> */}
            <Stack direction="row" spacing={2} justifyContent="space-between" component={Paper} sx={{
                width: '100%',
                height: '100vh'
            }}>
                <Box
                    flex={1}
                    sx={{
                        display: {
                            xs: "none", sm: "block"
                        },
                        borderRight: '1px solid #e0e0e0',
                        minWidth: 350
                    }}
                >
                    <ChatListContainer />
                </Box>
                <Box
                    flex={4}
                >
                    <MessageArea />
                </Box>
            </Stack>
            {/* <Grid container component={Paper} sx={{
                width: '100%',
                height: '100vh'
            }}>
                <Grid item xs={4} sx={{
                    borderRight: '1px solid #e0e0e0',
                }}>
                    <ChatListContainer />
                </Grid>
                <Grid item
                    xs={8}
                >
                    <MessageArea />
                </Grid>
            </Grid> */}
        </ >
    );
}

export default Chat;
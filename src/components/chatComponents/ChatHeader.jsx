import React from 'react'
import { Grid, Typography } from '@mui/material';

const ChatHeader = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h5" className="header-message">Chat</Typography>
            </Grid>
        </Grid>
    )
}

export default ChatHeader
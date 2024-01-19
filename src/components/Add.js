import { Tooltip, Fab, Modal, styled, Typography, Avatar, TextField, Stack, ButtonGroup, Button, Divider } from '@mui/material'
import React from 'react'
import { Add as AddIcon, EmojiEmotions, Image, VideoCameraBack, DateRange, PersonAdd } from "@mui/icons-material"
import { Box } from '@mui/system'
import { useState } from 'react'


const StyledModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
})

const UserBox = styled(Box)({
    display: "flex",
    gap: 10,
    alignItems: "center",
    marginBottom: 20,
})

const Add = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <Tooltip title="Add Post"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50% - 20px)", sm: 30 }
                }}
                onClick={(e) => setOpen(true)}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                    <Divider />
                    <Typography variant="h6" color="gray" textAlign="center">
                        Create Post
                    </Typography>
                    <Divider />
                    <UserBox mt={2}>
                        <Avatar sx={{ width: 25, height: 25 }} src="https://source.unsplash.com/random/900×700/?fruit" />
                        <Typography variant="span" fontWeight={500}>
                            Anuj J
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant='standard'
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add
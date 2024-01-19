import React from 'react'
import { InputBase, Box, AppBar, Toolbar, styled, Typography, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import { Pets, Mail, Notifications } from "@mui/icons-material"
import { grid } from '@mui/system';
import { useState } from 'react';

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled('div')(({ theme }) => ({
    background: "white",
    padding: "0px 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: 20,
    alignItems: 'center',
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: 10,
    alignItems: 'center',
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <AppBar position='sticky'>
            <StyledToolBar>
                <Typography
                    sx={{ display: { xs: "none", sm: "block" } }}
                    variant="h6">Anuj</Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />

                <Search>
                    <InputBase placeholder='Search...' />

                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        onClick={(e) => {
                            setOpen(true);
                        }}
                        sx={{ height: 25, width: 25 }} src=""
                    />
                </Icons>
                <UserBox>
                    <Avatar
                        onClick={(e) => {
                            setOpen(true);
                        }}
                        sx={{ height: 25, width: 25 }} src="" />
                    <Typography variant="span">Anuj</Typography>
                </UserBox>

                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    // anchorEl={anchorEl}
                    open={open}
                    onClose={(e) => {
                        setOpen(false)
                    }}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >My account</MenuItem>
                    <MenuItem >Logout</MenuItem>
                </Menu>
            </StyledToolBar>
        </AppBar>
    )
}

export default Navbar
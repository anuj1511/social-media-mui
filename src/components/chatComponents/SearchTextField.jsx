import React from 'react'
import { Fab, Grid, IconButton, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchTextField = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={12}
                    style={{ padding: '10px' }}
                >
                    <TextField startIcon={<Search />} id="outlined-basic-email" label="Search" variant="outlined" fullWidth
                        InputProps={{
                            startAdornment: (
                                <IconButton>
                                    <Search />
                                </IconButton>
                            )
                        }}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default SearchTextField
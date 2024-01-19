import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'

const Post = () => {
    return (

        <Card sx={{ margin: 5 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                style={{
                    height: "50vh",
                    objectFit: "cover"
                }}
                image="https://source.unsplash.com/random/900×700/?fruit"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />

                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Post
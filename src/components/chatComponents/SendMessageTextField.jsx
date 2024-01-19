import React, { useState } from "react";
import { Fab, TextField, Grid } from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";

const SendMessageTextField = ({ sendMessage }) => {

    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        setMessage(e.target.value)
        console.log(message);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submit handler");
        sendMessage("sent", message, "09:50")
        setMessage("");
    }

    const handleKeyDown = (e) => {
        console.log(e.key);
        if (e.key === "Enter") {
            console.log("enrer");
            e.preventDefault();
            submitHandler(e);
        }
    }

    return (
        <Grid container style={{ padding: "20px" }}>
            <Grid item xs={10} sm={11}>
                <TextField id="outlined-basic-email" label="Message" fullWidth multiline
                    value={message} onChange={handleChange} onKeyDown={handleKeyDown} />
            </Grid>
            <Grid item xs={2} sm={1} align="right">
                <Fab color="primary" aria-label="add">
                    <SendIcon onClick={submitHandler} />
                </Fab>
            </Grid>
        </Grid>
    );
};

export default SendMessageTextField;

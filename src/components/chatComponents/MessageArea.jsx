import React, { useState } from 'react'
import Messages from './Messages'
import SendMessage from './SendMessageTextField'
import { Divider } from '@mui/material';

const MessageArea = () => {

    const [messages, setMessages] = useState([
        { type: "sent", message: "Hey man, What's up?", time: "09:30" },
        { type: "received", message: "Sorry bro, didn't saw your message.", time: "12:40" },
        { type: "received", message: "I am great, what about you", time: "12:41" },
        { type: "sent", message: "Cool. i am good, let's catch up!", time: "12:45" },
        { type: "received", message: "I have some plans today, maybe tommorow", time: "12:47" },
        { type: "sent", message: "Okay, no problem", time: "12:47" },
        { type: "sent", message: "Then tommorow eve, 6 o'clock?", time: "12:47" },
        { type: "received", message: "Sounds good to me!", time: "12:48" },
        { type: "sent", message: "Great!", time: "12:48" },
    ])

    const sendMessage = async (_type, _messagae, _time) => {
        // var obj = { type: { _type }, message: _messagae, time: _time };
        setMessages(messages.concat({ type: _type, message: _messagae, time: _time }))
    }

    return (
        <>
            <Messages messages={messages} />
            <Divider />
            <SendMessage sendMessage={sendMessage} />
        </>
    )
}

export default MessageArea;
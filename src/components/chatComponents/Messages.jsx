import React, { useEffect, useRef } from 'react'
import { List, Container } from '@mui/material';
import Message from './Message';

const Messages = ({ messages }) => {

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behaviour: "slow" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages])

    return (
        <Container maxWidth="md" >
            <List className="chat-container-list" sx={{
                height: '80vh',
                overflowY: 'auto'
            }}>
                {messages.map((data, idx) => (
                    <Message key={idx} type={data.type} message={data.message} time={data.time} />
                ))}
                <div ref={messagesEndRef} />
            </List>
        </Container>
    )
}

export default Messages
'use client';

import React, { useState } from 'react';
import styles from './ai-chat.module.css';

const AIChat: React.FC = () => {
    const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleSend = () => {
        if (input.trim() === '') return;

        const userMessage = input;
        const botMessage = `You said: ${input}`;

        setMessages([...messages, { user: userMessage, bot: botMessage }]);
        setInput('');
    };

    return (
        <div className={styles.chatContainer}>
            <div
                className={`${styles.chatBubble} ${isOpen ? styles.open : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? (
                    <div
                        className={styles.chatContent}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the chat content
                    >
                        <h1>AI Chatbot</h1>
                        <div className={styles.messagesContainer}>
                            {messages.map((message, index) => (
                                <div key={index}>
                                    <p>
                                        <strong>User:</strong> {message.user}
                                    </p>
                                    <p>
                                        <strong>Bot:</strong> {message.bot}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                        />
                        <button onClick={handleSend}>Send</button>
                    </div>
                ) : (
                    <div className={styles.chatIcon}>😊</div>
                )}
            </div>
        </div>
    );
};

export default AIChat;
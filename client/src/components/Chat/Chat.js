import React, { useEffect, useContext} from "react";
import { DataContext } from "../../App";
import './Chat.css'

const Chat = () => {
    const context = useContext(DataContext);
    useEffect(() => {

    });

    return (
        
                <div>
                    <h1>Chat</h1>
                    <p>Hi {context.name}!</p>
                    <p>Welcome to {context.room}</p>
                </div>
            
    )
}
export default Chat;
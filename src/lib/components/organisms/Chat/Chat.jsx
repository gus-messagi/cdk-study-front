import React from 'react';
import ChatMessage from '../../atoms/ChatMessage';
import TextEditor from '../../atoms/TextEditor';
import './Chat.sass';

function Chat() {
    return (
        <div className="chat-div">
            <div className="messages-div">
                <ChatMessage isMessageFromFriend={false}/>
                <ChatMessage isMessageFromFriend={true}/>
            </div>
            <div className="text-editor-div">
                <TextEditor />
            </div>
        </div>
    )
}

export default Chat;
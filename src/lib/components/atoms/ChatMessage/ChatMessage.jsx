import React from 'react';
import './ChatMessage.sass';

function ChatMessage({isMessageFromFriend}) {
    return(
        <div 
            className="message-div"
            style={isMessageFromFriend ? {"float": "right", "text-align": "right"} : null }
        >
            <b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus maiores rem fuga. Autem porro qui odio exercitationem soluta nihil, distinctio, tenetur a beatae reiciendis eligendi iste! Delectus odit saepe tempora.</b>
            <br/>
            <div className="message-time">
                <b>
                    00:00
                </b>
            </div>
        </div>        
    )
}

export default ChatMessage;
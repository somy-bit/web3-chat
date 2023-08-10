import React from 'react'
import { useMoralis } from 'react-moralis';
import TimeAgo from 'timeago-react';
import Avatar from './Avatar';

function Message({ message }) {

    const { user } = useMoralis();

    const isUserMessage = message.get('ethAddress') === user.get('ethAddress')

    return (
        
            <div className={`flex items-end ${isUserMessage && 'justify-end'}`}>
                <div  className={`relative ${isUserMessage&& "order-last"} ml-3 h-8 w-8`} >
                     <Avatar username={message.get('user')}/>
                     <p className={`absolute -bottom-5 text-xs ${isUserMessage ?'text-pink-300 right-2' :'text-blue-400 left-4'}`}>{message.get('user')}</p>
                     
                </div>
                <div className={`text-xs text-white m-1 ${!isUserMessage&& "order-last"}`}>
                    <TimeAgo  datetime={message.createdAt} />
                </div>
                
               
                <div className={`flex px-4 py-5 rounded-lg ${isUserMessage ? 'rounded-br-none bg-pink-300' : 'rounded-bl-none bg-blue-300'} `}>
                    <p>{message.get('message')}</p>
                   
                </div>
               
            </div>
        
    );
}

export default Message;
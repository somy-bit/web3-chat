import React from 'react'
import { useState } from 'react';
import { useMoralis } from 'react-moralis';

function SendMessage({endOfMessRef}) {

    const [message, setMessage] = useState('');
    const { Moralis, user } = useMoralis();
   

    const sendMess = (e) => {
        e.preventDefault()

        if (!message) return;

        const Messages = Moralis.Object.extend("Messages")
        const messages = new Messages();

        messages.save({
            message: message,
            user: user.getUsername(),
            ethAddress: user.get("ethAddress")
        })
            .then(
                (message) => {
                 console.log(message)
                },
                (error) => {
                    console.log("error saving:", error);
                })

          endOfMessRef.current.scrollIntoView({behaviour:'smooth'})
          setMessage("")      
    }

    return (
        <form className='fixed  bottom-10 px-4  max-w-2xl flex w-11/12 mx-auto bg-black opacity-70
        border-blue-500 border-4 rounded-full'>

            <input
                className='flex-grow  py-2 outline-none text-white z-50 bg-transparent '
                type='text'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='enter a message'
            />
            <button
                onClick={sendMess}
                type='submit'
                className='text-gray-400 font-semibold'>send</button>

        </form>
    )
}

export default SendMessage;
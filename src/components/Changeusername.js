import React from 'react'
import { useMoralis } from 'react-moralis';


function ChangeUsername() {

    const { setUserData, user, isUserUpdating } = useMoralis();

    const setUsername = () => {

        const username = prompt(`enter your new username :(current is ${user.getUsername()})`)

        if (!username) return;

        setUserData({ username })

    }

    return (
        <div className='absolute top-8 right-8'>
            <button
                className='text-pink-500 hover:opacity-70 cursor-pointer'
                onClick={setUsername}
            >change the user</button>
        </div>
    )

}

export default ChangeUsername;
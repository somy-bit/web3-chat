import React from 'react'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'

function Avatar({username,logoutOnPress}){

    const{user,logout} = useMoralis();

    return(
        <Image 
            src={`https://api.dicebear.com/6.x/pixel-art/png?seed=${ username || user.get('username')}`}
            layout='fill'
            onClick={()=>logoutOnPress && logout()}
            className='rounded-full cursor-pointer hover:opacity-70'
        />
    )


}

export default Avatar
import React from 'react'
import Image from 'next/image';
import Avatar from './Avatar';
import { useMoralis } from 'react-moralis';
import ChangeUsername from './Changeusername';

function Header() {
    const { user } = useMoralis();

    return (
        <div className='sticky top-0 text-pink-400 bg-black shadow-sm border-b-4 p-4 z-50 border-pink-500'>
            <div className='grid grid-cols-5 w-full  lg:grid-cols-6 items-end lg:items-center'>
                <div className='relative h-24 w-24 hidden lg:inline-grid m-6'>
                    <Image
                        src="/avatar.jpg"
                        layout='fill'
                        className="rounded-full object-cover "
                    />
                </div>

                <div className='col-span-4 '>

                    <div className='relative h-48 w-48 bg-black rounded-full border-8 border-pink-500 lg:mx-auto'>
                        <Avatar logoutOnPress />
                    </div>
                    <div className=' lg:text-center'>
                        <h1 className='text-2xl'>welcome to METAVERSE</h1>
                        <h2 className='text-4xl truncate font-bold'>{user.getUsername()}</h2>
                    </div>

                    <ChangeUsername />

                </div>

            </div>
        </div>
    )
}

export default Header;
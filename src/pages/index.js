import Head from 'next/head'
import Login from '../components/login'
import { useMoralis } from 'react-moralis';
import Header from '../components/Header';
import Messages from '../components/Messages'
import { useEffect } from 'react';


export default function Home() {

  const { isAuthenticated, logout } = useMoralis();

  useEffect(()=>{


  },[isAuthenticated])

  if (!isAuthenticated) return <Login />

  return (
    <main className='h-screen  overflow-y-scroll no-scrollbar bg-gradient-to-b from-black to-fuchsia-700 overflow-hidden' >
      <Head>
        <title>meta</title>
      </Head>

      <div className='max-w-screen-2xl  mx-auto  '>
        
          <Header />
        

        <Messages />
      </div>



    </main>
  )
}

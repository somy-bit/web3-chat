import React, { useEffect, useRef, useState } from 'react'
import { ByMoralis, useMoralis, useMoralisQuery,useMoralisSubscription } from 'react-moralis'
import SendMessage from './SendMessasge';
import Message from './Message';

function Messages() {

    const { user,Moralis } = useMoralis();
    const endOfMessRef = useRef(null);
   // const[data,setDate] = useState([]);

    const MOST_MIN_BEFORE = 100;

    const{data,error} = useMoralisQuery(
        "Messages",
        (query)=>query.ascending('createdAt')
        .greaterThan('createdAt',new Date(Date.now()-1000*60*60*24*MOST_MIN_BEFORE)),
        [],
        {live:true}
    );

    useMoralisSubscription("Messages",q=>q,[],{
        onCreate: item=>alert('item creted'),
        onUpdate:item=>alert('item update')
    })
    

    // const fetchYourData = async()=>{

    //     const results = await fetch();
    //     // alert("Successfully retrieved " + results.length + " messages.");
    //     // Do something with the returned Moralis.Object values
    //     setDate(results);
    //   };

    // useEffect(() => {

        

    //     const liveQuery = async()=>{

    //         fetchYourData()
    //         let query = new Moralis.Query("Messages")
    //         let subscription = await query.subscribe();
     
    //         subscription.on("create", fetchYourData);
    //         subscription.on("update", fetchYourData);
    //         subscription.on("delete", fetchYourData);
    //     }

        
    //     liveQuery();
         

    //     return function cleanUp(){
            
           
    //     }
       

       

    // }, [])


    return (
        <div className='pb-56'>
            <div className='my-5'>
                <ByMoralis variant='dark' style={{ marginLeft: 'auto', marginRight: 'auto' }} />
            </div>

            <div className='space-y-10 p-4'>
                {data.map(message =>
                    <Message key={message.id} message={message} />)}
            </div>

            <div className='flex justify-center'>
                <SendMessage endOfMessRef={endOfMessRef} />
            </div>

            <div ref={endOfMessRef} className='text-gray-400 text-center'>
                <p>you are uptodate {user.getUsername()}</p>
            </div>


        </div>
    )
}

export default Messages;
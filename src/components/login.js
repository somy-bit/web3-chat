import React,{useState} from 'react'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import Moralis from 'moralis-v1'

function Login(){
    const {isAuthenticated,authenticate,enableWeb3} = useMoralis();
    const [isAuthenticating,setIsAuthenticating] = useState(false);
    const [authError,setAuthError] = useState(null);

    const  login = async(provider)=>{
       
        try{

            setIsAuthenticating(true)
            setAuthError(null)

            await enableWeb3({throwOnError:true,provider});
            const{account,chainId} = Moralis;

            if(!account){

                throw new Error("there is no account,connection failed");
                
            }

            if(!chainId){

                throw new Error("no connected chain was found")
            }

            //get message 
            const {message} =await Moralis.Cloud.run("requestMessage",{
                address : account,
                chain : parseInt(chainId,16),
                network :"evm"
            });

            //login 

            await authenticate({
                signingMessage:message,
                throwOnError:true
            }).then((user)=>console.log(user));

        }catch(error){

            setAuthError(error)

        }finally{

            setIsAuthenticating(false)
            
        }
    }


    return(
        <div className='bg-black relative text-white' >
        
            <div className='z-50 absolute w-full h-4/6 flex flex-col justify-center items-center space-y-4'>
                <Image 
                className='object-cover rounded-full'
                src="/avatar.jpg"
                width={200}
                height={200}
                
                />

                <button
                onClick={()=>login("metamask")}
                 className='p-5 rounded-lg animate-pulse font-bold bg-yellow-500'>Login to METAVERSE</button>

            </div>

            <div className='h-screen '>
                <Image src='https://links.papareact.com/55n' layout='fill' objectFit='cover'/>
            </div>
        </div>
    )
}

export default Login;
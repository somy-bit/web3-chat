import '@/styles/globals.css'
import { MoralisProvider } from 'react-moralis'

export default function App({ Component, pageProps }) {
  return (
    <MoralisProvider appId='001' serverUrl='https://metaverse-0-7a5f07ba8966.herokuapp.com/server'>
    
      <Component {...pageProps} />
    </MoralisProvider>

  )

}
